

import './General.css';
// import { Link } from 'react-router-dom';




function  General({piteam , videoClicked}) {
  
  return ( 

         <div className="video " >

     <div className="thumbnail-div">
      <div className="thumb">
       <img className="thumbnail" src={piteam.thumbnail}  onClick={videoClicked}  alt=""/>
      </div> 
    
     <div className="video-time">
    {piteam.timeinterval}
     </div>
    </div>

  <div className="container2">
    <div className="profile-div">
<img className="Dp" src={piteam.channellogo} alt="Profile logo"/>
    </div>
    <div className="video-info">
 <p className="title">
    {piteam.title}
    </p>
    <p className ="channal-name">
{piteam.channelname}

   </p>
   <p className="views">
  
{piteam.views}
    </p>

    </div>

  </div>
  
</div>

       
   
  );
}

export default General;
