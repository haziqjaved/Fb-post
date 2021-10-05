
import FbImageLibrary from 'react-fb-image-grid'
import './index.css'
import '../../../App.js'
import activeDot from '../../../assets/online-dot.png'
import { useState } from 'react';

function PostFb(props){
    const [like,setLike]=useState(0);
    const[share,setShare]=useState(0);
    const [postComment,setPostComment]=useState();

    const {userDetails:{createdBy,avatar,description,images,createdAt}}=props;
    return(
        <div className='main-div'>
            <img src={avatar} className='profile-pic'/>
            <h4 id="created-by">{createdBy}</h4>
            <img src={activeDot} className="dot"/>
            <p className='date'> {createdAt}</p>
            <p className='caption' >{description}</p>
            <div className='posted-images'>
                <FbImageLibrary images={images} />
                <div className='like-comment-share'>
                    <div className='like' onClick={()=>setLike(like+1)} >
                    <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" height="50px"/>
                        <span>Like</span>
                    </div>
                    <div className='comment'>
                        <img src="https://viplikes.net/img/catalog_sect_img/new/facebook%20comment%20icon.png" height="30px"/> &nbsp; &nbsp;
                        <span>Comment</span>
                    </div>
                    <div className='share' onClick={()=>setShare(share+1)}> <img src="https://purepng.com/public/uploads/large/share-icon-7nl.png" height="30px"/>
                        <span>Share</span>
                    </div>
                </div>
            {like===0 ? <div></div>:<div className='show-like'>
                <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" height="35px"/>
                {like}  
                </div>}
            {
                share===0 ? <div></div>:<div className='showShare'><span>{share}</span> Shares</div>
            }
            </div>
            <div className='comment-section'>
                
            </div>
        </div>
    )
}
export default PostFb;