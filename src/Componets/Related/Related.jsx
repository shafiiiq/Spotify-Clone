import React from 'react'
import '../../cssHelper/helper.css'
import './Related.css'

function Related() {
  return (
    <div className='Related r-10 primary-bg p-inline-1 pt-2 white-clr'>
      <div className="ralated-head flex j-between a-center">
        <p className="current-music-name-in-related bold-600 font-sm">
          Toxic
        </p>
        <span class="material-symbols-rounded span-dot pointer">
          more_horiz
        </span>
      </div>

      {/* related body  */}
      <div className="realated-body scroll-hidden mt-1 size-full">
        <div className="related-body-wrapper scroll-y scroll-hidden-x pb-1">
          {/* curent palying  */}
          <div className="current-playing-in-realated flex flex-col gap-05">
            <img src="https://th.bing.com/th/id/OIP.H7rMZ-j8uPW6BaayuAZZmgHaG8?rs=1&pid=ImgDetMain" alt="" className='cover r-10' />
            <div className="flex j-between mt-1">
              <div className="related-music-name flex flex-col">
                <p className="font-md bold-600">
                  Look What You Made
                </p>
                <p>
                  Taylor Swift
                </p>
              </div>
              <span class="material-symbols-rounded">
                add_circle
              </span>
            </div>
          </div>
          {/* end of curent playing */}
          <div className="about-the-artist-in-ralated flex flex-col mt-1 gap-1 r-10 pb-1">
            <img src="https://images-na.ssl-images-amazon.com/images/I/718N-kN%2BmnL._AC_SL1200_.jpg" alt="" className='cover artist-img-in-related r-10 w-full' />
            <p className="font-sm pl-1">
              Camila Cabelo
            </p>
            <div className="flex j-between pl-1">
              <div className="flex flex-col">
                <p>
                  344M
                </p>
                <p>
                  monthly listeners
                </p>
              </div>
              <button>
                Follow
              </button>
            </div>
            <div className="artist-decription pl-1">
              <p>Produces, Dj and songwirter Calvin Harrist stands as the figurehead for modenrn dance</p>
            </div>
          </div>

          {/* credits  */}
          <div className="creadits flex flex-col mt-2 p-1 r-10">
            <div className="credit-head flex j-between">
              <p className="bold-600">
                Credits
              </p>
              <p>
                Show all
              </p>
            </div>
            <div className="credits-body mt-1 flex flex-col gap-1">
              {/* item 1  */}
              <div className="credits-item flex j-between a-center">
                <div className="creadits-left flex flex-col">
                  <p className="bold-600">
                    Calvin Harris
                  </p>
                  <p>
                    Main Artist
                  </p>
                  <p>
                    Producer
                  </p>
                </div>
                <button>
                  Follow
                </button>
              </div>

              {/* item 2 */}
              <div className="credits-item flex j-between a-center">
                <div className="creadits-left flex flex-col">
                  <p className="bold-600">
                    Calvin Harris
                  </p>
                  <p>
                    Main Artist
                  </p>
                  <p>
                    Producer
                  </p>
                </div>
                <button>
                  Follow
                </button>
              </div>

            </div>
          </div>
          <div className="next-in-queue flex flex-col r-10 mt-2 p-1 gap-1 pb-1">
            <div className="queue-head flex j-between">
              <p>
                Next in queue
              </p>
              <p>
                Open queue
              </p>
            </div>
            <div className="queue-body flex j-between a-center">
              <span class="material-symbols-rounded">
                music_note
              </span>
              <img src="https://th.bing.com/th/id/OIP.h93TryFnGgXkC42xa7qVFQHaDt?rs=1&pid=ImgDetMain" alt="" className='queue-music-img cover r-4' />
              <div className="flex flex-col">
                <p className="bold-500">
                  I like it
                </p>
                <p>
                  Cardi B, Bad Bunny
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Related
