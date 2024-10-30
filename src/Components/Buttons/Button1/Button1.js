import React from 'react'
import s from './Button1.module.css'

function Button1({text}) {
  return (
    <button className={s.container}>

      
        <p>  {text || 'OBTENER   '}</p>
    </button>
  )
}

export default Button1