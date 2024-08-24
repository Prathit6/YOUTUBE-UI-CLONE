import home from "./icons/home.svg";
import explore from "./icons/explore.svg";
import  subscription from "./icons/subscriptions.svg";
import original from "./icons/originals.svg";
import ytmusic from "./icons/youtube-music.svg";
import library from "./icons/library.svg";
import "./Sidebar.css";
import './General.css';
import './Header.css';



function Sidebar() {
  return (


<div class="side-bar">
      <div  class="side-bar-link">
        <img class="img1-sidebar" src={home} alt=""/>
      <div>Home</div>
      </div>
     
      <div class="side-bar-link">
        <a href="/trandingyt.jsx">
        <img class="img2-sidebar" src={explore} alt=""/>
       </a>
      <div>Explore</div>
      
      </div>
    
      <div class="side-bar-link">
        <img class="img3-sidebar" src={subscription } alt=""/>
      <div>Subscriptions</div>
      </div>
      <div class="side-bar-link">
        <img class="img4-sidebar" src={original} alt=""/>
     <div>Originals</div>
      </div>
      <div class="side-bar-link">
        <img class="img5-sidebar" src={ ytmusic } alt=""/>
     <div>
      You Tube music
     </div>
      </div>
      <div class="side-bar-link">
        <img class="img6-sidebar" src={library} alt=""/>
      <div>
        Library
      </div>
      </div>
    </div>
   
  );
}

export default Sidebar;