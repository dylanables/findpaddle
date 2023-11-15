const Surface = ({surface, handleSelectFilter}) => {
  const keyName = "surface";
  const vals = [
    'Carbon Fiber',
    'Graphite',
    'Fiberglass',
    'Composite',
  ];

  return (
    <div>
      <select multiple onChange={(e) => handleSelectFilter(e, keyName)}>
        <option value="Carbon Fiber">Carbon Fiber</option>
        <option value="Graphite">Graphite</option>
        <option value="Fiberglass">Fiberglass</option>
        <option value="Composite">Composite</option>
      </select>
    </div>
  )
}

export default Surface