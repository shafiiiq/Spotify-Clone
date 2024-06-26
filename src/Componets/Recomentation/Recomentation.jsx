import React, { useEffect, useState } from 'react'
import '../../cssHelper/helper.css'
import './Recomentation.css'
import { clientId, clientSecret, endPoint, tokenEndPoint } from '../../Constants/constant'

function Recomentation(props) {

    const [accessToken, setAccessToken] = useState('')
    const [artists, setArtists] = useState([

    ])

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
        async function search() {
            const artistParameters = {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
                }
            }

            fetch(`${endPoint}search?q=${props.query}&type=artist`, artistParameters)
                .then(result => result.json())
                .then(data => setArtists(data.artists.items))

        }
        search()
    }, [{}])


    function extractCounterItemsFromArtists(array, n) {
        return array.slice(0, n);
    }

    // Extract 4 items
    const limitedArtists = extractCounterItemsFromArtists(artists, 4);

    const print = () => {
        console.log(limitedArtists);
    }

    return (
        <div className='Recometation flex flex-col gap-1 white-clr mt-2 p-inline-1'>
            <div className="recomentation-head flex j-between a-center">
                <h1 onClick={print} className='recomention-heading bold-600'>
                    {props.heading}
                </h1>
                <span className="show-all bold-500 pointer">
                    Show all
                </span>
            </div>
            <div onClick={print} className="recomentation-body grid c-repeat-4 w-full">
                {
                    limitedArtists.map((artist, index) => (
                        <div key={index} className="recomendation-item flex flex-col gap-05 r-8 p-1 ease-4 pointer">
                            <img src={artist.images[0] ? artist.images[0].url : 'https://www.iwmbuzz.com/wp-content/uploads/2021/01/dua-lipa-is-the-hottest-singer-in-hollywood-these-pics-are-enough-to-prove-it-2.jpg'} alt={artist.name} className="recomendation-img w-full cover r-7" />
                            <span className="recommendation-item-heading font-sm bold-600">
                                {artist.name}
                            </span>
                            <p className="recommendation-description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing eli
                            </p>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Recomentation
