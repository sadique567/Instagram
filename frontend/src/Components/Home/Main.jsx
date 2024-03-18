import React from 'react'
import Status from './Status'
import Post from './Post'

const Main = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div>
      <Status/>
        </div>
        
        <div>
        <Post/>
        </div>
      
    </div>
  )
}

export default Main
