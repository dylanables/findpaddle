import Buttons from "../../components/Buttons/Buttons"

const Shape = ({shape, handleButtonFilter}) => {
  return (
    <div className='filter'>
      Shape:
      <Buttons sel={shape} handleButtonFilter={handleButtonFilter} />
    </div>
  )
}

export default Shape