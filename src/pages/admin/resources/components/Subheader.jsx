import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from '../../../../assets/images/icon/searchResources.png'
import AddNewDocument from './AddNewDocument'



const Subheader = ({showAdd, setShowAdd}) => {
  const [showList, setShowList] = useState(false)
  const [title, setTitle] = useState('')


  const List = [
    {
      id: 1,
      list: 'Agriculture'
    },
    {
      id: 2,
      list: 'jbioj'
    },
    {
      id: 3,
      list: 'Daokjp'
    },
    {
      id: 4,
      list: 'pohopjn'
    },
    {
      id: 5,
      list: 'ggkjoljh'
    },
    {
      id: 6,
      list: 'pojlkj'
    },
    {
      id: 7,
      list: 'Agriculture'
    },
    {
      id: 8,
      list: 'Agriculture'
    },
    {
      id: 9,
      list: 'Agriculture'
    }
  ]

  const handleList = (el) => {
    setTitle(el)
    // setShowList(true)
    // console.log(el);
  }

  return (
    <>
      <div className=' flex flex-row justify-between mr-4 '>
        <div className=' flex flex-row justify-between items-center min-w-[75%]'>

          <p className=' mr-5 font-bold text-[28px] '>{title}</p>

          <div className=' w-full'>
            <form onFocus={() => setShowList(true)} onBlur={() => setShowList(true)} className='  '>

              <div className='flex justify-center items-center w-full pl-4 border rounded relative'>

                <img src={search} alt="" className=' ' />
                <input type="text" placeholder='Search' className=' pl-2 py-4 w-full h-full outline-none' />
              </div>

              <div className=' relative w-full mt-1'>
                {
                  showList ? (
                    <div className=' absolute h-[300px] bg-white border w-full px-[24px] pt-2 space-y-[32px] overflow-y-auto'>
                      {List.map(el =>

                        <p key={el.id} className=' cursor-pointer' onClick={() => handleList(el.list)} >{el.list}</p>
                      )
                      }
                    </div>
                  ) : ""
                }

              </div>
            </form>

          </div>
        </div>


        <div className=' '>
        <Link to ={'/admin/add-document'}>
          <button className=' font-bold button-bg w-full h-fit py-4 px-[48px] '>Add new document</button>
        </Link>
        </div>

      </div>
    </>
  )
}

export default Subheader