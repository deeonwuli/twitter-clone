import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core'

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* Twitter icon */}
            <TwitterIcon className='sidebar__twitterIcon' />

            {/* SidebarOption */}
            <SidebarOption active Icon={HomeIcon} text='Home' />
            <SidebarOption Icon={SearchIcon} text='Explore' />
            <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
            <SidebarOption Icon={EmailOutlinedIcon} text='Message' />
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text='Bookmark' />
            <SidebarOption Icon={ListAltIcon} text='Lists' />
            <SidebarOption Icon={PersonOutlineOutlinedIcon} text='Profile' />
            <SidebarOption Icon={MoreHorizIcon} text='More' />

            {/* Button -> Tweet */}
            <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;
