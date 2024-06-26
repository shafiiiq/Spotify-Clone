import React from 'react'
import '../../cssHelper/helper.css'
import './SearchResults.css'
import Categories from '../Categories/Categories'

function SerachResults() {
    return (
        <div className='SearchResults primary-bg r-10 scroll-hidden pl-1'>
            <div className="search-results-scroll-wrapper w-full scroll-x scroll-y-hidden">
                <Categories bgClr="rgb(122, 15, 97)" />
            </div>
        </div>
    )
}

export default SerachResults
