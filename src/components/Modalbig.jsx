import React from 'react';
import Style from '../assets/style/Modalbig.module.css';

export default function Modalbig(props) {
  return (
    <div className={Style.Modalbig}>
      {props.children}
    </div>
  )
}
