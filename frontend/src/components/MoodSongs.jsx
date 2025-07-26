import React, { useState } from 'react';
import './MoodSongs.css';

const MoodSongs = () => {
    const [Songs, setSongs] = useState([
        { id: 1, title: "Happy Song", artist: "Artist A" },
        { id: 2, title: "Sad Song", artist: "Artist B" },
        { id: 3, title: "Angry Song", artist: "Artist C" },
        { id: 4, title: "Relaxing Song", artist: "Artist D"},
    ])
    const displaySongs = () => {
        return Songs.map(song => (
            <div key={song.id} className="song-item">
                <div><h3>{song.title}</h3>
                <p>{song.artist}</p></div>
               <div className="icon-container">
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