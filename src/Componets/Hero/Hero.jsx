import React, { useEffect, useState } from 'react'
import '../../cssHelper/helper.css'
import './Hero.css'
import Recomentation from '../Recomentation/Recomentation'
import { clientId, clientSecret, endPoint, tokenEndPoint } from '../../Constants/constant'
import Tracks from '../Tracks/Tracks'

function Hero() {

  const [accessToken, setAccessToken] = useState('')
  const [frequent, setFrequent] = useState([])
  const [isTrack, setIsTrack] = useState(false)

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
    // get artists 
    async function searchLatest() {
      const artistParameters = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken,
        }
      }

      fetch(`${endPoint}search?q=dabzee&type=artist`, artistParameters)
        .then(result => result.json())
        .then(data => setFrequent(data.artists.items))
        .catch(err => console.log(err))

    }
    searchLatest()
  }, [{}])


  function extractCounterItemsFromArtistsForFrequent(array, n) {
    return array.slice(0, n);
  }

  // Extract 4 items
  const latestArtists = extractCounterItemsFromArtistsForFrequent(frequent, 4);

  const showTracks = () => {
    setIsTrack(true)
  }


  return (
    <div className='Hero primary-bg r-10 scroll-hidden'>
      {
        isTrack ? <Tracks /> : (
          <div className="Hero-scroll-wrapper w-full scroll-x scroll-y-hidden pl-1">
            <div className="hero-nav flex a-center j-start mt-2">
              <ul className="flex gap-05 a-center j-start white-clr bold-600">
                <li onClick={showTracks} className="hero-li secondary-bg r-vh p-inline-1 flex a-center j-center pointer">
                  All
                </li>
                <li className="hero-li secondary-bg r-vh p-inline-1 flex a-center j-center pointer">
                  Music
                </li>
                <li className="hero-li secondary-bg r-vh p-inline-1 flex a-center j-center pointer">
                  Podcasts
                </li>
              </ul>
            </div>
            <div className="frequent grid c-repeat-2 w-full mt-2 gap-05 p-inline-1">
              {
                latestArtists.map((latest, index) => (
                  <div key={index} className="frequent-items flex gap-05 a-center w-full r-5 white-clr bold-600 font-sm pointer">
                    <img src={latest.images[0] ? latest.images[0].url : 'https://th.bing.com/th/id/OIP.EBhnHQgf090zb-Do2di49AHaHa?rs=1&pid=ImgDetMain'} alt="" className='cover frequent-img r-4' />
                    <span>
                      {latest.name}
                    </span>
                  </div>
                ))
              }
            </div>

            {/* recondamation section  */}
            <Recomentation query='Dua Lipa' heading='For you' />
            <Recomentation query='hty' heading='For you' />
            <Recomentation query='Glo' heading='For you' />
            <Recomentation query='Olivia' heading='For you' />
            <Recomentation query='dabzee' heading='For you' />
            <Recomentation query='Dasha' heading='For you' />
            <Recomentation query='Saad Lamjaard' heading='For you' />
            <Recomentation query='Tyler Childers' heading='For you' />
          </div>
        )
      }
    </div>
  )
}

export default Hero
