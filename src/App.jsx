import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <h1>Clothes shop</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
