import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>

      <h1>Lista de Compras</h1>
      <div className="card">
        <input placeholder="Insira o texto" type="text" />
        <button>Adicionar</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
