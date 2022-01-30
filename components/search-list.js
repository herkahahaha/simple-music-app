import Card from "./ui/card"

const SearchList = (data) => {
  const { name, playcount, image, } = data.data
  const smallImg = Object.values(image[0])
  return (
    <div className="">
      <Card keys={playcount} image={smallImg} name={name} />
    </div>
  )
}
export default SearchList