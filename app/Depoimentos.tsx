'use client'
import React from 'react'
import { Quote } from 'lucide-react'

const depoimentos = [
  { texto: 'Curso rápido e muito prático! Recomendo.', aluno: 'João P.' },
  { texto: 'Aprendi tudo que precisava para começar a trabalhar.', aluno: 'Maria L.' },
  { texto: 'Instrutores excelentes e conteúdo objetivo.', aluno: 'Pedro S.' }
]

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-white text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
        O que nossos alunos dizem
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {depoimentos.map((dep, index) => (
          <div
            key={index}
            className="
              relative bg-white/10 backdrop-blur-md
              border border-white/10
              p-8 rounded-2xl
              shadow-xl
              transition-transform duration-300
              hover:-translate-y-2 hover:shadow-2xl
            "
          >
            {/* ÍCONE */}
            <Quote className="w-10 h-10 text-orange-400 mb-6 mx-auto" />

            {/* TEXTO */}
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              “{dep.texto}”
            </p>

            {/* ALUNO */}
            <span className="block font-bold text-orange-400">
              {dep.aluno}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
