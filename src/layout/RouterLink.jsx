/** @format */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faComment,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

const RouteLinks = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: (
      <img src={require('../assets/images/icon/home.png')} alt="dashboard" />
    ),
  },
  {
    name: 'Messages',
    path: 'messages',
    icon: (
      <img
        src={require('../assets/images/icon/messages_sidebar.png')}
        alt="messages"
      />
    ),
  },
  {
    name: 'Safe space',
    path: 'safe-space',
    icon: (
      <img src={require('../assets/images/icon/safe.png')} alt="safe-space" />
    ),
  },
  {
    name: 'Resources',
    path: 'resources',
    icon: (
      <img
        src={require('../assets/images/icon/resources.png')}
        alt="resources"
      />
    ),
  },
  {
    name: 'Notification',
    path: 'notification',
    icon: (
      <img
        src={require('../assets/images/icon/notification.png')}
        alt="notification"
      />
    ),
  },
  {
    name: 'Profile',
    path: 'profile',
    icon: (
      <img src={require('../assets/images/icon/profile.png')} alt="profile" />
    ),
  },
  {
    name: 'Settings',
    path: 'settings',
    icon: (
      <img src={require('../assets/images/icon/settings.png')} alt="settings" />
    ),
  },
];
export default RouteLinks;
