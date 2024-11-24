
import home from './icons/home.svg';
import explore from './icons/explore.svg';
import subscription from './icons/subscriptions.svg';
import original from './icons/originals.svg';
import ytmusic from './icons/youtube-music.svg';
import library from './icons/library.svg';
import './Sidebar.css';

function Sidebar({videoClicked}) {
  return (
    <div className="side-bar">
      <div className="side-bar-link" >
        <img className="img1-sidebar" onClick={videoClicked} src={home} alt="" />
        <div>Home</div>
      </div>

      <div className="side-bar-link">
        <img className="img2-sidebar" src={explore} alt="" />
        <div>Explore</div>
      </div>

      <div className="side-bar-link">
        <img className="img3-sidebar" src={subscription} alt="" />
        <div>Subscriptions</div>
      </div>

      <div className="side-bar-link">
        <img className="img4-sidebar" src={original} alt="" />
        <div>Originals</div>
      </div>

      <div className="side-bar-link">
        <img className="img5-sidebar" src={ytmusic} alt="" />
        <div>YT Music</div>
      </div>

      <div className="side-bar-link">
        <img className="img6-sidebar" src={library} alt="" />
        <div>Library</div>
      </div>
    </div>
  );
}

export default Sidebar;
