import React from "react";
import './videoCard.css';
import Avatar from '@mui/material/Avatar';

function VideoCard({thumbnail,title,views,times,channel}){
    return <div className="videoCard">
        <img className="videoCard__thumbnail" src={thumbnail} alt='thumbnail' />
        <div className="videoCard__videoInfo">
            <Avatar src={channel} className="videoCard__avatar"/>
            <div className="videoCard__text">
                <h4>{title}</h4>
                <p>{views} . {times}</p>
            </div>
        </div>
    </div>;
};

export default VideoCard;