import Hero from './Hero'
import Cursos from './Cursos'
import ComoFunciona from './ComoFunciona'
import Depoimentos from './Depoimentos'
import BlocoConheca from './BlocoConheca'
import Contato from './Contato'

export default function Page() {
  return (
    <main className="font-sans">
      <Hero />
      <Cursos />
      <ComoFunciona />
      <Depoimentos />

      {/* BLOCO CONHEÇA */}
      <BlocoConheca />

      <Contato />

      <footer className="py-6 bg-black text-white text-center text-sm">
        © 2026 Engenhando Serviços. Todos os direitos reservados.
      </footer>
    </main>
  )
}
