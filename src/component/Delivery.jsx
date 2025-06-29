import delivery from "../assets/delivery.webp";
import { Cards } from "./Cards";

export function Delivery() {
  return (
    <div className="flex flex-col bg-base-100">
      <Cards
        icon={delivery}
        title="Delivery de caixinhas"
        description="Fazemos delivery de brigadeiros de qualquer quantidade, preço por unidade"
        buttonText="Pedir uma caixinha agora"
        buttonAction={() => {
          window.location.href =
            "https://www.ifood.com.br/delivery/guaruja-sp/doceria-da-nana-pitangueiras/1e9ae87e-c14a-4a40-b23c-793d2b14c1d9?UTM_Medium=share";
        }}
      />
    </div>
  );
}
