import React from 'react'
import "../../Styles/post.css"
import{obj as postObject} from "../DataMS/PostData.js"
const Post = () => {
  return (
    <div  className='postContainer'>
      {
        postObject.map(PostData=>{
                return<div style={{border:"2px solid gray" , padding:"10px 10px" , marginBottom:"10px"}}>
                        <div className='postHeader'>
                            <img style={{border:'red' , borderRadius:'50%'}} width="50px" height="50px"  src={`${PostData.profilePic}`} />
                            <span>{PostData.userName}</span>
                        </div>

                        <div className='postMain'>
                            <img weight="100%" src={`${PostData.postPic}`} />
                            <span> {PostData.likes} Likes</span>
                            <span style={{color:"red" , marginBottom:"10px"}}> {PostData.aboutPost}</span>
                        </div>

                        <div>
                            {
                            PostData.comments.map(comment => {
                                return <div style={{marginBottom:"15px"}}>
                                        <div style={{display:'flex', gap:'4px',alignItems:'center'}}>
                                            <img width="20px" height="20px" style={{border:"2px solid red", borderRadius:"50%"}} src={`${comment.profilePic}`} />
                                            <span>{comment.userName}</span>
                                            <span>{comment.comment}</span>
                                        </div>
                                    <span style={{padding:"1px", marginLeft:"25px", fontSize:"12px"}}>{comment.likes} likes</span>
                                    </div>  
                            })
                        }
                        
                            </div>

                    </div>

        })
      }
    </div>
  )
}

export default Post
