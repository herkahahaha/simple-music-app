

const InputSearch = ({ value, setValue }) => {
  return (
    <div className="md:col-start-2 col-span-1 my-14">
      <input className='form-input rounded border-stone-900 w-96' type="search" placeholder='search music, artist' value={value} onChange={setValue} />
    </div>
  )
}

export default InputSearch