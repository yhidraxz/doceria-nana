import { PrimaryButton } from "../component/primaryButton.jsx";

export function PedidoPage() {
  return (
    <div className="bg-base-100 h-screen flex flex-col">
      {/* Top heading */}
      <div className="pt-10 px-4">
        <h1 className="text-xl text-black text-center font-bold">
          Que tipo de pedido você quer realizar?
        </h1>
      </div>

      {/* Centered button (takes remaining space) */}
      <div className="flex-grow flex flex-col gap-6 items-center justify-center px-4">
        <PrimaryButton
          text="Encomenda pra festa 🎉"
          onClick={() => {
            window.location.href =
              "https://api.whatsapp.com/send?phone=5513991189323&text=Oi!%20Eu%20quero%20fazer%20uma%20encomenda%20pra%20uma%20festa%20no%20dia%3A%20";
          }}
          className="bg-pink-600 text-white px-6 py-3 rounded-xl text-base"
        />
        <button
          className="btn btn-dash btn-secondary text-base text px-5 py-3 rounded-xl shadow-md hover:bg-pink-700"
          onClick={() => {
            window.location.href =
              "https://www.ifood.com.br/delivery/guaruja-sp/doceria-da-nana-pitangueiras/1e9ae87e-c14a-4a40-b23c-793d2b14c1d9?UTM_Medium=share";
          }}
        >
          Pedir uma caixinha agora
        </button>
      </div>
    </div>
  );
}
