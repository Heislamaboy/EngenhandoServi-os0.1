import Hero from './Hero'
import Cursos from './Cursos'
import ComoFunciona from './ComoFunciona'
import Depoimentos from './Depoimentos'
import Contato from './Contato'

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      <Hero />
      <Cursos />
      <ComoFunciona />
      <Depoimentos />
      <Contato />
      <footer className="py-6 bg-black text-white text-center">
        © 2026 Engenhando Serviços. Todos os direitos reservados.
      </footer>
    </main>
  )
}
