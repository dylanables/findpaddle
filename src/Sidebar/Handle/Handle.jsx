import RangeSlider from "../../components/RangeSlider/RangeSlider"

const Handle = ({handle, handleRangeFilter}) => {
  const min = 4;
  const max = 7;
  const units = "in";
  const keyName = "handle";

  const marks = [
    {
      value: 4,
      label: '4 in',
    },
    {
      value: 7,
      label: '7 in',
    },
  ];

  return (
    <div className='filter'>
      Handle Length (in):
      <RangeSlider sel={handle} keyName={keyName} min={min} max={max} units={units} marks={marks} handleRangeFilter={handleRangeFilter} />
    </div>
  )
}

export default Handle