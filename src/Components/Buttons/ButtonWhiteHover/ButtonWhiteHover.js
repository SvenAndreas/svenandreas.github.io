import React from 'react'
import s from './ButtonWhiteHover.module.css'
function ButtonWhiteHover({text}) {
  return (
    <button className={s.container}>{text || 'CONTACTAR'}</button>
  )
}

export default ButtonWhiteHover