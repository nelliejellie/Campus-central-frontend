import React from 'react';
import Style from '../assets/style/Modalsmall.module.css';



export default function Modalsmall(props) {
  return (
    <div className={Style.modalsmall}>
        {props.children}
    </div>
  )
}
