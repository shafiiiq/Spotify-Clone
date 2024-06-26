import React, { useEffect, useState } from 'react'
import '../../cssHelper/helper.css'
import './BrowseResults.css'
import { clientId, clientSecret, endPoint, tokenEndPoint } from '../../Constants/constant'

function BrowsResults(props) {

  // console.log(props.searchQuery);

  const [accessToken, setAccessToken] = useState('')
  const [searchResultSongs, setSearchResultSongs] = useState([])

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
    async function searchEngine() {
      const artistParameters = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken,
        }
      }

      fetch(`${endPoint}search?q=${props.searchQuery}&type=audiobook`, artistParameters)
        .then(result => result.json())
        .then(data => setSearchResultSongs(data.audiobooks.items))
        .catch(err => console.log(err))

    }
    searchEngine()
  }, [{}])

  // console.log(searchResultSongs);

  function extractTopRsults(array, n) {
    return array.slice(0, n);
  }

  // Extract 4 items
  const topResult = extractTopRsults(searchResultSongs, 1);
  // console.log(topResult);


  return (
    <div className='BrowseResults primary-bg r-10 scroll-hidden pl-1 pt-2 white-clr'>
      <div className="browse-results-scroll-wrapper w-full scroll-x scroll-y-hidden pr-1">
        <div className="flex flex-col">
          <ul className='flex gap-05'>
            <li className="browse-results-li secondary-bg p-inline-1 r-vh white-clr bold-600 flex a-center pointer">
              All
            </li>
            <li className="browse-results-li secondary-bg p-inline-1 r-vh white-clr bold-600 flex a-center pointer">
              Playlists
            </li>
            <li className="browse-results-li secondary-bg p-inline-1 r-vh white-clr bold-600 flex a-center pointer">
              Artists
            </li>
            <li className="browse-results-li secondary-bg p-inline-1 r-vh white-clr bold-600 flex a-center pointer">
              Songs
            </li>
            <li className="browse-results-li secondary-bg p-inline-1 r-vh white-clr bold-600 flex a-center pointer">
              Albums
            </li>
            <li className="browse-results-li secondary-bg p-inline-1 r-vh white-clr bold-600 flex a-center pointer">
              Profiles
            </li>
            <li className="browse-results-li secondary-bg p-inline-1 r-vh white-clr bold-600 flex a-center pointer">
              Podcasts & shows
            </li>
          </ul>
          {/* top results  */}
          {
            topResult.map((top) => (
              <div className="top-result flex flex-col mt-2">
                <p className="font-md bold-600">
                  Top results
                </p>
                <div className="top-result-body w-half p-1 mt-1 pointer ease-4 r-10 flex flex-col">
                  <img src={top.images ? top.images[0].url : ''} alt="" className='cover r-8 top-result-img' />
                  <p className="font-xl bold-600 mt-1 top-title">
                    {top.name} 
                  </p>
                  <span className='flex'>
                    <span>
                      Playlist. <span>Dabz.stroies</span>
                    </span>
                  </span>
                </div>
              </div>
            ))
          }
          {/* songs  */}
          <div className="seached-songs mt-2 flex flex-col">
            <p className="font-md bold-600 pl-1">
              Songs
            </p>
            <div className="all-related-songs mt-1">
              {/* item start  */}
              {
                searchResultSongs.map((songs, index) => (
                  <div className="songs-item flex j-between a-center p-inline-1 r-10 pointer">
                    <div className="song-img-and-name flex gap-1">
                      <img src={songs.images ? songs.images[0].url : ''} alt="" className='cover song-img r-7' />
                      <div className="flex flex-col">
                        <p className='bold-500'>
                          {songs.name}
                        </p>
                        <p className='song-decription'>
                          {songs.authors[0].name}
                        </p>
                      </div>
                    </div>
                    <div className="song-duration-of-searched font-sm">
                      4:21
                    </div>
                  </div>
                ))
              }
              {/* items end  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowsResults
