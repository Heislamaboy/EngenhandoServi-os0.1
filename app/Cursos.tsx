'use client'
import Image from 'next/image'
import React from 'react'

const cursos = [
  {
    nome: 'Banderola / Flagman',
    descricao: 'Formação para controle e sinalização de obras e estradas.',
    preco: '2250 MZN',
    imagem: '/banderola.png'
  },
  {
    nome: 'Rigger',
    descricao: 'Curso essencial para içamento e movimentação de cargas.',
    preco: '2250 MZN',
    imagem: '/rigger.png'
  },
  {
    nome: 'Sinalizador / Banksman',
    descricao: 'Capacitação para orientar máquinas pesadas.',
    preco: '2250 MZN',
    imagem: '/sinalizador.png'
  }
]

export default function Cursos() {
  return (
    <section 
      id="cursos"
        className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Cursos Disponíveis</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cursos.map((curso, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition transform"
          >
            <div className="mx-auto mb-4 w-48 h-48 relative rounded-full overflow-hidden shadow-lg hover:scale-110 hover:brightness-110 transition">
              <Image
                src={curso.imagem}
                alt={curso.nome}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{curso.nome}</h3>
            <p className="mb-2">{curso.descricao}</p>
            <p className="mb-4 text-orange-500 font-bold text-xl">{curso.preco}</p>
            <a
              href="https://wa.me/258843682011"
              className="bg-orange-500 text-black px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition"
            >
              Inscrever-me
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
