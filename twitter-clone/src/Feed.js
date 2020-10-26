import React from 'react'
import './Feed.css'
import Tweetbox from './Tweetbox'
import Post from './Post'

function Feed() {
    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed__header'>
                <h2>Home</h2>    
            </div>    

            {/* Tweetbox */}
            <Tweetbox />

            {/* Post */}
            <Post 
                displayName='krumdump' 
                username='krumdumpster' 
                verified={true} 
                text='boats boats boats' 
                avatar='https://pbs.twimg.com/profile_images/1257953136448331776/XXd_k_Eh_bigger.jpg'
                image='https://media.giphy.com/media/XDMJEpbNghQbFFIk3v/giphy.gif'
            />     
        </div>
    )
}

export default Feed
