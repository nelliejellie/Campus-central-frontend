import React from 'react'
import SplashCSS from '../../../assets/style/SplashScreen.module.css'
import Icon from '../../../assets/images/icon/white-icon.png'

const SplashScreen = () => {
  return (
    <div className={`${SplashCSS.container} `}>
      <div className=' flex flex-row justify-center items-center '>

        <img className=' w-20 md:w-32' src={Icon} alt="" />
        <h1 className=' text-3xl md:text-6xl font-thin'><span className=' font-bold'>Campus</span>central</h1>
      </div>
    </div>
  )
}

export default SplashScreen