import React, { useEffect, useState } from 'react'
import '../../cssHelper/helper.css'
import './Categories.css'
import { clientId, clientSecret, endPoint, tokenEndPoint } from '../../Constants/constant'

function Categories(props) {
    const [accessToken, setAccessToken] = useState('')
    const [categories, setCategories] = useState([])
    const [colors, setColors] = useState([])

    useEffect(() => {
        var colorArray = new Array()
        for (var i = 0; i < categories.length; i++) {
            const color = getRandomColor()
            colorArray[i] = color
        }
        setColors(colorArray)
    }, [])

    // console.log(colors);

    function getRandomColor() {
        const hue = Math.floor(Math.random() * 360); // Random hue between 0 and 360
        const saturation = Math.floor(Math.random() * 31) + 45; // Moderate saturation between 45% and 75%
        const lightness = Math.floor(Math.random() * 31) + 45; // Moderate lightness between 45% and 75%
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

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
        async function searchCategories() {
            const artistParameters = {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken,
                }
            }

            fetch(`${endPoint}browse/categories`, artistParameters)
                .then(result => result.json())
                .then(data => setCategories(data.categories.items))
                .catch(err => console.log(err))

        }
        searchCategories()
    }, [{}])

    return (
        <div className='Categories grid c-repeat-3 gap-1 mt-2 w-full pr-1 pb-1'>
            {
                categories.map((category, index) => (
                    <div className='categories-item r-10 scroll-hidden relative white-clr pointer' style={{backgroundColor: colors[index]}}>
                        <div className="categories-title mt-1 ml-1 font-md bold-600">
                            {category.name}
                        </div>
                        <img src={category.icons ? category.icons[0].url : ''} alt="" className="absolute r-6 categories-img cover z-1" />
                    </div>
                ))
            }
        </div>
    )
}

export default Categories
