import React from 'react'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import headerMs from '../../Styles/headerMS.css'
import SavedStatus from './SavedStatus';
const Header = ({myInfo}) => {
  return (
    <div style={{display:'flex' , flexDirection:'column' ,width:"100%", marginTop:'10vh' , marginLeft:"10vh"}}>
    <div style={{
        display:"flex", justifyContent:"flex-start", gap:"40vh"
    }}>

        <img style={{width:"25vh" , height:"25vh" , borderRadius:"50%" , objectFit:"cover"}} src={`${myInfo.profilePic}`} />
        <div>
            <div style={{display:"flex", gap:'20px' , alignItems:'center'}}>
                <span style={{fontSize:"20px"}}>{myInfo.userName}</span>
                <span class="profile_header_btn">Edit Profile</span>
                <span class="profile_header_btn">view Archive</span>
                <span><SettingsApplicationsIcon/></span>
            </div>
        
        <div style={{display:"flex" , justifyContent:'space-around' , marginTop:"15px"}}>
            <span>{myInfo.post} Post</span>
            <span>{myInfo.following}Following</span>
            <span>{myInfo.followers} Followers</span>
        </div>
        <div style={{marginTop:'20px' , marginLeft:'20px'}}>
            {myInfo.name}
        </div>
        <p> {myInfo.bio}</p> 
        </div>
    </div>
    <SavedStatus savedStatus={myInfo.savedStatus}/>
    </div>
  )
}

export default Header
