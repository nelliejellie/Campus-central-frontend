import React, { useState } from 'react';
import Style from '../../../assets/style/Dashboardmodals.module.css';
import Modalextrasmall from '../../../../src/components/Modalextrasmall';
// import draftarrow from '../../../assets/images/icon/draftarrow.png';
import closeicon from '../../../assets/images/icon/closeicon.png';
import createimage from '../../../assets/images/icon/AccessVirtual.png';
import picture from '../../../assets/images/icon/post1.png';
import video from '../../../assets/images/icon/post2.png';
import file from '../../../assets/images/icon/post3.png';
import attach from '../../../assets/images/icon/post4.png';
import emotion from '../../../assets/images/icon/emoji_emotions.png';
import { CSSTransition } from 'react-transition-group';
import '../../../assets/style/Modal.css';
import { Createapostdrafts } from './CreatepostdraftModal';


export const Createapost = ({iscreatepost, setIscreatepost}) => {

    const [isdraft, setIsdraft] = useState(false);


  return (
    <CSSTransition in={iscreatepost} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
        <div>
            <div>
                <div className={`darkBG`} />
                <div className='drop-shadow-xl centered'>
                    <Modalextrasmall>
                        <div className=''>
                            <div className='border-b-2'>
                                <div className='flex flex-row justify-items-center items-center justify-between px-8 pt-8'>
                                    <h2 className={`${Style.drafthead} `} >Create a Post</h2>
                                    <img src={closeicon} alt="Close icon" 
                                        className='w-8 h-6 object-scale-down'
                                        onClick={() => setIscreatepost(false)}> 
                                    </img>
                                </div>
                            </div>

                            <div>
                                <div className='flex flex-row items-center justify-between px-8 pt-8'>
                                    <div className='flex flex-row  justify-items-center items-center'>
                                        <img src={createimage} alt="createimage"  className='w-12 h-12 rounded-full object-cover'/>
                                        <h3 className={`${Style.createpostname} pl-3`} >Lucy Ade </h3>
                                    </div>
                                    <p className={`${Style.createpostpara} cursor-pointer`}
                                       onClick={() => setIsdraft(true)} >
                                            Drafts
                                    </p>
                                </div>
                            </div>

                            <div className='px-8 pt-1'>
                                <input type="text"  placeholder='What’s on your mind?' className='w-full px-3 py-5 outline-none' />
                            </div>

                            <div className='flex flex-row justify-items-center items-center justify-between px-8 mt-24'>
                                <div className='flex flex-row items-center'>
                                    <img src={picture} alt="upload-img" className='pr-4' />
                                    <img src={video} alt="video-library" className='pr-4'/>
                                    <img src={file} alt="file-copy" className='pr-4' />
                                    <img src={attach} alt="attach-file" className='pr-4'/>
                                    <img src={emotion} alt="emotion-emoji" />
                                </div>
                                <div className='flex flex-row items-center' >
                                    <button className={`${Style.draftbtn} mr-4`} >Save to daft</button>
                                    <button className={`${Style.postbtn}`} >Post</button>
                                </div>
                            </div>

                            {isdraft && (<Createapostdrafts isdraft={isdraft} setIsdraft={setIsdraft} />)}
                        </div>
                    </Modalextrasmall>
                </div>
            </div>
        </div>
    </CSSTransition>
  );
}



  export const Searchmodal = ({issearchpost, setIssearchpost}) => {

    return (
    <CSSTransition in={issearchpost} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
        <div className='py-16'>
            <div>
                <div className={`darkBG`} />
                <div className='drop-shadow-xl centered'>
                    <Modalextrasmall>
                        <div>
                            <div className='flex flex-row justify-items-center items-center justify-between px-8 pt-4'>
                                <h4 className={`${Style.searchmodalhead}`} >Recent</h4>
                                <p className={`${Style.searchmodaltext} cursor-pointer`} onClick={() => setIssearchpost(false)} >Clear</p>
                            </div>

                            <div className='flex flex-row items-center px-8 pt-8'>
                                <div className='flex flex-col justify-items-center items-center pr-5'>
                                    <img src={createimage} alt="createimage"  className='w-12 h-12 rounded-full object-cover'/>
                                    <h3 className={`${Style.recentname} `} >Lucy Ade </h3>
                                </div>

                                <div className='flex flex-col  justify-items-center items-center pr-5'>
                                    <img src={createimage} alt="createimage"  className='w-12 h-12 rounded-full object-cover'/>
                                    <h3 className={`${Style.recentname} `} >Lucy Ade </h3>
                                </div>

                                <div className='flex flex-col justify-items-center items-center'>
                                    <img src={createimage} alt="createimage"  className='w-12 h-12 rounded-full object-cover'/>
                                    <h3 className={`${Style.recentname} `} >Lucy Ade </h3>
                                </div>
                            </div>

                            <div className='px-8 pt-8'>
                                <h2 className={`${Style.suggestion}`} >Suggestions</h2>
                                <p className= {`${Style.books} pt-4`}>Books</p>
                                <p className={`${Style.books} pt-3`}>Schools</p>
                                <p className={`${Style.books} pt-3`}>#education</p>
                            </div>
                        </div>
                    </Modalextrasmall>
                </div>
            </div>
        </div>
      </CSSTransition>
    );
  }
