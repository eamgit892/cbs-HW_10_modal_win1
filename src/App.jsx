import { useState } from 'react'

import './App.css'
import { ModalWind } from './components/ModalWind/ModalWind'

function App() {
  const [modalState, setModalState] = useState(false)
  return (
    <div className='App'>
      
      <ModalWind />
      <button onClick={() => {
        setModalState(true)
      }}>Open Modal
         
      </button>
    </div>
  )
}

export default App
