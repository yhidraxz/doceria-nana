import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "./primaryButton";
import heroImage from "../assets/heroImage.jpg";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center px-4 py-10">
      <img
        src={heroImage}
        alt="Brigadeiros deliciosos"
        className="w-48 h-48 object-cover rounded-full shadow-lg mb-5"
      />

      <h1 className="text-2xl font-extrabold text-pink-900 leading-tight mb-4">
        Os melhores brigadeiros da baixada!
      </h1>

      <p className="text-pink-800 text-base opacity-80 mb-6">
        Pra sua festa ou em caixinha pra matar sua vontade
      </p>
      <div className="flex justify-center gap-1">
        <PrimaryButton
          text="Fazer pedido"
          className="bg-pink-600 text-white text-base px-5 py-3 rounded-xl shadow-md hover:bg-pink-700"
          onClick={() => navigate("/pedido")}
        />
        <button className="btn btn-dash btn-secondary text-base text px-5 py-3 rounded-xl shadow-md hover:bg-pink-700">
          Ver cardápio
        </button>
      </div>
    </div>
  );
}
