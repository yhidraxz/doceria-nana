import { HeroSection } from "../component/heroSection.jsx";
// import { NavBar } from "../component/NavBar.jsx";
import { Sabores } from "../component/Sabores.jsx";
import { Festa } from "../component/Festa.jsx";
import { Delivery } from "../component/Delivery.jsx";

export function Home() {
  return (
    <div className="text-base-light-100">
      {/* <NavBar /> */}
      <HeroSection />
      <Sabores />
      <Festa />
      <Delivery />
    </div>
  );
}
