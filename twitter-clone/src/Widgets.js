import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed'

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type='text' />
            </div>

            <div className='widgets__widgetContainer'>
                <h2>Whats's happening?</h2>
                <TwitterTweetEmbed tweetId={'1319952933325340672'} />
                <TwitterTimelineEmbed 
                    sourceType='profile'
                    screenName='deeonwuli'
                    options={{ height: 400 }} 
                />
                <TwitterShareButton 
                    url={'https://facebook.com/dumebi-onwuli'}
                    options={{ text: 'Mama Dee is #groovy', via: 'deeonwuli'}}
                />
            </div>
        </div>
    )
}

export default Widgets
