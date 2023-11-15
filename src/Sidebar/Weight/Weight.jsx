import RangeSlider from "../../components/RangeSlider/RangeSlider"

const Weight = ({weight, handleRangeFilter}) => {
  const min = 6;
  const max = 10;
  const units = "oz";
  const keyName = "weight";

  return (
    <div>
      Weight:
      <RangeSlider sel={weight} keyName={keyName} min={min} max={max} units={units} handleRangeFilter={handleRangeFilter} />
    </div>
  )
}

export default Weight