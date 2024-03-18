import React from 'react'
import suggetionData from "../DataMS/suggetion.js"
import suggetion from "../../Styles/suggetion.css"
const Suggetion = () => {
  return (
    <div style={{width:'15vw' , marginTop:"5vh" , marginRight:"10vh"}}>
        {
            suggetionData.map(user => {
                return <div style={{ marginTop:"2vh", border:"1px solid gray",height:"100px", display:"flex",  justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{paddingLeft:"2vh", height:"100px", display:"flex", flexDirection:"column", justifyContent:"center" ,gap:"10px" }}>
                    <span>{user.userName}</span>
                    <img src={`${user.profilePic}`} width="50px" height="50px" style={{ borderRadius:"50%"}}/>
                    </div>
                    <span className="followLink">follow</span>
                </div>
            })
        }
      
    </div>
  )
}

export default Suggetion
