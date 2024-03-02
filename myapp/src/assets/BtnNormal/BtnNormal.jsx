import React from 'react'
import './BtnNormal.scss'

function BtnNormal({ Content }) {
    return (
        <div className='BtnNormal'>
            <button className='MyBtn py-2 px-5 rounded-3 fw-bold text-center'>
                {Content}
            </button>
        </div>
    )
}

export default BtnNormal