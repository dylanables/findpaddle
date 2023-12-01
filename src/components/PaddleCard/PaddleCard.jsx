import './PaddleCard.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from "react-router-dom";
import { addLike, removeLike } from '../../redux/LikedRedux';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { grey, red } from '@mui/material/colors';


function PaddleCard({id, img, title, brand, color, surface, coreThickness, handleLength, paddleWeight, paddleShape, aff_links, playStyle, bestPrice}) {
  const affs = [];
  aff_links.map((aff) => {
    affs.push(
      <a href={aff.link} target="_blank" rel="noreferrer">
        <Button variant="contained" endIcon={<OpenInNewIcon />}>
          Buy @ {aff.retailer}
        </Button>
      </a>
    );
  });

  let coreThicknessText = ""
  for (let i = 0; i < coreThickness.length; i++) {
    coreThicknessText = coreThicknessText.concat(coreThickness[i] + "mm ");
  }

  let weightText = ""
  for (let i = 0; i < paddleWeight.length; i++) {
    weightText = weightText.concat(paddleWeight[i] + "oz ");
  }

  const likes = (useSelector(state=>state.liked));

  const [isLiked, setIsLiked] = useState(likes.paddles.find((like) => like.id === id));

  useEffect(()=>{
    const liked = likes.paddles.find((like) => like.id === id);
    setIsLiked(liked);
  }, [likes]);
  
  const dispatch = useDispatch();

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
    <section className='card'>
      <Link to={`/paddle/${id}`}><img src={img} className='card-image' alt={title} /></Link>
      <section className='card-info'>
        <Link to={`/paddle/${id}`}>
          <h3 className='card-title'>
            {title}
          </h3>
        </Link>
        <p>Surface: {surface}</p>
        <p>Weight: {weightText}</p>
        <p>Core Thickness: {coreThicknessText}</p>
        <p>Handle Length: {handleLength} in</p>
        <p>Play Style: {playStyle} (to remove)</p>
        <p>Price: {bestPrice} (to remove)</p>
        <p>Shape: {paddleShape} (to remove)</p>
      </section>
      <div className='heart-icon'>
        <FavoriteIcon sx={{ color: isLiked ? red[500] : grey[400]}} onClick={()=>handleLike()} />
      </div>
      <section className='links'>
        {affs}
      </section>
    </section>
  );
}

export default PaddleCard