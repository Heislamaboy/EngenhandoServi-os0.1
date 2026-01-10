'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function BlocoConheca() {
  const ref = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLDivElement | null>(null)
  const [visivel, setVisivel] = useState(false)
  const [alunos, setAlunos] = useState(0)
  const totalAlunos = 200

  // IntersectionObserver para ativar animações
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisivel(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  // Contagem animada dos alunos (mais lenta)
  useEffect(() => {
    if (!visivel) return
    let start = 0
    const duration = 3000
    const stepTime = Math.floor(duration / totalAlunos)
    const timer = setInterval(() => {
      start += 1
      setAlunos(start)
      if (start === totalAlunos) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [visivel])

  // Parallax seguro
  useEffect(() => {
    const speed = 0.15 // ajuste suave
    const handleScroll = () => {
      if (!imgRef.current) return
      const rect = ref.current?.getBoundingClientRect()
      if (rect) {
        // só aplica parallax se o bloco estiver visível
        const offset = Math.min(Math.max(-rect.top * speed, -50), 50)
        imgRef.current.style.transform = `translateY(${offset}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // inicializa
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={ref} className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* FOTO COM PARALLAX */}
        <div
          ref={imgRef}
          className={`relative flex justify-center md:justify-start transition-all duration-700 ease-out
            ${visivel ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
        >
          <div className="relative w-[380px] h-[380px] md:w-[420px] md:h-[420px]">
            <Image
              src="/nito.png"
              alt="Eng° Nito José Afade"
              fill
              className="rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-yellow-400 rounded-2xl -z-10" />
          </div>
        </div>

        {/* TEXTO */}
        <div
          className={`transition-all duration-700 delay-150 ease-out
            ${visivel ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
        >
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">
            Conheça
          </span>

          <h2 className="text-4xl font-extrabold mt-3 mb-6 leading-tight">
            Eng° Nito José Afade
          </h2>

          <p className="text-gray-300 mb-5 leading-relaxed text-lg">
            Nito José Afade é engenheiro mecânico, mentor e fundador da empresa
            <strong className="text-white"> Engenhando Serviços</strong>, atuando
            com atividades técnicas e engenharia afins.
          </p>

          <p className="text-gray-300 mb-5 leading-relaxed text-lg">
            A empresa presta serviços técnicos, elaboração de manutenção,
            A.R.T, desenhos técnicos em Plant 3D, SolidWorks e AutoCAD,
            atendendo empresas de mecânica em todo Moçambique.
          </p>

          <p className="text-gray-300 mb-5 leading-relaxed text-lg">
            Atualmente é uma das empresas jovens que mais entrega serviços
            especializados na engenharia mecânica e já formou mais de{' '}
            <strong className="text-yellow-400">{alunos} alunos</strong>, ensinando a
            trabalhar de forma autónoma e faturar acima da média mensal.
          </p>

          {/* BOTÃO WHATSAPP */}
          <a
            href="https://wa.me/258843682011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-500 hover:bg-green-600 transition-colors text-white font-bold px-6 py-3 rounded-full shadow-lg text-lg"
          >
            💬 Falar com o Engenheiro
          </a>
        </div>
      </div>
    </section>
  )
}
