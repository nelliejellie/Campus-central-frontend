import React, { useEffect, useState } from 'react';
import BookMarkModal from './components/BookMarkModal'
import addbookmark from '../../../assets/images/icon/addbookmark.png'
import greenbookmark from '../../../assets/images/icon/greenbookmark.png'
import usercomment from '../../../assets/images/icon/usercomment.png'
import comments from '../../../assets/images/icon/comments.png'
import views from '../../../assets/images/icon/views.png'


const ReadMore = ({ children }) => {
  const text = children;
  const [readMore, setReadMore] = useState(true)
  const toggleReadMore = () => {
    setReadMore(!readMore)
  }
  return (
    <p>
      {readMore ? text.slice(0, 1350) : text}
      <span className=' underline text-green-700 cursor-pointer' onClick={toggleReadMore} >{readMore ? "....Read more" : "Show less"}</span>
    </p>
  )

}


const ViewDocument = () => {
  const [bookmark, setBookmark] = useState(false)
  const [modal, setModal] = useState(false)

  const toggleBookMark = () => {
    setBookmark(!bookmark)
    // if (bookmark) {
    setModal(true)
    // }

  }

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setModal(false)

    }, 1500);

    return () => clearTimeout(timeoutID);
  }, [modal]);



  return (
    <div className='py-[40px] pl-[32px] pr-[40px] relative ' >
      {/* {console.log(bookmark)} */}
      <h1 className=' mb-[13px] text-[32px]'>Document Name</h1>
      <div className=' flex flex-row justify-between'>
        <p>Created by: Farah Al Shamsi | June 7, 2022</p>

        <div className=' flex flex-row space-x-[22px] '>

          <div className=' flex flex-row items-center space-x-[10px] '>
            <img className=' h-[17px] cursor-pointer' onClick={toggleBookMark} src={bookmark ? greenbookmark : addbookmark} alt="" />
            <p className=' text-[18px] '>Save</p>
          </div>

          <div className=' flex flex-row items-center space-x-[10px] '>
            <img className=' h-[17px]' src={views} alt="" />
            <p className=' text-[18px] '>39 views</p>
          </div>

          <div className=' flex flex-row items-center space-x-[10px] '>
            <img className=' h-[19px]' src={comments} alt="" />
            <p className=' text-[18px] '>11 comments</p>
          </div>

        </div>
      </div>


      <div className={` mt-[32px] relative `}>

        {modal && bookmark ? <BookMarkModal /> : ''}


        <h2>
          <ReadMore>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ad repellendus architecto fugit natus beatae aliquam amet, nulla tempora quam quidem cumque dolor doloremque modi iure maxime eaque necessitatibus! Unde quisquam voluptas, ratione ab corporis at placeat omnis adipisci fuga aliquid, molestiae delectus esse maxime quidem veritatis voluptatibus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore aperiam voluptatum fuga repellat sapiente id tempora perspiciatis, neque doloremque quia aut corrupti qui veritatis quasi magnam maxime modi ipsa. Cupiditate? ipsum rem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam itaque perferendis, voluptatibus quos commodi in atque, veritatis maxime architecto sapiente nisi deserunt optio officiis. Inventore eum aliquam voluptatum a.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae neque sapiente iure, id porro aut odit explicabo error? Tenetur nostrum, architecto maxime quaerat illum tempora voluptas minus temporibus aliquid aperiam!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum tempore architecto placeat aspernatur nostrum dolores distinctio, itaque cupiditate facere neque dolorem dolore consequatur molestias omnis nobis quidem magnam nulla laboriosam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, nulla minus? Eius, quam. Earum dicta distinctio libero eaque suscipit corporis velit esse, odit temporibus quis, odio inventore dignissimos quo reiciendis.

          </ReadMore>
        </h2>
      </div>

      <div className=' mt-[43px] '>

        <div className='  w-[70%] '>
          <div className=' flex flex-row space-x-[34px]'>
            <img src={usercomment} alt="" />

            <form className=' border border-gray-400 rounded-r-[4px] rounded-bl-[4px] w-full'>
              <input className=' h-full py-[16px] pl-[26px] text-[18px] placeholder:text-[18px] w-full  outline-none ' type="text" placeholder=' Add a comment' />
            </form>
          </div>
        </div>

        <div className=' mt-[18px] w-[90%] space-y-[18px]'>

          <div className=' flex flex-row items-center'>

            <img src={usercomment} alt="" className=' mr-[15px]' />

            <div className=''>

              <div className=' flex flex-row items-center space-x-2 '>
                <h2 className=' text-[18px]'>Sammy</h2>
                <p className=' text-[18px]'>3 hours ago</p>
              </div>
              <p className=' mt-[5px] text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore autem iusto quidem alias eos? Lorem ipsum dolor sit amet.</p>
            </div>

          </div>

          <div className=' flex flex-row items-center'>

            <img src={usercomment} alt="" className=' mr-[15px]' />

            <div className=''>
              <div className=' flex flex-row items-center space-x-2 '>
                <h2 className=' text-[18px]'>Sammy</h2>
                <p className=' text-[18px]'>3 hours ago</p>
              </div>
              <p className=' mt-[5px] text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore autem iusto quidem alias eos? Lorem ipsum dolor sit amet.</p>
            </div>

          </div>

          <div className=' flex flex-row items-center'>

            <img src={usercomment} alt="" className=' mr-[15px]' />

            <div className=''>
              <div className=' flex flex-row items-center space-x-2 '>
                <h2 className=' text-[18px]'>Sammy</h2>
                <p className=' text-[18px]'>3 hours ago</p>
              </div>
              <p className=' mt-[5px] text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore autem iusto quidem alias eos? Lorem ipsum dolor sit amet.</p>
            </div>

          </div>


        </div>

      </div>


    </div>
  )
}

export default ViewDocument
