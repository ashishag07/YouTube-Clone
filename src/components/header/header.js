import React, { useState } from "react";
import {Link} from 'react-router-dom'
import './header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';


function Header(){

    const [inputSearch,setInput] = useState('');

    return <div className="header">
        

        <div className="header__left">
            <MenuIcon />
            <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="youtube-logo" className="header__logo"></img>
            </Link>            
        </div>

        <div className="header__center">
            <input onChange= {(event)=> setInput(event.target.value)} type='text' value={inputSearch} placeholder="Search" className="header__input"></input>
            <Link to ={`/search/${inputSearch}`}>
                <SearchIcon className="header__searchButton"/>
            </Link>            
            
        </div>        

        <div className="header__right">
            <VideoCallOutlinedIcon className="header__icons"/>
            <NotificationsNoneOutlinedIcon className="header__icons"/>
            <Avatar
            src='https://i1.rgstatic.net/ii/profile.image/734500988411905-1552130090899_Q512/Ashish-Agarwal-10.jpg' alt=''className="header__icons"/>            
        </div>        
    </div>

};

export default Header;