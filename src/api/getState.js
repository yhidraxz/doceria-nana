import { getCities } from "./getCities.js";

export async function getState() {
  const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  try {
    const response = await fetch(url);

    const data = await response.json();

    let states = [];

    await data.map((state) => {
      const newState = {
        value: state.sigla,
        label: state.nome,
      };

      states.push(newState);
    });

    return states;
  } catch (error) {
    console.log(error);
  }
}

export async function getCityFromState(stateName) {
  const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

  try {
    const response = await fetch(url);

    const data = await response.json();

    let stateId;

    for (const state of data) {
      if (state.sigla === stateName) {
        stateId = state.id;
      }
    }
    return getCities(stateId);
  } catch (err) {
    console.log(err);
  }
}
