import React from 'react'
import '../../cssHelper/helper.css'
import './Footer.css'
import Player from '../Player/Player'

function Footer() {
    return (
        <div className='Footer flex j-between'>
            <div className="current-music flex gap-1 p-block-1 pl-1 a-center white-clr">
                {/* <img src="https://www.bing.com/images/search?view=detailV2&ccid=4KKUO%2fBY&id=834118927FBC91A47AD08B04827EE09F7648DDC2&thid=OIP.4KKUO_BYUHnhm-G5lpZwVwHaEK&mediaurl=https%3a%2f%2f3.bp.blogspot.com%2f-plHcpzbG7w0%2fWlJb8wdVQcI%2fAAAAAAAADgE%2f76dSzRL0bwMHlDsh3g76XNtmBl98V52SACLcBGAs%2fs1600%2fHavana.png&exph=720&expw=1280&q=havana+song&simid=608016968725561872&FORM=IRPRST&ck=60C3D92BDA5F7791E26BEA77B7006C3B&selectedIndex=0&itb=0" alt="" className='current-music-img cover r-5 pointer' /> */}
                <div className="current-music-details flex flex-col">
                    <p className="bold-600 pointer">
                        Havana(feat. Young Thug)
                    </p>
                    <span className='pointer'>
                        Camila Cabello, Young Thug
                    </span>
                </div>
            </div>
            <Player />

            <div className="controls flex a-center gap-1 white-clr span pr-1">
                <span class="material-symbols-rounded pointer">
                    play_arrow
                </span>
                <span class="material-symbols-rounded pointer">
                    mic
                </span>
                <span class="material-symbols-rounded pointer">
                    queue_music
                </span>
                <span class="material-symbols-rounded pointer">
                    link
                </span>
                <span class="material-symbols-rounded pointer">
                    volume_up
                </span>
                <div className="volume-up-down r-vh pointer">

                </div>
            </div>
        </div>
    )
}

export default Footer
