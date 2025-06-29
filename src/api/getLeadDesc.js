import { createClient } from "@supabase/supabase-js";

const supaUrl = import.meta.env.VITE_SUPABASE_URL;
const supaKey = import.meta.env.VITE_SUPABASE_KEY;

console.log(supaUrl, supaKey);

const supabase = createClient(supaUrl, supaKey);

export async function getSecao() {
  const { data, error } = await supabase
    .from("test_cnae")
    .select("denominacao, secao")
    .not("secao", "is", null)
    .is("divisao", null);

  if (error) console.log(error);

  const unique = new Map();
  data.forEach((row) => {
    if (!unique.has(row.secao)) {
      unique.set(row.secao, row.denominacao);
    }
  });

  // Convert to array of { value, label }
  const options = Array.from(unique, ([value, label]) => ({
    value,
    label,
  }));

  return options;
}

export async function getDivisaoFromSecao(secao) {
  const { data, error } = await supabase
    .from("test_cnae")
    .select("denominacao, divisao")
    .eq("secao", secao)
    .not("divisao", "is", null)
    .is("grupo", null);

  if (error) console.log(error);

  let placeholder = { value: "", label: "--Selecione uma opção" };
  const options = data.map((row) => ({
    value: row.divisao,
    label: row.denominacao,
  }));

  options.unshift(placeholder);

  console.log(options);
  return options;
}

export async function getLeadDesc(row, digits) {
  if (row == "subclasse") {
    digits = digits.replace(".", "");
  }

  const { error, data } = await supabase
    .from("test_cnae")
    .select(`denominacao, ${row}`)
    .not(`${row}`, "is", null)
    .like(`${row}`, `${digits}%`);

  if (error) console.log(error);
  console.log("data: ", data);
  const options = data.map((value) => ({
    value: value[row],
    label: value.denominacao,
  }));

  let placeholder = { value: "", label: "--Selecione uma opção" };

  options.unshift(placeholder);

  return options;
}
