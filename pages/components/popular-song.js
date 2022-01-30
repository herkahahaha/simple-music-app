import Card from "./ui/card"

const SongCard = (tracks) => {
  const { name, playcount, artist, image, } = tracks.tracks
  const smallImg = Object.values(image[0])
  return (
    <>
      <Card keys={playcount} image={smallImg} name={name} artist={artist.name} />
    </>

  )
}

export default SongCard