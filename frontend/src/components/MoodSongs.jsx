import React, { useState } from 'react';
import './MoodSongs.css';

const MoodSongs = ({Songs}) => {
  
    const displaySongs = () => {
        return Songs.map(song => (
            <div key={song.id} className="song-item">
                <div><h3>{song.title}</h3>
                <p>{song.artist}</p></div>
               <div className="icon-container">
                <audio src={song.audio} controls></audio>
                <i className="ri-play-large-line play-pause"></i>
                <i className="ri-pause-large-line play-pause"></i>

               </div>
            </div>
        ))
    }
  return (
    <>
       <h1>Recommended Songs</h1>
    <div className="mood-songs-container">
        
        {displaySongs()}

    </div>
    </>
  )
}

export default MoodSongs