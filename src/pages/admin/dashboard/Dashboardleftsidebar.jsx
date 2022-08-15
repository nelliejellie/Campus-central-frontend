import React from 'react';
import Style from '../../../assets/style/Dashboard.module.css';
import createimage from '../../../assets/images/icon/AccessVirtual.png';
import searchicon from '../../../assets/images/icon/searchicon.png';
import { Link } from 'react-router-dom';



const Dashboardleftsidebar = () => {
  return (
    <div>
        {/* left sidebar */}
        <div className='pt-3'>
            <div className='shadow py-5 px-3 rounded-lg'>
                <h2 className={`${Style.trendingtopichead} mb-7`} >Trending Topics</h2>
                <div className='flex flex-col cursor-pointer mb-5'>
                    <Link to='#' className={`${Style.trendingtopictext} mb-3`} >Engineering</Link>
                    <Link to='#'className={`${Style.trendingtopictext} mb-3`} >Unilag Students Association </Link>
                    <Link to='#'className={`${Style.trendingtopictext} mb-3`} >Engineering Students Forum</Link>
                    <Link to='#' className={`${Style.trendingtopictext} mb-3`} >Unilag Students Association </Link>
                    <Link to='#' className={`${Style.trendingtopictext} mb-3`} >Engineering Students Forum</Link>
                </div>
                <div className=''>
                    <button className='button-bg'>See all</button>
                </div>
            </div>


            <div className='shadow py-5 px-3 rounded-lg mt-3'>
                <div className='flex flex-row justify-between'>
                    <h2 className={`${Style.trendingtopichead} mb-7`} >Your Forums</h2>
                    <p className={`${Style.forumaddnew} cursor-pointer`} >Add new</p>
                </div>
                <div className='flex flex-col cursor-pointer mb-5'>
                    <div className='flex flex-row justify-items-center'>
                        <img src={createimage} alt=""  className='w-8 h-8 rounded-full object-cover'/>
                        <Link to='#' className={`${Style.forumstext} mb-5 pl-3`} >Engineering</Link>
                    </div>

                    <div className='flex flex-row justify-items-center'>
                        <img src={createimage} alt=""  className='w-8 h-8 rounded-full object-cover'/>
                        <Link to='#'className={`${Style.forumstext} mb-5 pl-3`} > Unilag Students Association </Link>
                    </div>

                    <div className='flex flex-row justify-items-center'>
                        <img src={createimage} alt=""  className='w-8 h-8 rounded-full object-cover'/>
                        <Link to='#'className={`${Style.forumstext} mb-5 pl-3`} >Engineering Students Forum</Link>
                    </div>

                    <div className='flex flex-row justify-items-center'>
                        <img src={createimage} alt=""  className='w-8 h-8 rounded-full object-cover'/>
                        <Link to='#' className={`${Style.forumstext} mb-5 pl-3`} >Unilag Students Association </Link>
                    </div>

                    <div className='flex flex-row justify-items-center'>
                        <img src={createimage} alt=""  className='w-8 h-8 rounded-full object-cover'/>
                        <Link to='#' className={`${Style.forumstext} mb-5 pl-3`} >Engineering Students Forum</Link>
                    </div>
                    
                </div>
                <div className=''>
                    <button className='button-bg'>See all</button>
                </div>
                
            </div>


            <div className='shadow py-5 px-3 rounded-lg mt-3'>
                <h2 className={`${Style.trendingtopichead} mb-7`} >Find new Forum</h2>
                
                <div className='flex flex-row justify-items-center items-center mb-3'>
                    <img src={searchicon} alt="search-icon" className='relative w-6 h-6 left-8 ' />
                    <input type="text" placeholder='Search' className={`${Style.foruminput} outline-none w-full pl-10 py-2`} />
                </div>

                <div className='mb-10'>
                    <ul className='flex  border-b-2 pt-4'>
                        <div className='flex flex-col justify-center items-center'>
                            <Link to="#" className={`${Style.hot}  relative cursor-pointer `} >Top</Link>
                            <div className={`${Style.hotunderline} `} ></div>
                        </div>
                        <Link  to="#" className={`${Style.trend} px-6 cursor-pointer`}>Schools</Link>
                        <Link to="#" className={`${Style.trend} cursor-pointer`} >Movies</Link>
                    </ul>
                </div>

                <div className='flex flex-col cursor-pointer mb-5 '>
                    <div className='flex flex-row justify-items-center'>
                        <img src={createimage} alt=""  className='w-8 h-8 rounded-full object-cover'/>
                        <Link to='#' className={`${Style.forumstext} mb-5 pl-3`} >Engineering</Link>
                    </div>

                    <div className='flex flex-row justify-items-center'>
                        <img src={createimage} alt=""  className='w-8 h-8 rounded-full object-cover'/>
                        <Link to='#'className={`${Style.forumstext} mb-5 pl-3`} > Unilag Students Association </Link>
                    </div>

                    <div className='flex flex-row justify-items-center'>
                        <img src={createimage} alt=""  className='w-8 h-8 rounded-full object-cover'/>
                        <Link to='#'className={`${Style.forumstext} mb-5 pl-3`} >Engineering Students Forum</Link>
                    </div>

                    <div className='flex flex-row justify-items-center'>
                        <img src={createimage} alt=""  className='w-8 h-8 rounded-full object-cover'/>
                        <Link to='#' className={`${Style.forumstext} mb-5 pl-3`} >Unilag Students Association </Link>
                    </div>

                    <div className='flex flex-row justify-items-center'>
                        <img src={createimage} alt=""  className='w-8 h-8 rounded-full object-cover'/>
                        <Link to='#' className={`${Style.forumstext} mb-5 pl-3`} >Engineering Students Forum</Link>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboardleftsidebar;