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
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            duby doll {' '} 
                            <span className='post__headerSpecial'>
                                <VerifiedUserIcon className='post__badge' /> @deeonwuli
                            </span>
                        </h3>
                    </div>
                    <div className='post_headerDescription'>
                        <p>I'm packing lol.</p>
                    </div>
                </div>
                <img alt='' src='https://media.giphy.com/media/0VWIQBO18LOD1Yx1LO/giphy.gif'></img>
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default Post
