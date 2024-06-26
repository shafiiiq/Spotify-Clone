import React from 'react'
import '../../cssHelper/helper.css'
import './Sidebar.css'
import Library from '../Library/Library'
import Artist from '../Artist/Artist'

function Sidebar() {
    return (
        <div className='Sidebar primary-bg r-10 p-1 white-clr flex flex-col'>
            <div className="sidebar-head flex j-between a-center mt-1">
                <div className="div flex gap-1 span">
                    <span class="material-symbols-rounded">
                        library_books
                    </span>
                    <p className='bold-600'>
                        Your Library
                    </p>
                </div>
                <div className='span flex gap-1'>
                    <span class="material-symbols-rounded pointer">
                        add
                    </span>
                    <span class="material-symbols-rounded pointer">
                        arrow_forward
                    </span>
                </div>
            </div>
            <div className="sidebar-nav flex mt-2">
                <div className="playlists secondary-bg r-vh flex a-center j-center bold-600 p-inline-1 pointer">
                    Playlists
                </div>
                <div className="playlists secondary-bg r-vh flex a-center j-center bold-600 p-inline-1 pointer">
                    Artists
                </div>
            </div>
            <div className="search-recent flex j-between a-center mt-1 span pointer">
                <span class="material-symbols-rounded">
                    search
                </span>
                <div className='font-sm flex a-center pointer'>
                    Recents
                    <span class="material-symbols-rounded">
                        menu_open
                    </span>
                </div>
            </div>
            <div className="library-wrapper scroll-hidden mt-2">
                <div className="library scroll-y scroll-hidden-x flex flex-col">
                    <Library />
                    <Artist />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
