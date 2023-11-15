import RangeSlider from "../../components/RangeSlider/RangeSlider"

const Core = ({core, handleRangeFilter}) => {
  const min = 10;
  const max = 20;
  const units = "mm";
  const keyName = "core";

  return (
    <div>
      Core Thickness:
      <RangeSlider sel={core} keyName={keyName} min={min} max={max} units={units} handleRangeFilter={handleRangeFilter} />
    </div>
  )
}

export default Core