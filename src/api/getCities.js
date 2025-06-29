export async function getCities(UF) {
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/distritos`;
  try {
    const response = await fetch(url);

    const data = await response.json();

    let citieNames = await data.map((city) => city.nome);

    return citieNames;
  } catch (err) {
    console.log(err);
  }
}
