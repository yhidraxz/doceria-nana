import React from "react";
import { PrimaryButton } from "./primaryButton";
import festaImg from "../assets/festa.webp";

export function Festa() {
  return (
    <section className="bg-pink-50 py-12 px-6 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold text-pink-900 mb-4">
        Brigadeiros para Festas 🎉
      </h2>

      <img
        src={festaImg}
        alt="Caixa com 100 brigadeiros para festas"
        className="w-full max-w-md rounded-xl shadow-md object-cover mb-6"
      />

      <p className="text-lg text-pink-800 opacity-90 max-w-md">
        Encomende agora por <strong>apenas R$110 o cento</strong>.
      </p>
      <div>
        <PrimaryButton
          text="Quero agendar pra minha festa!"
          className="bg-pink-600 border-none mt-4"
          onClick={() => {
            window.location.href =
              "https://api.whatsapp.com/send?phone=5513991189323&text=Oi!%20Eu%20quero%20fazer%20uma%20encomenda%20pra%20uma%20festa%20no%20dia%3A%20";
          }}
        />
      </div>
    </section>
  );
}
