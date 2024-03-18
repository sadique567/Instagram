import React from 'react'
import SidebarSB from '../Common/SidebarSB'
import Header from './Header'
import {myInfo} from '../DataMS/MyInfo'
import Mypost from './Mypost'
const Profile = () => {
  return (
    <div style={{display:"flex" , gap:"5vw" }}>
        <SidebarSB/>
        <div style={{}}>
        <Header myInfo={myInfo}/>
        <Mypost post={myInfo.posts}/>
        </div>
    
    </div>
  )
}

export default Profile
