import RangeSlider from "../../components/RangeSlider/RangeSlider"

const Weight = ({weight, handleRangeFilter}) => {
  const min = 6;
  const max = 10;
  const units = "oz";
  const keyName = "weight";

  const marks = [
    {
      value: 6,
      label: '6 oz',
    },
    {
      value: 10,
      label: '10 oz',
    },
  ];

  return (
    <div className='filter'>
      Weight (oz):
      <RangeSlider sel={weight} keyName={keyName} min={min} max={max} units={units} marks={marks} handleRangeFilter={handleRangeFilter} />
    </div>
  )
}

export default Weight