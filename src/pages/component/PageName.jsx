import React from 'react'

const PageName = ({children}) => {
  return (
    <div>
      <div className=' flex justify-center items-center bg-[#0f6d5f] text-center h-[236px]'>
        <h2 className=' text-5xl text-white '>{children}</h2>
      </div>
    </div>
  )
}

export default PageName