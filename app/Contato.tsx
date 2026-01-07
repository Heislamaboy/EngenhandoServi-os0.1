'use client'
import React from 'react'

export default function Contato() {
  return (
    <section 
     id="contato"
     className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
      <p className="mb-4">
        WhatsApp: <a href="https://wa.me/258843682011" className="text-green-500 font-bold">+258 843 682 011</a>
      </p>
      <p className="mb-4">
        Email: <a href="mailto:engenhandoservicos@gmail.com" className="text-blue-500 font-bold">engenhandoservicos@gmail.com</a>
      </p>
      <p>Pemba, Nampula, Moçambique</p>
    </section>
  )
}
