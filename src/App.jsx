import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/HomePage.jsx";
import { PedidoPage } from "./page/PedidoPage.jsx";

function App() {
  return (
    <div data-theme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedido" element={<PedidoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
