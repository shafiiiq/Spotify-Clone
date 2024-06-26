import React, { useEffect, useState } from 'react'
import '../../cssHelper/helper.css'
import './Library.css'
import { clientId, clientSecret, endPoint, shafiiqUserId, tokenEndPoint } from '../../Constants/constant'
import axios from '../../Axios/axios'

function Library() {
    // store that access token 
    const [accessToken, setAccessToken] = useState('')
    const [playlists, setPlaylists] = useState([])
    useEffect(() => {
        // to fetch the access token from spotify api 
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
        }

        fetch(tokenEndPoint, authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, [])

    useEffect(() => {
        async function searchMyLibrary() {
            const artistParameters = {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
                }
            }

            fetch(`${endPoint}browse/categories/rock/playlists`, artistParameters)
                .then(result => result.json())
                .then(data => setPlaylists(data.playlists.items))
                .catch(err => console.log(err))
        }
        searchMyLibrary()

    }, [{}])


    return (
        <div className='Library r-5 flex ease-4 pointer flex-col'>
            {
                playlists.map((playlist, index) => (
                    <div key={index} className="playlists-item w-full flex gap-05  a-center">
                        <img src={playlist.images ? playlist.images[0].url : ''} alt="" className="library-icon cover r-5" />
                        <div className="flex flex-col j-center library-details">
                            <span className='font-sm bold-400'>
                                {playlist.name}
                            </span>
                            <span className='flex' style={{ gap: '5px' }}>
                                <span>
                                    {playlist.type}
                                </span>
                                <span>.</span>
                                <span>
                                    {playlist.tracks.total}
                                </span>
                                <span>songs</span>
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}

export default Library
