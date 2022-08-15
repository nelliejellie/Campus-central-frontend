import React from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '../assets/images/icon/whiteLogo.png'
import footer from '../assets/images/icon/footer.png'
import footer1 from '../assets/images/icon/footer1.png'
import social from '../assets/images/icon/social.png'
import social2 from '../assets/images/icon/social2.png'
import instagram from '../assets/images/icon/instagram.png'

const Footer = () => {
  return (
    <>
      <footer className=' bg-[#45454A] rounded-t-3xl mx-[1px] pl-[135px] pr-10 text-white '>
        <div className=' flex flex-row w-full justify-between  pt-[50px]  '>

          <div>
            <img src={whiteLogo} alt="" />

            <div className=' flex flex-col '>
              <h2 className=' font-bold mt-[53px] mb-[12px] text-[18px]'>Contact Us</h2>

              <div className=' flex flex-row justify-start items-center space-x-4'>
                <img src={footer} alt="" className=' h-8 self-center mr-4 lead-[19px]' />
                <p className=' text-[14px] text-justify pr-10'>38 Afaba Uqua Road, Eket <br /> Akwa-Ibom State</p>
              </div>

              <div className=' flex flex-row justify-start items-center mt-[18px] space-x-4'>
                <img src={footer1} alt="" className=' h-8 self-center mr-4 lead-[19px]' />
                <p className=' text-[14px] text-left'>support@campuscentral.com</p>
              </div>
            </div>

          </div>

          <div className=' flex flex-col space-y-6 text-[18px] w-fit '>
            <Link to='/'>
              Home
            </Link>
            <Link to='/about'>
              About
            </Link>
            <Link to='/contact'>
              Contact
            </Link>
            <Link to='/'>
              Resources
            </Link>
            <Link to='/'>
              Safe Space
            </Link>
            <Link to='/'>
              Messages
            </Link>
          </div>

          <div className=' w-[325px]'>
            <h2 className=' text-[18px] font-bold'>Subscribe</h2>
            <p>Subscribe to our newsletter to get updates on events happening in schools around you</p>

            <form className=' relative w-[325px] mt-[6px]'>
              <button className=' absolute right-[4px] top-[5px] bottom-[5px] h-fit w-fit button-bg py-2 px-4'>Subscribe</button>

              <input type="text" placeholder='Enter email address' className=' rounded-xl p-[10px] h-full w-full outline-none border-2 border-gray-400 text-black ' />

            </form>

            <div className=' mt-[70px]'>
              <p className=' font-bold text-[16px]'>Follow us</p>
              
              <div className=' flex flex-row mt-4 space-x-4'>

                <Link to='/' className=' flex justify-center items-center hover:cursor-pointer h-[24px] w-[24px] bg-white rounded-full  '>
                  <img src={social} alt="" />
                </Link>

                <Link to='/' className=' flex justify-center items-center hover:cursor-pointer h-[24px] w-[24px] bg-white rounded-full  '>
                  <img src={social2} alt="" />
                </Link>

                <Link to='/' className=' flex justify-center items-center hover:cursor-pointer h-[24px] w-[24px] bg-white rounded-full  '>
                  <img src={instagram} alt="" />
                </Link>
              </div>
            </div>

          </div>

        </div>

        <div className=' flex flex-row justify-between mt-[91px] pb-[10px]'>
          <p className=' text-xs'>&copy; 2021 All Rights Reserved</p>


          <div className=' space-x-[40px] text-sm'>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Terms of Use</Link>
            <Link to='/'>Sales and Refunds</Link>
            <Link to='/'>Legal</Link>
            <Link to='/'>Site Map</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer