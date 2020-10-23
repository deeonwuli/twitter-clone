import { Button } from '@material-ui/core'
import React from 'react'
import './Tweetbox.css'
import { Avatar } from '@material-ui/core'

function Tweetbox() {
    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetbox__input'>
                    <Avatar src='https://i1.rgstatic.net/ii/profile.image/857857436164097-1581540559744_Q512/Chukwudumebi_Onwuli.jpg'></Avatar>
                    <input placeholder="What's popping?" type='text'></input>
                </div>
                <div>
                    <input className='tweetbox__imageInput' placeholder='Optional: Enter image URL' type='text'></input>                   
                </div>
                <Button className='tweetbox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
