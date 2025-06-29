// api/supabaseCSV.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Convert array of objects to CSV string
const convertToCSV = (data) => {
  if (!data || data.length === 0) return "";

  const headers = Object.keys(data[0]);
  const csvHeaders = headers.join(",");

  const csvRows = data.map((row) => {
    return headers
      .map((header) => {
        const value = row[header];
        if (
          typeof value === "string" &&
          (value.includes(",") || value.includes('"') || value.includes("\n"))
        ) {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return value ?? "";
      })
      .join(",");
  });

  return [csvHeaders, ...csvRows].join("\n");
};

// Trigger file download
const downloadCSV = (csvData, filename) => {
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");

  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};

// Main export function
export const exportTableToCSV = async (tableName, filename, form) => {
  const {
    estado,
    cidade,
    atividadeComercial,
    porte,
    minAnos,
    maxAnos,
    qtdLeads,
  } = form;
  try {
    console.log(`form is: ${form.estado}`);
    // console.log(
    //   `tried to find by estado ${estado}, cidade ${cidade}, atividade ${atividadeComercial}, porte ${porte}, minAnos ${minAnos}, maxAnos ${maxAnos}, qtdLeads ${qtdLeads}`
    // );

    let query = supabase.from("leads").select("*");

    query = query
      .eq("cnae", atividadeComercial)
      .eq("tamanho", porte)
      .gte("anos_no_mercado", minAnos)
      .lte("anos_no_mercado", maxAnos);

    if (estado) query = query.eq("estado", estado);
    if (cidade) query = query.eq("cidade", cidade);

    query = query.limit(qtdLeads);

    const { data, error } = await query;

    if (error) throw new Error(error.message);
    if (!data || data.length === 0) throw new Error("No data found to export");

    const csvData = convertToCSV(data);
    const finalFilename = filename || `${tableName}-export-${Date.now()}.csv`;
    downloadCSV(csvData, finalFilename);

    return { success: true, count: data.length };
  } catch (error) {
    throw new Error(`Export failed: ${error.message}`);
  }
};
