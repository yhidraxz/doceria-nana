import ferrero from "../assets/ferrero.webp";
import ninho from "../assets/ninho.webp";
import cereja from "../assets/cereja.webp";
import uva from "../assets/uva.webp";
import preto from "../assets/preto.webp";
import branco from "../assets/branco.webp";
import { Cards } from "./Cards";

export function Sabores() {
  return (
    <div className="flex flex-col bg-base-100">
      <h1 className="font-bold text-3xl text-center py-4 text-base-light-100 mt-10">
        Brigadeiros gourmet
      </h1>
      <div className="card-dad flex flex-col gap-10 p-10">
        <Cards
          icon={ferrero}
          title="Ferrero Rocher"
          description="Massa de brigadeiro recheado de nutella e coberto de amendoim"
        />
        <Cards
          icon={ninho}
          title="Ninho com nutella"
          description="Massa de brigadeiro de chocolate branco recheado de nutella e coberto de leite ninho"
        />
        <Cards
          icon={cereja}
          title="Floresta Negra"
          description="Massa de brigadeiro recheada com uma cereja e coberta de miçanga vermelha"
        />
        <Cards
          icon={uva}
          title="Surpresa de uva verde"
          description="Massa de brigadeiro de chocolate de chocolate branco recheado com uma uva verde, coberta de açúcar"
        />
        <Cards
          icon={preto}
          title="Chocolate preto"
          description="O brigadeiro tradicional preto que todo mundo ama!"
        />
        <Cards
          icon={branco}
          title="Branco"
          description="Brigadeiro tradicional de chocolate branco"
        />

        <button className="btn btn-dash btn-secondary text-base text px-5 py-3 rounded-xl shadow-md hover:bg-pink-700">
          Ver todos os sabores
        </button>
      </div>
    </div>
  );
}
