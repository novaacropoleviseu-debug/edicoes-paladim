import React from "react";
import Logo from "./assets/logo.svg";

const sampleBooks = [
  {
    id: 1,
    title: "Setenário de Leonel",
    author: "Coletânea",
    cover: null,
    description:
      "Um conto filosófico e simbólico que explora a constituição septenária do homem — edição inaugural da Paladim.",
  },
  {
    id: 2,
    title: "Ensaios de Virtude",
    author: "Vários autores",
    cover: null,
    description:
      "Reflexões práticas sobre ética, cidadania e beleza simbólica.",
  },
];

const sampleEvents = [
  {
    id: 1,
    title: "Lançamento: Setenário de Leonel",
    date: "2025-09-30",
    location: "Auditório Paladim, Viseu",
    description:
      "Apresentação do livro, leitura de excertos e debate com autores.",
  },
  {
    id: 2,
    title: "Café Filosófico – A Beleza como Ponte",
    date: "2025-10-21",
    location: "Café Central, Viseu",
    description:
      "Encontro aberto para público sobre aplicações práticas da filosofia.",
  },
];

function Header() {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Paladim logo" className="h-14 w-auto object-contain" />
          <div>
            <h1 className="font-serif text-2xl">Edições Paladim</h1>
            <p className="text-xs text-gray-600">Virtudes Outonais — Viseu</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-black">Início</a>
          <a href="#catalog" className="hover:text-black">Catálogo</a>
          <a href="#events" className="hover:text-black">Eventos</a>
          <a href="#contact" className="hover:text-black">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Paladim — Edições que cultivam virtudes</h2>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Publicamos textos que aproximam a sabedoria tradicional do leitor contemporâneo: contos,
          ensaios filosóficos e obras de caráter simbólico. Trabalhamos com autores emergentes e
          pesquisas de humanidades.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#catalog" className="px-6 py-3 bg-black text-white rounded-md">Ver catálogo</a>
          <a href="#contact" className="px-6 py-3 border rounded-md text-gray-800">Contactar</a>
        </div>
      </div>
    </section>
  );
}

function Catalog({ books = [] }) {
  return (
    <section id="catalog" className="py-14">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-serif mb-4">Catálogo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {books.map((b) => (
            <article key={b.id} className="p-4 border rounded-md bg-white shadow-sm flex gap-4">
              <div className="w-28 h-36 bg-gray-100 flex items-center justify-center text-gray-400">
                {b.cover ? <img src={b.cover} alt={b.title} /> : <span>Sem capa</span>}
              </div>
              <div>
                <h4 className="font-semibold">{b.title}</h4>
                <p className="text-xs text-gray-600">{b.author}</p>
                <p className="mt-2 text-sm text-gray-700">{b.description}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-3 py-1 border rounded text-sm">Detalhes</button>
                  <button className="px-3 py-1 bg-black text-white rounded text-sm">Encomendar</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events({ items = [] }) {
  return (
    <section id="events" className="py-14 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-serif mb-4">Eventos & Notícias</h3>
        <div className="flex flex-col gap-4">
          {items.map((it) => (
            <div key={it.id} className="p-4 border rounded-md bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{it.title}</h4>
                  <p className="text-xs text-gray-500">{it.date} • {it.location}</p>
                </div>
                <a href="#contact" className="text-sm text-blue-600">Participar</a>
              </div>
              <p className="mt-2 text-gray-700">{it.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const company = {
    name: "Virtudes Outonais Unipessoal L.da",
    nif: "516359703",
    address: "Rua da Urbanização do Fontelo, nº 10, 3500-035 Viseu",
    email: "virtudesoutonais@gmail.com",
    phone: "+351927850846",
  };

  return (
    <section id="contact" className="py-14">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-serif mb-4">Contacto</h3>
          <p className="text-gray-700">Se tiveres perguntas sobre edição, direitos ou distribuição, entra em contacto.</p>

          <ul className="mt-4 text-sm text-gray-700 space-y-2">
            <li><strong>Emitente:</strong> {company.name}</li>
            <li><strong>NIF:</strong> {company.nif}</li>
            <li><strong>Morada:</strong> {company.address}</li>
            <li><strong>Email:</strong> <a href={`mailto:${company.email}`} className="text-blue-600">{company.email}</a></li>
            <li><strong>Telefone:</strong> <a href={`tel:${company.phone}`} className="text-blue-600">{company.phone}</a></li>
          </ul>
        </div>

        <div>
          <form className="bg-white p-4 border rounded-md shadow-sm space-y-3">
            <label className="block text-xs text-gray-600">Nome</label>
            <input className="w-full border px-3 py-2 rounded" placeholder="Nome" />
            <label className="block text-xs text-gray-600">E-mail</label>
            <input className="w-full border px-3 py-2 rounded" placeholder="email@exemplo.com" />
            <label className="block text-xs text-gray-600">Mensagem</label>
            <textarea className="w-full border px-3 py-2 rounded" rows="4" placeholder="Escreve a tua mensagem" />
            <div className="flex justify-end">
              <button type="button" className="px-4 py-2 bg-black text-white rounded">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Catalog books={sampleBooks} />
        <Events items={sampleEvents} />
        <Contact />
      </main>
      <footer className="border-t mt-12 py-6">
        <div className="max-w-5xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between">
          <div>© {new Date().getFullYear()} Edições Paladim — Virtudes Outonais</div>
          <div>Projeto desenvolvido para publicação e divulgação cultural.</div>
        </div>
      </footer>
    </div>
  );
}
