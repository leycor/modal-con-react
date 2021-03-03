import React, { useState } from 'react'

// Modals
import Modal from './components/atoms/Modal'

const App = () => {

  const [modalShow, setModalShow] = useState(false)


  const handleModalShow = () => {
    setModalShow( !modalShow ? true : false)
  }


  return (

      <div className='h-screen flex items-center flex-wrap content-center justify-center'>
        { modalShow && 
        <Modal 
        titulo='Dragon Ball'
        parrafo='Esto es un modal que abrirá la información con algo respeto a dragon ball'
        handleModalShow = { handleModalShow }
         /> }
        <button onClick={ handleModalShow } className='border-2 border-gray-600 p-4 font-medium text-gray-700 hover:bg-gray-800 hover:text-white'>Soy un modal</button>
      </div>
  )
}

export default App
