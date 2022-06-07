import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'


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
          <div className='Vid'><p1>Upload</p1></div>
          <div className='Vid'>Delete</div>
          <div className='Vid'>Download</div>
          <div className='Vid'></div>
         </div>
          {/* <div className='Vid'></div><div className='Vid'></div>
        </div>
        <div className='imga'>
        <h2>Images</h2>
        <div className='theImage'></div>
        </div> */}
      </div>




         
        <div className='profile'>
        <img src={require('./logo.png')} width="40%" height="10%" alt="Logo"/>
               
          <h1>    </h1>
          
          <img id='pp'  src={require('./j.png')} width="27%" height="12%" alt="profile"/>
          <p><strong> </strong>{currentUser?.email}</p>

          <hr/>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <div>
           <button type='button' id='home'>Home</button>
           <button type='button' id='home'>Analytics</button>
           <button type='button' id='home'>Settings</button>
           </div>
           
          <hr/>

          <span onClick={() => signOut(auth)}>Logout</span>
         

        <div className='sub_div'> <img id='ABlogo'  src={require('./AB.png')} width="50%" height="50%" alt="Logo"/></div>

        </div>






      </div>
      



     
  )
}

export default Profile