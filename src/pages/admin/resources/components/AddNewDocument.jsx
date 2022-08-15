import React, { useEffect, useRef, useState } from 'react'
// import greenbookmark from '../../../../assets/images/icon/greenbookmark.png'
// import addbookmark from '../../../../assets/images/icon/addbookmark.png'


const AddNewDocument = () => {
  const [filename, setFileName] = useState("Choose file")
  const [supportFile, setSupportFile] = useState("Choose file")

  const fileRef = useRef();
  const supportRef = useRef();

  const handleChange = (e) => {
    const [file] = e.target.files;
    setFileName(file.name);
  };

  const handleSupport = (e) => {
    const [support] = e.target.files;
    setSupportFile(support.name);
  };
  return <div className=' pl-[24px] overflow-y-auto '>
    <h1 className=' mt-[40px] text-[26px] '>Upload new document</h1>
    <div className=' w-[75%] mt-[30px]'>

      <div className=' flex flex-col '>
        <label htmlFor="document_name" className=' mb-[13px] text-[20px] font-bold'>Document name</label>
        <input type="text" placeholder='Enter document name' className=' border  py-[10px] pl-[26px]  ' />
      </div>


      <div className=' flex flex-col w-full mt-[27px]'>

        <label htmlFor="document_name" className='mb-[13px] text-[20px] font-bold'>Upload Documents</label>

        <div className=' flex flex-row items-center w-full '>
          <p className=' w-full pl-[26px]'>{filename}</p>

          <button className=' button-bg w-fit h-fit py-[10px] px-[30px]' onClick={() => fileRef.current.click()}>
            Browse
          </button>

          <input
            ref={fileRef}
            onChange={handleChange}
            multiple={false}
            type="file"
            hidden
          />

        </div>

        <p className=' text-[14px] text-gray-500'>Format: .PDF,DOCS,PPT,ODP    Max File Size: 10MB</p>
      </div>

      <div className=' flex flex-col w-full mt-[27px]'>

        <label htmlFor="document_name" className='mb-[13px] text-[20px] font-bold'>Upload Documents</label>

        <div className=' flex flex-row items-center w-full '>
          <p className=' w-full pl-[26px]'>{supportFile}</p>

          <button className=' button-bg w-fit h-fit py-[10px] px-[30px]' onClick={() => supportRef.current.click()}>
            Browse
          </button>

          <input
            ref={supportRef}
            onChange={handleSupport}
            multiple={false}
            type="file"
            hidden
          />

        </div>

        <p className=' text-[14px] text-gray-500'>Format: .PDF,DOCS,PPT,ODP    Max File Size: 10MB</p>
      </div>
    </div>

    <div className=' mt-[90px] flex flex-row justify-end  mr-[40px]'>
      <button className='button-border w-fit h-fit px-[74px] py-[10px] font-bold '>Preview</button>

      <button className='ml-2 button-bg w-fit h-fit px-[74px] py-[10px] font-bold '>Upload</button>
    </div>
  </div>
}

export default AddNewDocument