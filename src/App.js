
import Header from './components/Header';
import General from './components/General';
import Sidebar from './components/Sidebar';
import { videoinfo } from './Data/videoinfo';
import './index.css';
import { useState } from 'react';
import Fullsidebar from './components/Fullsidebar';
import VideoPlayer from './components/VideoPlayer';


function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isVideoClicked,setVideoClicked]=useState(false);

  const handleclick = () => {
    setSidebarVisible((prev) => !prev);
    
  };
  const videoClicked=()=>{
    setVideoClicked((prev) => !prev)
  };
  
  
  
  return (
    <div className="main">
      
      <Header handleclick={handleclick} />
      <div className="grid">
          {!isVideoClicked &&videoinfo.map((v, i) => (
            <General piteam={v} key={i} videoClicked={videoClicked} />
          ))}
         {isVideoClicked&& <VideoPlayer />}
       
      </div>
      
      {!isSidebarVisible && <Sidebar videoClicked={videoClicked} />}
      {isSidebarVisible && <Fullsidebar videoClicked={videoClicked}/>}
    </div>
  );
}

export default App;
