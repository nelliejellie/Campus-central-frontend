/** @format */

import React from 'react';
import Modalsmall from '../../../../components/Modalsmall';
import { CSSTransition } from 'react-transition-group';
import '../../../../assets/style/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export function EditProfile({ isEdit, setIsEdit }) {
  return (
    <CSSTransition in={isEdit} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="py-16">
        <div className={`darkBG`}>
          <div className="drop-shadow-xl centered ">
            <Modalsmall>
              <div className="">
                <div className=" flex flex-row justify-between items-center py-3 px-4 w-full">
                  <div className="w-1/2 flex flex-row  items-center space-x-8">
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="cursor-pointer w-6 h-6"
                      onClick={() => setIsEdit(false)}
                    />
                    <div className="">
                      <h4 className="">Edit Profile</h4>
                    </div>
                  </div>
                  <button className="button-bg w-fit h-fit py-2 px-10 ">
                    Save
                  </button>
                </div>
                <div className={`px-4  scroll overflow-auto `}>
                  <div className="flex flex-col justify-center">
                    <div className="relative  h-1/3 flex flex-col items-center ">
                      <div className="w-full">
                        <img
                          className="w-full"
                          src={require('../../../../assets/images/icon/grayArea.png')}
                          alt="edit profile background"
                        />
                      </div>
                      <div className="absolute top-[6.2rem] left-7">
                        <img
                          src={require('../../../../assets/images/icon/grayKazz.png')}
                          alt="kazeem"
                        />
                      </div>
                      <div className="absolute top-[6.2rem] left-7">
                        <img
                          src={require('../../../../assets/images/icon/pfpgreyArea.png')}
                          alt="gray"
                        />
                      </div>
                      <div className="absolute top-[7.5rem] left-[3rem]">
                        <img
                          src={require('../../../../assets/images/icon/greyCam.png')}
                          alt="gray"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center mt-14">
                      <form className="w-full">
                        <div className="flex flex-col">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Add your name"
                            className="pl-5 py-3 border  h-[44px] border-gray-400 rounded"
                          />
                        </div>
                        <div className="flex flex-col mt-12">
                          <label htmlFor="bio">Bio</label>
                          <textarea
                            className="pl-5 py-3 h-[69px] border-gray-400 border rounded"
                            name="bio"
                            id="bio"
                            cols="30"
                            rows="2"
                            placeholder="Add a bio to your profile"></textarea>
                        </div>
                        <div className="flex flex-row justify-between  mt-12">
                          <div className="flex flex-col">
                            <label htmlFor="university">University</label>
                            <select
                              type="text"
                              name="university"
                              placeholder="Add your name"
                              className="px-5 py-2 border w-[226px]  h-[44px] border-gray-400 rounded">
                              <option value="University of Ilorin">
                                Select your university{' '}
                              </option>
                              <option value="University of Ilorin">
                                University of Ilorin
                              </option>
                              <option value="University of Ilorin">
                                University of Ibadan
                              </option>
                              <option value="University of Ilorin">
                                University of Abuja
                              </option>
                            </select>
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor="level">Level</label>
                            <select
                              type="text"
                              name="level"
                              placeholder="Choose level"
                              className="px-5 py-2 border w-[226px] h-[44px] border-gray-400 rounded">
                              <option value="0">Choose level</option>
                              <option value="100">100</option>
                              <option value="200">200</option>
                              <option value="300">300</option>
                              <option value="400">400</option>
                              <option value="500">500</option>
                              <option value="600">600</option>
                              <option value="700">700</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex flex-col  mt-12">
                          <label htmlFor="level">Date of Birth</label>
                          <div className="flex flex-row justify-between ">
                            <input
                              type="number"
                              name="level"
                              placeholder="Date"
                              className="px-5 py-2 border  w-[165.69px] h-[44.06px] border-gray-400 rounded"
                            />
                            <input
                              type="number"
                              name="level"
                              placeholder="Month"
                              className="px-5 py-2 border  w-[165.69px] h-[44.06px] border-gray-400 rounded"
                            />
                            <input
                              type="number"
                              name="level"
                              placeholder="Year"
                              className="px-5 py-2 border  w-[165.69px] h-[44.06px] border-gray-400 rounded"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Modalsmall>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}
