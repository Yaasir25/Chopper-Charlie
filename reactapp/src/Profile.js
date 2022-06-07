import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';








//change
function Profile() {
  
  const {currentUser} = useAuthValue()

  return (
   
      <div className='center'>

     <div className='Content'>
        {/* <div className='Lv'>
        <img src={require('./play.png')} width="30%" height="40%" alt="Logo"/>
        <h4>Watch Live Stream</h4>
        </div> */}
        
        <div className='Vd'>
        <h1>Media </h1>
          <div className='Vid'><p2>Upload</p2></div>
          <div className='Vid'><p2>Delete</p2></div>
          <div className='Vid'><p2>Download</p2></div>
          <div className='Vid'>View</div>
         </div>
          {/* <div className='Vid'></div><div className='Vid'></div>
        </div>
        <div className='imga'>
        <h2>Images</h2>
        <div className='theImage'></div>
        </div> */}
      </div>

         
        <div className='profile'>

        <img src={require('./logo.png')} width="60%" height="9%" alt="Logo"/>
               
          <h1>    </h1>
          
          <br/><br/><br/><br/>
          <AccountCircleRoundedIcon sx={{ fontSize: 45 }}/>
          {/* <img id='pp'  src={require('./j.png')} width="27%" height="12%" alt="profile"/> */}
          <br/>
          <p1><strong> </strong>{currentUser?.email}</p1>
          <br/><br/>
          <hr/>
          <br/>
          <p1>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p1>
          <div>
           <button type='button' id='home'><HomeRoundedIcon/>Home</button>
           <button type='button' id='home'><AnalyticsRoundedIcon/>Analytics</button>
           <button type='button' id='home'><SettingsRoundedIcon/>Settings</button>
           </div>
           
           <br/><br/>
          <hr/>


          <br/><br/>
          <span onClick={() => signOut(auth)}><LogoutRoundedIcon/>Logout</span>
         
          {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
        <div className='sub_div'> <img id='ABlogo'  src={require('./AB.png')} width="50%" height="50%" alt="Logo"/></div>

        </div>






      </div>
      



     
  )
}

export default Profile