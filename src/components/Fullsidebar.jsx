
import home from './icons/home.svg';
import explore from './icons/explore.svg';
import subscription from './icons/subscriptions.svg';
import original from './icons/originals.svg';
import ytmusic from './icons/youtube-music.svg';
import library from './icons/library.svg';
import './Sidebar.css';

function Fullsidebar({videoClicked}) {
  return (
    <div className="fixed bottom-0 bg-white
    left-0 top-[55px] right-0 w-[170px]
    z-[200] text-[13px]

     ">
      <div className="
      flex h-[24px] justify-start  cursor-pointer items-center h-[50px]
      mb-5 justify-center ml-0  flex-row mb-5 hover:bg-gray-300 gap-5">
      <div className="absolute left-3" onclick ={videoClicked}>
      <img className="h-[25px] " src={home} alt="" /> 
      </div>
      
        <div className="font-bold mr-5">Home</div>
      </div>

      <div className="flex justify-start h-[24px] gap-5 cursor-pointer items-center h-[50px]
      mb-5 justify-center mb-5   hover:bg-gray-300 flex-row">
        <div className="absolute left-3">
        <img className="h-[25px]" src={explore} alt="" />
        </div>
        <div className="font-bold ">Explore</div>
      </div>

      <div className="flex justify-start h-[24px] gap-5 hover:bg-gray-300 cursor-pointer items-center h-[50px]
      mb-5 justify-center mb-5 pl-12 ml-[9px]flex-row">
        <div className="absolute left-3">
        <img className="h-[25px]" src={subscription} alt="" />
        </div>
        <div className="font-bold mr-5 ">Subscriptions</div>
      </div>

      <div className="flex justify-start h-[24px] gap-5  hover:bg-gray-300 cursor-pointer items-center h-[50px]
      mb-5 justify-center mb-5 justify-start flex-row">
        <div className="absolute left-3">
        <img className="h-[25px]" src={original} alt="" />
        </div>
        <div className="font-bold ">Originals</div>
      </div>

      <div className="flex justify-start h-[24px] gap-5 hover:bg-gray-300 cursor-pointer items-center h-[50px]
      mb-5 justify-center mb-5 flex-row">
        <div className="absolute left-3">
        <img className="h-[25px]" src={ytmusic} alt="" />
        </div>
        <div className="font-bold ">YT Music</div>
      </div>

      <div className="flex h-[24px] justify-start gap-5 hover:bg-gray-300 cursor-pointer items-center h-[50px]
      mb-5 justify-center flex-row mb-5">
        <div className="absolute left-3">
        <img className="h-[25px]" src={library} alt="" />
        </div>
        <div className="font-bold ">Library</div>
      </div>
      <p 
      className='font-bold text-[15px] ml-5'
      >Subscription</p>
      <div className='flex mt-4 flex-row gap-3 justify-center justify-start'>
        
        <div className ="">
          <img className ="rounded-full h-[35px]" src= "/profile-channel/tY3E_5kQ29_aNmLX17bMwGtgHbhkAFZefpaluftZaAxW16Q3IC2-MRxmIo9TimnaqXbz6KRNBw=s88-c-k-c0x00ffffff-no-rj.jpeg" alt="" />
        </div>
        <div className=" mt-2 font-bold">
        Sansad TV
        </div>
      </div>
    </div>
  );
}

export default Fullsidebar;
