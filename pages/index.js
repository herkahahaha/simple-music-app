import React from 'react'
import SongCard from '../components/popular-song'
import ArtistCard from '../components/top_artist'
import InputSearch from '../components/ui/input-search'
import SearchList from '../components/search-list'
import { getTracks, getArtist } from '../lib/fetcher'
import axios from 'axios'

function Home({
  dataTracks,
  dataArtist,
}) {

  const [inputValue, setInputValue] = React.useState('')
  const [artistSearch, setArtistSearch] = React.useState([])
  const [trackSearch, setTrackSearch] = React.useState([])

  React.useEffect(() => {

    getSearchArtist(inputValue)
    getSearchTracks(inputValue)
  }, [inputValue])

  const getSearchArtist = async (params) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_ASK_URL}?method=artist.search&artist=${params}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&format=json&limit=5`)
      const result = await res.data.results.artistmatches
      const data = await result.artist
      setArtistSearch(data)
    } catch (error) {
      console.error("cant fetch the search artist data")
    }
  }

  const getSearchTracks = async (params) => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_ASK_URL}?method=track.search&track=${params}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&format=json&limit=5`)
      const result = await res.data.results.trackmatches
      const data = await result.track
      setTrackSearch(data)
    } catch (error) {
      console.error("cant fetch the search track data")
    }
  }

  const PopularSong = dataTracks.track
  const TopArtist = dataArtist.artist

  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-4 my-24' >

        {/* Popular song */}
        <div className='md:col-span-2'>
          <h2 className='text-stone-900'>Popular Songs</h2>
          <div className="grid grid-cols-2 md:grid-rows-5 md:grid-flow-col gap-2 mt-8">
            {PopularSong.map(val => <SongCard tracks={val} />)}
          </div>
        </div>

        {/* Artist List */}
        <div className=''>
          <h3 className='text-stone-900'>Top Artist</h3>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-1">
            {TopArtist.map(val => <ArtistCard data={val} />)}
          </div>
        </div>
      </section>

      {/* search music */}
      <section>
        <h2>Search Music and Artist</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <InputSearch value={inputValue} setValue={(e) => setInputValue(e.target.value.toLowerCase())} />
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* track */}
          <div className="md:col-start-2">
            <h3 className={inputValue !== "" ? 'block' : `hidden`}>Tracks</h3>
            {trackSearch.length > 0 && inputValue !== "" ? trackSearch.map(val => {
              return (
                <div className="">
                  <SearchList data={val} />
                </div>
              )
            })
              : <div className='w-40 h-32 my-5'>
                <iframe src="https://giphy.com/embed/BEob5qwFkSJ7G" width="auto" height="auto" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div>}

          </div>

          {/* artist */}
          <div className="">
            <h3 className={inputValue !== "" ? 'block' : `hidden`}>Artist</h3>
            {artistSearch.length > 0 && inputValue !== "" ? artistSearch.map(val => {
              return (
                <div className="">
                  <SearchList data={val} />
                </div>
              )
            }
            ) : <p className='hidden'>kosong</p>}
          </div>

        </div>

      </section>

    </>
  )
}
export default Home

export async function getStaticProps() {

  const dataTracks = await getTracks()
  const dataArtist = await getArtist()

  return {
    props: {
      dataTracks,
      dataArtist
    }
  }
}