import Nav from '../Navigation/Nav';
import '../index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import Button from '@mui/material/Button';
import PaddlePage from '../components/PaddleCard/PaddlePage';


function App() {

  const location = useLocation();
  const paddleId = location.pathname.split("/")[2];

  console.log(paddleId)

  const[paddle, setPaddle] = useState({});

  useEffect(()=>{
    const getPaddle = async ()=>{
      try {
        const res = await publicRequest.get("/paddle/find/"+paddleId);
        setPaddle(res.data);
        console.log(res.data)
      } catch(err) {
        console.log(err);
      }
    };
    getPaddle();
  }, [paddleId]);

 

  return (
    <>
      <Nav />
      <PaddlePage 
        id={paddle._id} //change
        img={paddle.img}
        title={paddle.title}
        brand={paddle.brand}
        color={paddle.color}
        surface={paddle.surface}
        coreThickness={paddle.coreThickness}
        handleLength={paddle.handleLength}
        paddleWeight={paddle.paddleWeight}
        paddleShape={paddle.paddleShape}
        playStyle={paddle.playStyle}
        bestPrice={paddle.bestPrice}
        aff_links={paddle.aff_links}
      />
    </>
  );
}

export default App
