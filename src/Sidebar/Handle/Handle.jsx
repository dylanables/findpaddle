import RangeSlider from "../../components/RangeSlider/RangeSlider"

const Handle = ({handle, handleRangeFilter}) => {
  const min = 4;
  const max = 7;
  const units = "in";
  const keyName = "handle";

  return (
    <div>
      Handle Length:
      <RangeSlider sel={handle} keyName={keyName} min={min} max={max} units={units} handleRangeFilter={handleRangeFilter} />
    </div>
  )
}

export default Handle