import React from 'react'
import { Spotify } from 'react-spotify-embed'
import '../../cssHelper/helper.css'
import './Tracks.css'

function Tracks() {
    return (
        <div className='Tracks'>
            <Spotify link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw"  style={{width : '100%', height: '100%'}}/>
        </div>
    )
}

export default Tracks
