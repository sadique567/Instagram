import { BorderTop } from '@mui/icons-material'
import React from 'react'

const Mypost = ({post}) => {
  return (<div>
    <div style={{display:"flex" , justifyContent:"center" , gap:"5vh", borderTop:"1px solid grey" , marginTop:'5vh' , padding:'10px 0px'}}>
    <span>Posts</span>
    <span>Reels</span>
    <span>Saved</span>
    <span>Tagged</span>
</div>
    <div style={{display:"grid", gridTemplateColumns:"auto auto auto" , columnGap:'1vh', rowGap:'1vh'}}>{
            post.map((ele)=>{
                return <div>                    
                        <img src={`${ele.postImages[0]}`} alt=""  style={{width:'300px', height:'300px' , gap:'10px' , objectFit:"cover"}}/>
                    </div>            
            })
            }
        </div>
    </div>
  )
}

export default Mypost
