import './PaddlePage.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Container } from '@mui/material';
import { addLike, removeLike } from '../../redux/likedRedux';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { grey, red } from '@mui/material/colors';


function PaddlePage({id, img, title, brand, color, surface, coreThickness, handleLength, paddleWeight, paddleShape, aff_links, playStyle, bestPrice}) {
  const likes = (useSelector(state=>state.liked));

  const [isLiked, setIsLiked] = useState(likes.paddles.find((like) => like.id === id));

  console.log("id",id);
  console.log("likes",likes);
  console.log("equal",id===likes.paddles[0].id);
  console.log("isLiked",isLiked);

  useEffect(()=>{
    const liked = likes.paddles.find((like) => like.id === id);
    setIsLiked(liked);
  }, [likes, id]);

  const dispatch = useDispatch();

  const affs = [];
  aff_links?.map((aff) => {
    affs.push(
      <a href={aff.link} target="_blank" rel="noreferrer">
        <Button variant="contained" endIcon={<OpenInNewIcon />}>
          Buy @ {aff.retailer}
        </Button>
      </a>
    );
  });
  
  let coreThicknessText = ""
  for (let i = 0; i < coreThickness?.length; i++) {
    coreThicknessText = coreThicknessText.concat(coreThickness[i] + "mm ");
  }

  let weightText = ""
  for (let i = 0; i < paddleWeight?.length; i++) {
    weightText = weightText.concat(paddleWeight[i] + "oz ");
  }

  const handleLike = ()=>{
    if (isLiked) {
      dispatch(removeLike({id, title, img}));
      setIsLiked((prevState) => !prevState);
    } else {
      dispatch(addLike({id, title, img}));
      setIsLiked((prevState) => !prevState);
    }
  }
  
  return (
  <Container>
    <section className='page'>
      <h2 className='page-title'>
        {title}
      </h2>
      <div className='page-heart-icon'>
        <FavoriteIcon sx={{ color: isLiked ? red[500] : grey[400]}} onClick={()=>handleLike()} />
      </div>
      <img src={img} className='page-image' alt={title} />
      <section className='page-info'>
          <p>Surface: {surface}</p>
          <p>Weight: {weightText}</p>
          <p>Core Thickness: {coreThicknessText}</p>
          <p>Handle Length: {handleLength} in</p>
          <p>Play Style: {playStyle} (to remove)</p>
          <p>Price: {bestPrice} (to remove)</p>
          <p>Shape: {paddleShape} (to remove)</p>
      </section>
      <section className='page-links'>
        {affs}
      </section>
    </section>
  </Container>
  );
}

export default PaddlePage