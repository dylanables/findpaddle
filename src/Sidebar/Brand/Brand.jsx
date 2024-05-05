import MultiSelect from "../../components/MultiSelect/MultiSelect";
import { useEffect, useState } from "react";
import axios from "axios";

const Brand = ({brand, handleSelectFilter}) => {
  const keyName = 'brand';
  
  const [brands, setBrands] = useState([]);

  let vals = [];

  useEffect(()=>{
    const getBrands = async ()=>{
      try {
        const res = await axios.get("http://localhost:10000/api/paddle/brands");
        setBrands(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getBrands();
  }, []);

  /*
  const vals = [
    { value: 'JOOLA', label: 'JOOLA' },
    { value: 'Selkirk', label: 'Selkirk' },
    { value: 'Paddletek', label: 'Paddletek' },
    { value: 'Vatic Pro', label: 'Vatic Pro' },
    { value: 'CRBN', label: 'CRBN' },
    { value: 'ProKennex', label: 'ProKennex' },
    { value: 'Engage', label: 'Engage' },
    { value: 'Electrum', label: 'Electrum' },
    { value: 'Volair', label: 'Volair' },
    { value: 'Gearbox', label: 'Gearbox' },
    { value: 'Six Zero', label: 'Six Zero' },
    { value: 'Neonic', label: 'Neonic' },
  ];
  */

  brands?.map((item) => {
    vals.push({ value: item, label: item});
  });

  console.log("BRAND VALS", vals);

  let curr_brand_vals = []
  brand.map((item)=>{
    const brand_object = vals.find(o => o.value === item);
    curr_brand_vals.push(brand_object);
  });

  console.log('curr_brand_vals', curr_brand_vals);

  return (
    <div className='filter'>
      Brand:
      <MultiSelect keyName={keyName} sel={curr_brand_vals} vals={vals} handleSelectFilter={handleSelectFilter} />
    </div>
  )
}

export default Brand