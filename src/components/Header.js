
import './Header.css';
import "./Sidebar.css";
import './General.css';
import three_line from "./icons/hamburger-menu.svg";
import profilelogo from "./icons/youtube-logo.svg";
import search_img from "./icons/search.svg";
import  voice_search_img from "./icons/voice-search-icon.svg";
import upload_logo from "./icons/upload.svg";
import apps_img from "./icons/youtube-apps.svg";
import notify_img from "./icons/notifications.svg";
import profile_img from "./profile.jpg";





function Header() {
  return (


    <div class="main-box">

        <div class="left-div">
          <img class="three-line" src={three_line} alt=""/>
          <img class="logo" src={profilelogo} alt=""/>

        </div>

         <div class="middle-div">
          <input class="search-tab"type="text" placeholder="Search"/>
          <button class="search-button"> 
          <img class="search-img" src={search_img } alt=""/>
        </button>

         <button class="voice-button"> 
         <img  class="voice-img" src={voice_search_img } alt=""/>
        </button>
         
        </div>


         <div class="right-div">
            <img class="upload-img" src={upload_logo} alt=""/>
            <img  class="apps-img" src={apps_img} alt=""/>
            
            <img class="notify-img" src={notify_img} alt=""/>
          <img class="profile-img" src={profile_img} alt=""/>
        </div>  

    </div>
   
  );
}

export default Header;