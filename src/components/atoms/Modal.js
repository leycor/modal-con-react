import React from 'react'

const Modal =  ({titulo, parrafo, handleModalShow }) => (

    <div className='flex flex-col border-2 border-gray-600 p-5 w-2/ absolute bg-gray-300'>
        <p className='text-center mb-3 font-medium'>{ titulo }</p>
        <p>{ parrafo }</p>

        <button onClick={ handleModalShow } className='mt-10 ml-auto border-2 border-gray-600 p-1 font-medium'>Cerrar</button>
    </div>
)

export default Modal