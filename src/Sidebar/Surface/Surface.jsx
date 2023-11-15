import MultiSelect from "../../components/MultiSelect/MultiSelect";

const Surface = ({surface, handleSelectFilter}) => {
  const keyName = 'surface';
  const vals = [
    { value: 'Carbon Fiber', label: 'Carbon Fiber' },
    { value: 'Graphite', label: 'Graphite' },
    { value: 'Fiberglass', label: 'Fiberglass' },
    { value: 'Composite', label: 'Composite' },
  ];

  let curr_surface_vals = []
  surface.map((item)=>{
    const surface_object = vals.find(o => o.value === item);
    curr_surface_vals.push(surface_object);
  });

  console.log('curr_surface_vals', curr_surface_vals);

  return (
    <div className='filter'>
      Surface:
      <MultiSelect keyName={keyName} sel={curr_surface_vals} vals={vals} handleSelectFilter={handleSelectFilter} />
    </div>
  )
}

export default Surface