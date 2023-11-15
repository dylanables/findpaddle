import Select from 'react-select';

function MultiSelect({keyName, sel, vals, handleSelectFilter}) {

  const placeholder = "Select " + keyName + "(s)..." 
  
  return(
  <Select
    value={sel}
    isMulti
    name={keyName}
    options={vals}
    className="basic-multi-select"
    classNamePrefix="select"
    placeholder={placeholder}
    onChange={(e) => handleSelectFilter(e, keyName)}
  />
  )
}

export default MultiSelect