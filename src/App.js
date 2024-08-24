
import Header from './components/Header';
import General from './components/General';
import Sidebar from './components/Sidebar';
import {videoinfo} from './Data/videoinfo';
import './index.css';


function App(){
  return(
   <div className="main">
    <Header/>
 
 
 <div class="grid">
    {videoinfo.map((v,i)=>{
return(
 
       <General piteam={v} key={i} />
   
)
    })}
  </div>
  
  
   <Sidebar/>

   </div>
  );  
  }
  export default App;
  