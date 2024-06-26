import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import '../../cssHelper/helper.css';
import './SearchEngine.css';

function SearchEngine() {
    const { setSearchQuery } = useContext(SearchContext);

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    };

    return (
        <div className="search relative r-vh height r-vh primary-clr pointer white-clr">
            <span className="material-symbols-rounded absolute abs-mid-y search-icon white-clr">
                search
            </span>
            <input
                type="text"
                className="size-full r-vh glass white-clr pl-3 font-sm"
                onChange={handleInputChange}
            />
            <span className="material-symbols-rounded absolute abs-mid-y browse-icon white-clr">
                ad_group
            </span>
        </div>
    );
}

export default SearchEngine;

