
//import { videoinfo } from "../Data/videoinfo";

function  VideoPlayer({piteam}) {

    return (
        
        <div className="">
             <div className="">
                <iframe 
                        //={`https://www.youtube.com/embed/${piteam.videoid}`} 
                        src="https://www.youtube.com/embed/iWMB9PJb1CA?si=72cPvejBgSvbnbp_"
                        // title={piteam.title}
                        title ="demo"
                         
                         frameborder="0"
                          width="900" height="500" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                         >

                </iframe>
            </div>
        </div>

      
    );
}
export default VideoPlayer;