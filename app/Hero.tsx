'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Hero() {
  const [open, setOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Scroll para baixo → esconder
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false)
      }

      // Scroll para cima → mostrar
      if (currentScrollY < lastScrollY) {
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          bg-white/80 backdrop-blur-md shadow-sm
          transition-transform duration-300
          md:translate-y-0
          ${showHeader ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

          {/* LOGO */}
          <Image
            src="/logo.png"
            alt="Engenhando Serviços"
            width={140}
            height={50}
            className="object-contain"
            priority
          />

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
            <li><a href="#cursos" className="hover:text-orange-500">Cursos</a></li>
            <li><a href="#como-funciona" className="hover:text-orange-500">Como funciona</a></li>
            <li><a href="#depoimentos" className="hover:text-orange-500">Depoimentos</a></li>
            <li><a href="#contato" className="hover:text-orange-500">Contato</a></li>
          </ul>

          {/* BOTÃO DESKTOP */}
          <a
            href="https://wa.me/258843682011"
            className="hidden md:inline-block bg-orange-500 text-white px-5 py-2 rounded-full font-bold hover:bg-orange-600"
          >
            Inscrever-me
          </a>

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-gray-800"
          >
            <Menu size={32} />
          </button>
        </nav>
      </header>

      {/* MENU MOBILE */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="w-72 bg-white h-full p-6 shadow-xl">

            {/* FECHAR */}
            <button
              onClick={() => setOpen(false)}
              className="mb-8 text-gray-700"
            >
              <X size={28} />
            </button>

            {/* LINKS */}
            <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-800">
              <li><a onClick={() => setOpen(false)} href="#cursos">Cursos</a></li>
              <li><a onClick={() => setOpen(false)} href="#como-funciona">Como funciona</a></li>
              <li><a onClick={() => setOpen(false)} href="#depoimentos">Depoimentos</a></li>
              <li><a onClick={() => setOpen(false)} href="#contato">Contato</a></li>
            </ul>

            {/* BOTÃO */}
            <a
              href="https://wa.me/258843682011"
              className="block mt-10 text-center bg-orange-500 text-white py-3 rounded-full font-bold"
            >
              Inscrever-me
            </a>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32">

        {/* BADGE */}
        <span className="mb-6 inline-block bg-orange-100 text-orange-600 font-bold px-6 py-2 rounded-full animate-pulse">
          🚨 Vagas limitadas – Inscrições abertas
        </span>

        {/* TÍTULO */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 text-gray-800 max-w-4xl">
          Cursos Básicos Profissionais <span className="text-orange-500">2026</span>
        </h1>

        {/* TEXTO */}
        <p className="text-base sm:text-lg md:text-2xl mb-10 text-gray-700 max-w-3xl">
          Treinamento 100% online • 3 semanas • Certificado incluído • Entrada rápida no mercado
        </p>

        {/* CTA */}
        <a
          href="https://wa.me/258843682011"
          className="bg-gradient-to-r from-orange-400 to-yellow-400 text-black px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 transition"
        >
          Quero começar agora
        </a>
      </section>
    </>
  )
}
