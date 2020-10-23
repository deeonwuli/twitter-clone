import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'

function Post(
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
) {
    return (
        <div className='post'>
           <div className='post__avatar'>
                <Avatar src='https://i1.rgstatic.net/ii/profile.image/857857436164097-1581540559744_Q512/Chukwudumebi_Onwuli.jpg'></Avatar>
                <div className='post__body'>
                    <div className='post__header'>
                        <div className='post__headerText'>
                            <h3>
                                duby doll {' '} 
                                <span>
                                    <VerifiedUserIcon className='post__badge' /> @deeonwuli
                                </span>
                            </h3>
                        </div>
                        <div className='post_headerDescription'>
                            <p>I'm packing lol.</p>
                        </div>
                    </div>
                    <img alt='' src='https://media2.giphy.com/media/XDMJEpbNghQbFFIk3v/200w.webp?cid=ecf05e47gp1zcv96sr44wyicnd5sgyq661uytmarbp5xe5k1&rid=200w.webp'></img>
                    <div className='post__footer'>
                        <ChatBubbleOutlineIcon />
                        <RepeatIcon />
                        <FavoriteBorderIcon />
                        <PublishIcon />
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Post
