

import './Header.css';
import three_line from './icons/hamburger-menu.svg';
import profilelogo from './icons/youtube-logo.svg';
import search_img from './icons/search.svg';
import voice_search_img from './icons/voice-search-icon.svg';
import upload_logo from './icons/upload.svg';
import apps_img from './icons/youtube-apps.svg';
import notify_img from './icons/notifications.svg';
import profile_img from './profile.jpg';

function Header({ handleclick }) {
  return (
    <div className="main-box">
      <div className="left-div">
       
        <img
          className="three-line"
          onClick={handleclick} 
          src={three_line}
          alt=""
        />
        <img className="logo" src={profilelogo} alt="" />
      </div>

      <div className="middle-div">
        <input className="search-tab" type="text" placeholder="Search" />
        <button className="search-button">
          <img className="search-img" src={search_img} alt="" />
        </button>
        <button className="voice-button">
          <img className="voice-img" src={voice_search_img} alt="" />
        </button>
      </div>

      <div className="right-div">
        <img className="upload-img" src={upload_logo} alt="" />
        <img className="apps-img" src={apps_img} alt="" />
        <img className="notify-img" src={notify_img} alt="" />
        <img className="profile-img" src={profile_img} alt="" />
      </div>
    </div>
  );
}

export default Header;
