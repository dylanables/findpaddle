import Nav from '../Navigation/Nav';
import Products from '../Products/Products';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import '../index.css';
import { useState, useEffect } from 'react';
//import paddles from '../db/data';
import PaddleCard from '../components/PaddleCard/PaddleCard';
import axios from 'axios';


function Likes() {

  const[brand, setBrand] = useState([]);
  const[shape, setShape] = useState("");
  const[surface, setSurface] = useState([]);
  const[core, setCore] = useState([10,20]);
  const[weight, setWeight] = useState([6,10]);
  const[handle, setHandle] = useState([4,7]);
  const[color, setColor] = useState([]);
  const[price, setPrice] = useState([0,1000]);

  const[paddles, setPaddles] = useState([]);

  useEffect(()=>{
    const getPaddles = async ()=>{
      try {
        const res = await axios.get("https://findpaddle-api.onrender.com/api/paddle");
        setPaddles(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getPaddles();
  }, []);

  function clear() {
    setBrand([]);
    setShape([]);
    setSurface([]);
    setCore([10,20]);
    setWeight([6,10]);
    setHandle([4,7]);
    setColor([]);
    setPrice([0,1000]);
  };

  const handleSelectFilter = (event, keyName) => {
    //for react-select
    let values = [];
    event.map((item)=>{
      values.push(item.value);
    });

    console.log(values)


    //for vanilla html <select>
    //const values = Array.from(event.target.selectedOptions, option => option.value);
    // Or this way
    //const values = [...event.target.selectedOptions].map(opt => opt.value)

    if (keyName === 'brand'){
      setBrand(values);
    } else if (keyName === 'shape') {
      setShape(values);
    } else if (keyName === 'surface') {
      setSurface(values);
    } else {
      console.log("error");
    }
    

  };

  const handleRangeFilter = (event, keyName, newValue) => {

    console.log("event", event);
    console.log("keyName", keyName);
    console.log("newValue", newValue);

    if (keyName === 'core'){
      setCore(newValue);
    } else if (keyName === 'weight') {
      setWeight(newValue);
    } else if (keyName === 'handle') {
      setHandle(newValue);
    } else {
      console.log("error");
    }
  };

  const handleButtonFilter = (shapeClicked) => {
    console.log('shapeClicked',shapeClicked)
    setShape(shapeClicked);
  };

  console.log('brand', brand)
  console.log('shape', shape)
  console.log('surface', surface)
  console.log('core', core)
  console.log('weight', weight)
  console.log('handle', handle)


  function filterList(paddles, brand,shape,surface) {
    let filteredPaddles = [];
    paddles.map((a,e)=>(
      filteredPaddles.push(a)
    ));

    console.log("filteredPaddles", filteredPaddles);

    filteredPaddles = filteredPaddles.filter(
      (paddle) =>
      (brand.length < 1 || brand.includes(paddle.brand) || paddle.brand.includes(brand)) &&
      (shape.length < 1 || shape.includes(paddle.paddleShape) || paddle.paddleShape.includes(shape)) &&
      (surface.length < 1 || surface.includes(paddle.surface) || (paddle.surface).includes(surface)) && 
      (parseFloat(paddle.coreThickness) >= core[0] && parseFloat(paddle.coreThickness) <= core[1]) &&
      (parseFloat(paddle.paddleWeight) >= weight[0] && parseFloat(paddle.paddleWeight) <= weight[1]) &&
      (parseFloat(paddle.handleLength) >= handle[0] && parseFloat(paddle.handleLength) <= handle[1])
    );



    return filteredPaddles.map(({_id, title, img, brand, color, surface, coreThickness, handleLength, paddleWeight, paddleShape, playStyle, bestPrice, aff_links}) => (
      <PaddleCard 
        id={_id}
        img={img}
        title={title}
        brand={brand}
        color={color}
        surface={surface}
        coreThickness={coreThickness}
        handleLength={handleLength}
        paddleWeight={paddleWeight}
        paddleShape={paddleShape}
        playStyle={playStyle}
        bestPrice={bestPrice}
        aff_links={aff_links}
      />
    ));
    
  }

  const results = filterList(paddles, brand,shape,surface);
  console.log("results", results);

  const tool = "search";

  return (
    <>
      <Nav />
      <Sidebar 
        brand={brand} 
        shape={shape} 
        surface={surface} 
        core={core} 
        weight={weight} 
        handle={handle} 
        handleSelectFilter={handleSelectFilter} 
        handleRangeFilter={handleRangeFilter} 
        handleButtonFilter={handleButtonFilter}
        clear={clear}
      />
      <Products results={results} tool={tool} />
      <Footer sidebar={''} />
    </>
  );
}

export default Likes
