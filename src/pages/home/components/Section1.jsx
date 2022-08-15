import React from 'react'
import img22 from '../../../assets/images/icon/image22.png'
import Style from '../../../assets/style/Header.module.css'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <>
      <section className='  mt-16 flex flex-row gap-5 justify-center items-center'>

        <div className=' flex flex-col max-w-[530px] ml-24 space-y-8'>

          <h1 className={`${Style.green} leading-[60px] text-5xl `}>The student community in your  <span className='text-yellow-500'>pocket</span></h1>

          <p className=' w-[400px] '>A community where students across different university in Nigeria connect and interact with eachother.</p>

          <Link to = '/'>
          <button className={`button-bg w-fit h-fit px-8 py-4 font-bold`}>Join Now</button>

          </Link>
        </div>

        <div className=' w-[750px] md:pr-14'>
          <img src={img22} className="w-full" alt="" />
        </div>
      </section>
    </>

  )
}

<section>


</section>
export default Section1