import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Modalextrasmall from '../../../../src/components/Modalextrasmall';
import '../../../assets/style/Modal.css';
import draftarrow from '../../../assets/images/icon/draftarrow.png';
import Style from '../../../assets/style/Dashboardmodals.module.css';


export const Createapostdrafts = ({isdraft, setIsdraft}) => {

    


    return (
    <CSSTransition in={isdraft} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
        <div className='py-16'>
            <div>
                <div className='drop-shadow-xl centered'>
                    <Modalextrasmall>
                        <div className=''>
                            <div className='border-b-2'>
                                <div className='flex flex-row justify-items-center items-center px-8 pt-8'>
                                    <img src={draftarrow} alt="Dreaft-Arrow" 
                                        className='w-8 h-6 object-scale-down'
                                        onClick={() => {setIsdraft(false)}} 
                                    />

                                    <h2 className={`${Style.drafthead} pl-7`}
                                        onClick={() => {setIsdraft(true)}}
                                     >
                                        Drafts
                                     </h2>
                                </div>
                            </div>

                            <div className=' border border-x-0 border-t-0'>
                                <div className='px-8 p-4'>
                                    <p className={`${Style.drafttext}`} >What’s on your </p>
                                </div>
                            </div>
                            <div className=' border border-x-0 border-t-0'>
                                <div className='px-8 p-4'>
                                    <p className={`${Style.drafttext}`} >I  don’t really know what to say </p>
                                </div>
                            </div>
                            <div className=' border border-x-0 border-t-0'>
                                <div className='px-8 p-4'>
                                    <p className={`${Style.drafttext}`} >What’s on your mind </p>
                                </div>
                            </div>

                        </div>
                    </Modalextrasmall>
                </div>
            </div>
        </div>
    </CSSTransition>
    );
  }
