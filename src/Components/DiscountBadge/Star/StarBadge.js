import React from 'react'
import s from './StarBadge.module.css'

function StarBadge() {
  return (
    <div className={`${s.star}`}>
        <span className={`${s.star_text}`}>50%</span>
    </div>
  )
}

export default StarBadge