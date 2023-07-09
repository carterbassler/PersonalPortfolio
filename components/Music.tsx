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
    <div className='flex items-center w-full h-screen'>
      <div className='flex flex-col text-left md:flex-col
max-w-full mx-auto items-center scrollbar-thin'>
        <h3 className='top-24 uppercase text-gray-500
text-2xl'>
          Playlist Picks
        </h3>
        <div className='flex flex-col overflow-hidden mx-auto max-w-full'>
          <div className='flex overflow-x-scroll snap-x
snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#8f1d21]/80'>
            {songs.map((project, i) => (
              <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-center
                items-center justify-center p-20 md:py-20 md:px-60'>
                <iframe
                  src={project}
                  width="100%"
                  height="400"
                  allow="autoplay; clipboard-write;" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music