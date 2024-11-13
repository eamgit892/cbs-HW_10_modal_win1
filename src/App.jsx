import { useState } from 'react'

import './App.css'
import { ModalWind } from './components/ModalWind/ModalWind'

function App() {

  const [modalState, setModalState] = useState(false)

  return (
    <div className='App'>
      {/* {modalState && <ModalWind />} */}

      <ModalWind call={modalState} onDestroy={() => setModalState(false)}/>
      
      <button onClick={() => {
        setModalState(!modalState)
      }}>Open Modal
         
      </button>
    </div>
  )
}

export default App
