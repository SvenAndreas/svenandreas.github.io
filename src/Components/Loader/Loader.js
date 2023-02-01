import React from 'react';
import ReactDOM from 'react-dom';
import { BounceLoader } from 'react-spinners';
import s from './Loader.module.css'

function Loader() {
  return ReactDOM.createPortal (
    <div className={s.loader}>
      <BounceLoader color="#5767e0" />
    </div>
    , document.getElementById('modal')
  )
}

export default Loader