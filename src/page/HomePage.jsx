import { HeroSection } from "../component/heroSection.jsx";
import { Sabores } from "../component/Sabores.jsx";
import { Festa } from "../component/Festa.jsx";
import { Delivery } from "../component/Delivery.jsx";
import { Footer } from "../component/Footer.jsx";

export function Home() {
  return (
    <div className="text-base-light-100">
      {/* <NavBar /> */}
      <HeroSection />
      <Sabores />
      <Festa />
      <Delivery />
      <Footer />
    </div>
  );
}
