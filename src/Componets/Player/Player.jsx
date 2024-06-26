import React from 'react'
import '../../cssHelper/helper.css'
import './Player.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Player() {
  return (
    <div className='Player h-full'>
      <AudioPlayer  src="http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
      style={{backgroundColor: 'black'}} />
    </div>
  )
}

export default Player


{/* <audio class="music-player-audio" title="Despacito - Luis Fonsi" src="http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"></audio> */}
