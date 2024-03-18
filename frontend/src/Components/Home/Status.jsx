 import React from 'react'
 import {obj as statusObj} from '../DataMS/StatusData.js'
 import '../../Styles/status.css'
 const Status = () => {
   return (
     <div className='statusContainer'>
        {
       statusObj.map(obj=>{
         return  <div style={{display:'flex' , flexDirection:'column' , gap:'10px', alignItems:'center' }}>
        <img width='50px' height='50px' src={`${obj.profilePic}`} alt='Profile Pic' />     {/*for img src use back tick ``  */}
         <span>{obj.username}</span>
         </div>
       })

    }
     </div>
   )
 }
 
 export default Status
 