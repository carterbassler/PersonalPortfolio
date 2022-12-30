import React from 'react'

type Props = {}

function Music({ }: Props) {
  const songs = [
    "https://open.spotify.com/embed/playlist/3vYRlhFbkQaJzsV4kXBFV0?utm_source=generator",
    "https://open.spotify.com/embed/playlist/1KMdY0TwmeGq0IpjX3b8rt?utm_source=generator",
    "https://open.spotify.com/embed/playlist/4Rn33gJNA0smMGwQQGsW1N?utm_source=generator",
    "https://open.spotify.com/embed/playlist/2M7WA9dZoICCTVDEKENYkC?utm_source=generator",
    "https://open.spotify.com/embed/playlist/2xME5qC97164mNg2p5PPI3?utm_source=generator",

  ];
  return (
    /* <div className="container">
    <input type="radio" name="slider" id="item-1" />
    <input type="radio" name="slider" id="item-2" />
    <input type="radio" name="slider" id="item-3" />
  <div className="cards">
    <label className="card" id="song-1">
      <img src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song" />
    </label>
    <label className="card" id="song-2">
      <img src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song" />
    </label>
    <label className="card" id="song-3">
      <img src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song" />
    </label>
    </div>
  </div> */
  <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase text-gray-500
        text-2xl'>
        My Music Picks
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
        snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#8f1d21]/80'>
        {songs.map((project, i) => (
          <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-center
                items-center justify-center p-20 md:py-44 md:px-60 h-screen'>
            <iframe
              src={project}
              width="100%"
              height="400"
              allow="autoplay; clipboard-write;" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Music