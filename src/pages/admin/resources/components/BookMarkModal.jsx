import React from 'react'
import bookmarked from '../../../../assets/images/icon/bookmarked.png'


const BookMarkModal = () => {
  return (
      <div className=' absolute bg-slate-800 flex flex-row justify-end bg-opacity-30 h-full w-full pr-[40px] '>


        <div className=' flex flex-row px-[38px] top-1 right-6 bg-white rounded-2xl h-[96px] items-center justify-center space-x-4'>
          <img src={bookmarked} alt="" />
          <p>Saved to my documents</p>
        </div>

      </div>
  )
}

export default BookMarkModal