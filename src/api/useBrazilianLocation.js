import { useState, useEffect } from "react";

export const useBrazilianLocations = () => {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [loadingEstados, setLoadingEstados] = useState(true);
  const [loadingCidades, setLoadingCidades] = useState(false);

  // Load Brazilian states on component mount
  useEffect(() => {
    const fetchEstados = async () => {
      try {
        const response = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
        );
        const data = await response.json();

        const estadosFormatted = data.map((estado) => ({
          value: estado.sigla,
          label: estado.nome,
        }));

        setEstados(estadosFormatted);
      } catch (error) {
        console.error("Error fetching estados:", error);
        // Fallback to hardcoded states if API fails
        setEstados([
          { value: "AC", label: "Acre" },
          { value: "AL", label: "Alagoas" },
          { value: "AP", label: "Amapá" },
          { value: "AM", label: "Amazonas" },
          { value: "BA", label: "Bahia" },
          { value: "CE", label: "Ceará" },
          { value: "DF", label: "Distrito Federal" },
          { value: "ES", label: "Espírito Santo" },
          { value: "GO", label: "Goiás" },
          { value: "MA", label: "Maranhão" },
          { value: "MT", label: "Mato Grosso" },
          { value: "MS", label: "Mato Grosso do Sul" },
          { value: "MG", label: "Minas Gerais" },
          { value: "PA", label: "Pará" },
          { value: "PB", label: "Paraíba" },
          { value: "PR", label: "Paraná" },
          { value: "PE", label: "Pernambuco" },
          { value: "PI", label: "Piauí" },
          { value: "RJ", label: "Rio de Janeiro" },
          { value: "RN", label: "Rio Grande do Norte" },
          { value: "RS", label: "Rio Grande do Sul" },
          { value: "RO", label: "Rondônia" },
          { value: "RR", label: "Roraima" },
          { value: "SC", label: "Santa Catarina" },
          { value: "SP", label: "São Paulo" },
          { value: "SE", label: "Sergipe" },
          { value: "TO", label: "Tocantins" },
        ]);
      } finally {
        setLoadingEstados(false);
      }
    };

    fetchEstados();
  }, []);

  // Load cities when state changes
  const fetchCidades = async (estadoSigla) => {
    if (!estadoSigla) {
      setCidades([]);
      return;
    }

    setLoadingCidades(true);
    try {
      const response = await fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSigla}/municipios?orderBy=nome`
      );
      const data = await response.json();

      const cidadesFormatted = data.map((cidade) => ({
        value: cidade.nome,
        label: cidade.nome,
      }));

      setCidades(cidadesFormatted);
    } catch (error) {
      console.error("Error fetching cidades:", error);
      setCidades([]);
    } finally {
      setLoadingCidades(false);
    }
  };

  return {
    estados,
    cidades,
    loadingEstados,
    loadingCidades,
    fetchCidades,
  };
};
