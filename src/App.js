import { useContext, useEffect, useState } from 'react';
import './App.css';
import Footer from './Componets/Footer/Footer';
import Header from './Componets/Header/Header';
import Player from './Componets/Player/Player';
import Related from './Componets/Related/Related';
import SearchResults from './Componets/SearchResult/SearchResults';
import SearchWrapper from './Componets/SearchWrapper/SearchWrapper';
import Section from './Componets/Section/Section';
import Sidebar from './Componets/Sidebar/Sidebar';
import './cssHelper/helper.css'
import Hero from './Componets/Hero/Hero';
import BrowsResults from './Componets/BrowseResults/BrowseResults';
import { SearchContext, SearchProvider } from './context/SearchContext';
import SearchEngine from './Componets/SearchEngine/SearchEngine';
import { Spotify } from 'react-spotify-embed';
import Tracks from './Componets/Tracks/Tracks';

function App() {

  const [isSearch, setIsSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false)

  const backToHome = () => {
    setIsSearching(false)
    setIsSearch(false)
  }

  return (
    <div className="App">
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
          <div onClick={backToHome} className="home r-50 flex j-center a-center height  width white-clr pointer">
            <span class="material-symbols-rounded">
              home
            </span>
          </div>
          <div onClick={() => setIsSearch(true)} className='search-engine-wrapper'>
            <SearchProvider>
              <GetQuery setIsSearching={setIsSearching} />
            </SearchProvider>
          </div>
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
      <div className='Section flex'>
        <Sidebar />
        {
          !isSearching ? (
            isSearch ? <SearchResults /> : <Hero />
          ) : <BrowsResults searchQuery = {isSearching}/>
        }  
        <Related/>
      </div>
      <Footer />
    </div>
  );
}

function GetQuery({ setIsSearching }) {
  const { searchQuery } = useContext(SearchContext);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setIsSearching(searchQuery)
    }
  }, [searchQuery, setIsSearching]);

  return (
    <div>
      <SearchEngine />
    </div>
  );
}

export default App;
