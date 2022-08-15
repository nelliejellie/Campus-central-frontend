import React, { useState } from 'react'
import like from '../../../assets/images/icon/like.png'
import user from '../../../assets/images/icon/user.png'
import comment from '../../../assets/images/icon/comment.png'
import greenbookmark from '../../../assets/images/icon/greenbookmark.png'
import bookmark from '../../../assets/images/icon/bookmark.png'
import Style from '../../../assets/style/AuthView.module.css'
import AddNewDocument from './components/AddNewDocument';



const CourseCatalog = ({showAdd, setShowAdd}) => {
  const [bookmarkPost, setBookmarkPost] = useState(true)
  const [likePost, setLikePost] = useState(false)
 
  const [viewDoc, setViewDoc] = useState(false)

  const handleBookMark = () => {
    setBookmarkPost(!bookmarkPost)
  }
  const handleLike = () => {
    setLikePost(!likePost)
  }

  const handleView = () => {
    setViewDoc(true)

  }

  return <div className={`${Style.scroll} `} >
    

    {showAdd ?

      <AddNewDocument /> : (
        <div className=' mr-4 mt-[34px] space-y-[24px] ' >

          <div className=' flex flex-col p-[24px] space-y-[16px] bg-[#EDFEFB] rounded-2xl shadow-md '>

            <h3 className=' text-[20px] font-bold ' onClick={handleView} >Nucleic acid extraction</h3>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum doloremque, sequi dolore amet quidem error consectetur unde, harum tempore quas sed necessitatibus. Veritatis eius ad saepe aliquid laboriosam. Obcaecati.</p>

            <div className=' flex flex-row justify-between items-center'>
              <div className=' flex flex-row items-center space-x-[9px]'>
                <img src={user} alt="" />
                <p className=' text-18px ' >John doe</p>
              </div>
              <div className=' flex flex-row items-center space-x-[19px] '>

                <img src={like} alt="" onClick={handleLike} className=' w-[20px] cursor-pointer' />

                <img src={comment} alt="" className=' w-[20px] cursor-pointer' />

                <img src={bookmarkPost ? bookmark : greenbookmark} alt="" onClick={handleBookMark} className={` ${bookmarkPost ? 'w-[20px]' : 'w-[16px]'}   cursor-pointer `} />
              </div>
            </div>

          </div>


          <div className=' flex flex-col p-[24px] space-y-[16px] bg-[#EDFEFB] rounded-2xl shadow-md '>
            <h3 className=' text-[20px] font-bold '>Nucleic acid extraction</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum doloremque, sequi dolore amet quidem error consectetur unde, harum tempore quas sed necessitatibus. Veritatis eius ad saepe aliquid laboriosam. Obcaecati.</p>

            <div className=' flex flex-row justify-between items-center'>
              <div className=' flex flex-row items-center space-x-[9px]'>
                <img src={user} alt="" />
                <p className=' text-18px ' >John doe</p>
              </div>
              <div className=' flex flex-row items-center space-x-[19px] '>
                <img src={like} alt="" className=' w-[20px] cursor-pointer' />
                <img src={comment} alt="" className=' w-[20px] cursor-pointer' />
                <img src={bookmark} alt="" className=' w-[20px] cursor-pointer' />
              </div>
            </div>
          </div>


          <div className=' flex flex-col p-[24px] space-y-[16px] bg-[#EDFEFB] rounded-2xl shadow-md '>
            <h3 className=' text-[20px] font-bold '>Nucleic acid extraction</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae rerum doloremque, sequi dolore amet quidem error consectetur unde, harum tempore quas sed necessitatibus. Veritatis eius ad saepe aliquid laboriosam. Obcaecati.</p>

            <div className=' flex flex-row justify-between items-center'>
              <div className=' flex flex-row items-center space-x-[9px]'>
                <img src={user} alt="" />
                <p className=' text-18px ' >John doe</p>
              </div>
              <div className=' flex flex-row items-center space-x-[19px] '>

                <img src={like} alt="" className=' w-[20px] cursor-pointer' />
                <img src={comment} alt="" className=' w-[20px] cursor-pointer' />
                <img src={bookmark} alt="" className=' w-[20px] cursor-pointer' />
              </div>
            </div>

          </div>

        </div>) 
    }
  </div>;
}

export default CourseCatalog