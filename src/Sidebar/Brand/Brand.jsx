import MultiSelect from "../../components/MultiSelect/MultiSelect";

const Brand = ({brand, handleSelectFilter}) => {
  const keyName = 'brand';
  const vals = [
    'JOOLA',
    'Selkirk',
    'Paddletek',
    'Vatic Pro',
    'VANGUARD',
    'CRBN',
    'ProKennex',
    'Engage',
    'Electrum',
    'Volair',
    'Gearbox',
    'Six Zero',
  ];

  return (
    <div>
      <select multiple onChange={(e) => handleSelectFilter(e, keyName)}>
        <option value="JOOLA">JOOLA</option>
        <option value="Selkirk">Selkirk</option>
        <option value="Paddletek">Paddletek</option>
      </select>

      <MultiSelect handleSelectFilter={handleSelectFilter} />
    </div>
  )
}

export default Brand