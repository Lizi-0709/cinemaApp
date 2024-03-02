import React from 'react'
import './BtnOutline.scss'

function BtnOutline({ Content, onClick }) {
    return (
        <div className='BtnOutline'>
            <button className='MyBtn py-2 px-5 rounded-4 fw-bold text-center' onClick={onClick}>
                {Content}
            </button>
        </div>
    )
}

export default BtnOutline