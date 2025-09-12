import React from "react";

function Contacto() {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <p className="mb-6">Entra em contacto connosco através do formulário:</p>

      <form
        action="https://formspree.io/f/SEU_ENDPOINT"
        method="POST"
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            name="nome"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mensagem</label>
          <textarea
            name="mensagem"
            rows="4"
            required
            className="w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contacto;
