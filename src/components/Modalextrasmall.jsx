import React from 'react';
import Style from '../assets/style/Modalextrasmall.module.css'

const Modalextrasmall = (props) => {
  return (
    <div className={Style.modalextrasmall}>
        {props.children}
    </div>
  )
}

export default Modalextrasmall;