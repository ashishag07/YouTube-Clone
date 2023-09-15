import React from "react";
import './recommendedVideos.css';
import VideoCard from "./videoCard";
import Avatar from '@mui/material/Avatar';

function RecommendedVideos(){
    
    return <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">
            <VideoCard 
            thumbnail=''
            views='1.2M'
            times='3hr Ago'
            channel='https://i1.rgstatic.net/ii/profile.image/734500988411905-1552130090899_Q512/Ashish-Agarwal-10.jpg'
                 
            />

            <VideoCard 
            thumbnail='https://i1.rgstatic.net/ii/profile.image/734500988411905-1552130090899_Q512/Ashish-Agarwal-10.jpg'        
            title='VideoCard1'
            views='1.2M'
            times='3hr Ago'
            channel='https://upload.wikimedia.org/wikipedia/en/b/b1/THE_VIRAL_FEVER_OFFICIAL_LOGO.jpg'     
            />  

            <VideoCard 
            thumbnail='https://i1.rgstatic.net/ii/profile.image/734500988411905-1552130090899_Q512/Ashish-Agarwal-10.jpg'        
            title='VideoCard1'
            views='1.2M'
            times='3hr Ago'
            channel='https://upload.wikimedia.org/wikipedia/en/b/b1/THE_VIRAL_FEVER_OFFICIAL_LOGO.jpg'     
            />  

            <VideoCard 
            thumbnail='https://i1.rgstatic.net/ii/profile.image/734500988411905-1552130090899_Q512/Ashish-Agarwal-10.jpg'        
            title='VideoCard1'
            views='1.2M'
            times='3hr Ago'
            channel='https://upload.wikimedia.org/wikipedia/en/b/b1/THE_VIRAL_FEVER_OFFICIAL_LOGO.jpg'     
            />
        </div>         
    </div>
}

export default RecommendedVideos;