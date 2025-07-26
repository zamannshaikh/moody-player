import React, { useState , useRef } from 'react';
import './MoodSongs.css';

const MoodSongs = ({Songs}) => {
       const [playingId, setPlayingId] = useState(null);
  const audioRefs = useRef({});
  const togglePlay = (id) => {
    const currentAudio = audioRefs.current[id];

    if (!currentAudio) return;

    if (playingId === id) {
      currentAudio.pause();
      setPlayingId(null);
    } else {
      // Pause any other playing audio
      if (playingId && audioRefs.current[playingId]) {
        audioRefs.current[playingId].pause();
      }

      currentAudio.play();
      setPlayingId(id);
    }
  };

  
    const displaySongs = () => {
        return Songs.map(song => (
            <div key={song.id} className="song-item">
                <div><h3>{song.title}</h3>
                <p>{song.artist}</p></div>
              <div className="icon-container">
          <audio
            ref={(el) => (audioRefs.current[song.id] = el)}
            src={song.audio}
          />
          {playingId === song.id ? (
            <i
              className="ri-pause-large-line play-pause"
              onClick={() => togglePlay(song.id)}
            ></i>
          ) : (
            <i
              className="ri-play-large-line play-pause"
              onClick={() => togglePlay(song.id)}
            ></i>
          )}
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