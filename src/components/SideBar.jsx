/** @format */

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import RouteLinks from '../layout/RouterLink';
import Style from '../assets/style/Sidebar.module.css';
import { useUserAuth } from '../hooks/UserAuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function SideBar(props) {
  const [error, setError] = useState('');
  const links = RouteLinks;
  let location = useLocation();
  let { logOut } = useUserAuth();
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={`${Style.sidebar}`}>
      <ul className={Style.sidebarLinks}>
        {links.map((link) => (
          <li
            key={link.path}
            className={
              location.pathname === `/admin/${link.path}`
                ? Style.activeLinkItem
                : Style.linkItem
            }>
            <Link to={`${link.path}`} className=" flex items-center">
              <span
                className={
                  location.pathname === `/admin/${link.path}`
                    ? Style.activeIcon
                    : Style.icon
                }>
                {link.icon}
              </span>
              <span className={Style.text}>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <ul className={`${Style.sidebarLinks} mt-24 cursor-pointer`}>
        <li onClick={handleLogout} className={Style.linkItem}>
          <span className={Style.icon}>
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </span>
          <span className={Style.text}>Log Out</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
