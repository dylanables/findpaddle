import './PaddleCard.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from "react-router-dom";
import { addLike, removeLike } from '../../redux/likedRedux';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { grey, red } from '@mui/material/colors';


function PaddleCard({id, img, title, brand, color, surface, coreThickness, handleLength, paddleWeight, paddleShape, aff_links, playStyle, bestPrice}) {
  const affs = [];
  aff_links.map((aff) => {
    affs.push(
      <a href={aff.link} target="_blank" rel="noreferrer" className='links'>
        <Button variant="contained" endIcon={<OpenInNewIcon />}>
          Buy @ {aff.retailer}
        </Button>
        <br/><br/>
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
      <div className='card-sec'>
        <Link to={`/paddle/${id}`}><img src={img} className='card-image' alt={title} /></Link>
      </div>

      <div className='card-sec card-info'>
        <div className='card-title'>
          <h3 className='like-icon'>
            <Link to={`/paddle/${id}`}>
              {title}
            </Link>
            <span className='heart-icon'>
              <FavoriteIcon sx={{ color: isLiked ? red[500] : grey[400]}} onClick={()=>handleLike()} />
            </span>
          </h3>
        </div>
        <div className='details'>
          <p><b>Surface:</b> {surface}</p>
          <p><b>Weight:</b> {weightText}</p>
          <p><b>Core Thickness:</b> {coreThicknessText}</p>
          <p><b>Handle Length:</b> {handleLength} in</p>
        </div>
      </div>
      <div className='card-sec card-links'>
          {affs}
      </div>
      
    </section>
  );
}

export default PaddleCard