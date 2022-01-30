import Card from "./ui/card"

const ArtistCard = (data) => {
  const { name, listeners, image } = data.data
  const coverImg = Object.values(image[0])
  return (
    <div className="ml-4">
      <Card keys={listeners} image={coverImg} name={name} artist={`Listener: ${listeners}`} />
    </div>
  )
}

export default ArtistCard