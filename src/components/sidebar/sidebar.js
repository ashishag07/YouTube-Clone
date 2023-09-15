import React from 'react';
import './sidebar.css';
import SidebarRow from './sidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar(){
    return <div className='sidebar'>
        <SidebarRow Icon = {HomeIcon} title='Home'/>
        <SidebarRow Icon = {WhatshotIcon} title='Trending'/>
        <SidebarRow Icon = {SubscriptionsIcon} title='Subscriptions'/>
        <hr />

        <SidebarRow Icon = {VideoLibraryIcon} title='Library'/>
        <SidebarRow Icon = {HistoryIcon} title='History'/>
        <SidebarRow Icon = {SlideshowIcon} title='Your Videos'/>
        <SidebarRow Icon = {ScheduleIcon} title='Watch Later'/>
        <SidebarRow Icon = {ExpandMoreIcon} title='Show More'/>
        <hr />
        


    </div>
}

export default Sidebar;