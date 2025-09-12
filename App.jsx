import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Edições Paladim</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Início</Link>
          <Link to="/catalogo" className="hover:underline">Catálogo</Link>
          <Link to="/contacto" className="hover:underline">Contacto</Link>
        </div>
      </nav>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
