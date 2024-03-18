import React from 'react'
import SidebarSB from '../Common/SidebarSB'
import Main from './Main'
import Suggetion from './Suggetion'
const HomePage = () => {
  return (
    <div style={{display:'flex', justifyContent:"space-between"}}>
       <div> <SidebarSB/></div>
        <div> <Main/> </div>
       <div> <Suggetion/></div>
    </div>
  )
}

export default HomePage
