import RangeSlider from "../../components/RangeSlider/RangeSlider"

const Core = ({core, handleRangeFilter}) => {
  const min = 10;
  const max = 20;
  const units = "mm";
  const keyName = "core";

  const marks = [
    {
      value: 10,
      label: '10 mm',
    },
    {
      value: 20,
      label: '20 mm',
    },
  ];

  return (
    <div className='filter'>
      Core Thickness (mm):
      <RangeSlider sel={core} keyName={keyName} min={min} max={max} units={units} marks={marks} handleRangeFilter={handleRangeFilter} />
    </div>
  )
}

export default Core