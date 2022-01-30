import axios from 'axios'

let BASE_URL = `${process.env.NEXT_PUBLIC_ASK_URL}`
let API_KEY = `${process.env.NEXT_PUBLIC_API_KEY}`

// popular tracks
export async function getTracks() {
  try {
    const res = await axios.get(`${BASE_URL}?method=chart.gettoptracks&api_key=${API_KEY}&format=json&limit=15`)
    const data = await res.data.tracks
    return data
  } catch (error) {
    console.error("cant fetch the tracks data")
  }
}

// top artist
export async function getArtist() {
  try {
    const res = await axios.get(`${BASE_URL}?method=chart.gettopartists&api_key=${API_KEY}&format=json&limit=10`)
    const data = await res.data.artists
    return data
  } catch (error) {
    console.error("cant fetch the artist data")
  }
}

// search artist
// export const getSearchArtist = async (params) => {
//   try {
//     const res = await axios.get(`${BASE_URL}?method=artist.search&artist=${params}&api_key=${API_KEY}&format=json&limit=10`)
//     const result = await res.data.results.artistmatches
//     const data = await result.artist
//     return data
//   } catch (error) {
//     console.error("cant fetch the search artist data")
//   }
// }

// search track
// export const getSearchTracks = async (params) => {
//   try {
//     const res = await axios.get(`${BASE_URL}?method=track.search&track=${params}&api_key=${API_KEY}&format=json&limit=5`)
//     const result = await res.data.results.trackmatches
//     const data = await result.track
//     return data
//   } catch (error) {
//     console.error("cant fetch the search track data")
//   }
// }