

const Card = ({ artist, name, image, keys }) => {
  return (
    <div key={keys} className="flex items-center my-2 ">
      <img className="w-16 h-16" src={image[0]} alt={image[1]} />
      <div className="flex-col ml-2">
        <div className="w-48">
          <h4 className="text-stone-700" >{name}</h4>
        </div>
        <span>{artist}</span>
      </div>
    </div>
  )
}

export default Card