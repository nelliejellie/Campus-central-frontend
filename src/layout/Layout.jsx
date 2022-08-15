/** @format */

import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import PageViewer from './PageViewer';
import { DashboardHeader } from '../components/Header';
import '../assets/style/Layout.css';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Layout() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="root">
        <div
          className={clsx('drawer shadow-lg', {
            drawerOpen: !open,
            drawerClose: open,
          })}>
          <div className="mt-1.5 mb-4">
            <div className="flex flex-wrap items-center">
              <div className="w-9/12">
                <img
                  src={require('../assets/images/icon/Frame 8.png')}
                  alt="website logo"
                  className={clsx('logo', {
                    hide: open,
                  })}
                />
                <img
                  src={require('../assets/images/icon/Group23.png')}
                  alt="website logo"
                  className={clsx('logo-2', {
                    hide: !open,
                  })}
                />
              </div>
              <div className="w-3/12 text-center">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  onClick={handleDrawerClose}
                  className={clsx('menuButton', {
                    hide: !open,
                  })}
                />
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  onClick={handleDrawerOpen}
                  className={clsx('menuButton', {
                    hide: open,
                  })}
                />
              </div>
            </div>
          </div>

          <SideBar />
        </div>
        <div className="content">
          {/* <header
						className={clsx('appBar shadow-lg ', {
							appBarShift: open,
						})}>
						<DashboardHeader />
					</header> */}

          {/* <div className='scroll'> */}
          <main className="container">
            <PageViewer />
          </main>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
