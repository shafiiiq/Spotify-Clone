import React, { useEffect, useState } from 'react'
import '../../cssHelper/helper.css'
import './Artist.css'
import { clientId, clientSecret, endPoint, tokenEndPoint } from '../../Constants/constant'

function Artist() {

  const [accessToken, setAccessToken] = useState('')
  const [myArtists, setmyArtists] = useState([])
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
    async function searchLatest() {
      const artistParameters = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken,
        }
      }

      fetch(`${endPoint}artists?ids=6M2wZ9GZgrQXHCFfjv46we,4npEfmQ6YuiwW1GpUmaq3F,1McMsnEElThX1knmY4oliG,7Ez6lTtSMjMf2YSYpukP1I`, artistParameters)
        .then(result => result.json())
        .then(data => setmyArtists(data.artists))
    }
    searchLatest()

    // console.log(playlists);

  }, [{}])


  return (
    <div className='Artist r-5 flex ease-4 pointer mt-1 flex-col'>
      {
        myArtists.map((myArtist, index) => (
          <div key={index} className="artists-item w-full a-center flex gap-05">
            <img src={myArtist.images[1] ? myArtist.images[1].url : ''} alt="" className="Artist-icon cover r-50" />
            <div className="flex flex-col j-center Artist-details">
              <span className='font-sm bold-400'>
                {myArtist.name}
              </span>
              <span>
                {myArtist.type}
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Artist
