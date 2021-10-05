
import FbImageLibrary from 'react-fb-image-grid'
import './index.css'
import '../../../App.js'
import activeDot from '../../../assets/online-dot.png'
import send from '../../../assets/send-icon.png'
import { useState } from 'react'

function PostFb(props) {
    const [like, setLike] = useState(0);
    const [share, setShare] = useState(0);
    const [comment, setComment] = useState([]);
    const [text, setText] = useState('');
    const addComment =_=> {
        setText('')
        const listApp = [...comment];
        listApp.push(text)
        setComment(listApp)
        
    }
    const [showCommentinput, setShowCommentinput] = useState(false);
    const { userDetails: { createdBy, avatar, description, images, createdAt } } = props;

    return (
        <div className='main-div'>
            <img src={avatar} className='profile-pic' />
            <h4 id="created-by">{createdBy}</h4>
            <img src={activeDot} className="dot" />
            <p className='date'> {createdAt}</p>
            <p className='caption' >{description}</p>
            <div className='posted-images'>
                <FbImageLibrary images={images} />
                <div className='like-comment-share'>
                    <div className='like' onClick={() => setLike(like + 1)} >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" height="50px" />
                        <span>Like</span>
                    </div>
                    <div className='comment' onClick={() => { setShowCommentinput(true) }}>
                        <img src="https://viplikes.net/img/catalog_sect_img/new/facebook%20comment%20icon.png" height="30px" /> &nbsp; &nbsp;
                        <span>Comment</span>
                    </div>
                    <div className='share' onClick={() => setShare(share + 1)}> <img src="https://purepng.com/public/uploads/large/share-icon-7nl.png" height="30px" />
                        <span> Share</span>
                </div>
            </div>
                {like === 0 ?console.log('no like') : <div className='show-like'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png" height="35px" />
                    {like}
                    {
                    share === 0 ? console.log('false') : <p className='showShare'><span>{share}</span> Shares</p>}
                    </div>} 
            </div>       {/* End posted-image */}
            {showCommentinput === true ?
                <div className='comment-section'>
                    <img src={avatar} className="comment-imgs" />
                    <input onChange={(e)=>setText(e.target.value)}  value={text} className='input-comment' type='text' placeholder='Comment here' />
                    <button onClick={addComment}><img src={send} /></button>
                </div> : <></>}   {/* End comment-section */}
            {comment ?
                <table style={{ margin: "0 auto" }}>
                    {comment.map((items, index) => {
                        return (
                            <tr key={index}>
                             <h5 className="comment-user">{createdBy}</h5>
                                <img src={avatar} className="comment-img" />
                                <td className='comment-text'>{items}</td>
                            </tr>
                        )})
                    }
                </table> :<></>
            }
        </div> 
        // end of main div
    )
}
export default PostFb;