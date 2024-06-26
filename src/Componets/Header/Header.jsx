import React from 'react'
import '../../cssHelper/helper.css'
import './Header.css'
import SearchEngine from '../SearchEngine/SearchEngine'
import SearchWrapper from '../SearchWrapper/SearchWrapper'

function Header() {
    return (
        <div className='Header white-clr flex a-center j-between p-inline-2'>
            <div className="header-left flex gap-1">
                <span class="material-symbols-rounded span-dot pointer">
                    more_horiz
                </span>
                <span className='flex arrow'>
                    <span class="material-symbols-rounded pointer">
                        arrow_back_ios
                    </span>
                    <span class="material-symbols-rounded pointer">
                        arrow_forward_ios
                    </span>
                </span>
            </div>
            <div className="header-mid flex h-full a-center">
                <div className="home r-50 flex j-center a-center height  width white-clr pointer">
                    <span class="material-symbols-rounded">
                        home
                    </span>
                </div>
                <SearchWrapper/>
            </div>
            <div className="header-right span flex gap-1 a-center">
                <span class="material-symbols-rounded pointer">
                    notifications
                </span>
                <span class="material-symbols-rounded pointer">
                    groups
                </span>
                <div className="account height width primary-clr r-50 flex a-center j-center pointer">
                    <div className="account-clr  r-50 flex j-center size-full a-center black-clr bold-600">
                        M
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
