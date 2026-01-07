'use client'
import React from 'react'
import { Laptop, Clock, Award } from 'lucide-react'

const passos = [
  {
    titulo: '100% Online',
    descricao: 'Assista às aulas de qualquer lugar, no seu ritmo.',
    icone: <Laptop className="w-12 h-12 text-orange-400 mb-4 mx-auto" />
  },
  {
    titulo: 'Duração de 3 Semanas',
    descricao: 'Curso rápido e intensivo, focado no que importa.',
    icone: <Clock className="w-12 h-12 text-orange-400 mb-4 mx-auto" />
  },
  {
    titulo: 'Certificado',
    descricao: 'Receba um certificado reconhecido ao final do curso.',
    icone: <Award className="w-12 h-12 text-orange-400 mb-4 mx-auto" />
  }
]

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="py-24 px-6 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200 text-gray-900 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
        Como Funciona
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {passos.map((passo, index) => (
          <div
            key={index}
            className="
              relative bg-white/20 backdrop-blur-md
              border border-white/20
              p-8 rounded-2xl
              shadow-lg
              transition-transform duration-300
              hover:-translate-y-2 hover:shadow-2xl
            "
          >
            {passo.icone}
            <h3 className="text-2xl font-bold mb-2">{passo.titulo}</h3>
            <p className="text-gray-800 leading-relaxed">{passo.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
