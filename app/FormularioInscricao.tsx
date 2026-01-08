'use client'
import { useState, useEffect } from 'react'

type Props = {
  curso: string
  fechar: () => void
}

export default function FormularioInscricao({ curso, fechar }: Props) {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')
  const [mostrar, setMostrar] = useState(false)

  // animação de entrada
  useEffect(() => {
    setMostrar(true)
  }, [])

  function enviar() {
    // validação
    if (!nome.trim() || !telefone.trim()) {
      setErro('Por favor, preencha nome e telefone.')
      return
    }

    setErro('')

    const texto = `
📌 *Nova Inscrição*
👤 Nome: ${nome}
📞 Telefone: ${telefone}
📘 Curso: ${curso}
📝 Mensagem: ${mensagem || 'Não informada'}
    `

    const url = `https://wa.me/258843682011?text=${encodeURIComponent(texto)}`
    window.open(url, '_blank')

    fechar()
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div
        className={`
          bg-white text-black p-6 rounded-xl w-full max-w-md
          transform transition-all duration-300
          ${mostrar ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
        `}
      >
        <h2 className="text-2xl font-bold mb-4">
          Inscrição – {curso}
        </h2>

        {erro && (
          <p className="mb-3 text-red-600 font-semibold animate-pulse">
            {erro}
          </p>
        )}

        <input
          className="w-full border p-3 rounded mb-3 focus:outline-orange-500"
          placeholder="Seu nome completo *"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <input
          className="w-full border p-3 rounded mb-3 focus:outline-orange-500"
          placeholder="Número de telefone *"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />

        <textarea
          className="w-full border p-3 rounded mb-4 focus:outline-orange-500"
          placeholder="Mensagem (opcional)"
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
        />

        <div className="flex gap-3">
          <button
            onClick={enviar}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded transition"
          >
            Inscrever-me
          </button>

          <button
            onClick={fechar}
            className="flex-1 bg-gray-300 hover:bg-gray-400 py-3 rounded transition"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
