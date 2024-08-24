

import './General.css';
import './Header.css';
import './Sidebar.css';



function  General({piteam}) {
  return (

         <div class="video">

     <div class="thumbnail-div">
     <img class="thumbnail" src={piteam.thumbnail} alt=""/>
     <div class="video-time">
{piteam.timeinterval}
     </div>
    </div>

  <div class="container2">
    <div class="profile-div">
<img class="Dp" src={piteam.channellogo} alt=""/>
    </div>
    <div class="video-info">
 <p class="title">
{piteam.title}
    </p>
    <p class="channal-name">
{piteam.channelname}

   </p>
   <p class="views">
  
{piteam.views}
    </p>

    </div>
  </div>
</div>

       
   
  );
}

export default General;