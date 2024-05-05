import './PaddleComparison.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from "react-router-dom";
import { addLike, removeLike } from '../../redux/likedRedux';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { grey, red } from '@mui/material/colors';

function PaddleComparison({id, img, title, slug, brand, color, surface, coreThickness, handleLength, paddleWeight, paddleShape, aff_links, playStyle, bestPrice}) {
  const likes = (useSelector(state=>state.liked));

  const [isLiked, setIsLiked] = useState(likes.paddles.find((like) => like.id === id));

  console.log("isLiked",isLiked);

  useEffect(()=>{
    const liked = likes.paddles.find((like) => like.id === id);
    setIsLiked(liked);
  }, [likes]);
  
  const dispatch = useDispatch();
  
  const affs = [];

  const isValidUrl = urlString=> {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
  return !!urlPattern.test(urlString);
}

  aff_links.map((aff) => {
    //console.log(isValidUrl(aff.link), aff.link)
    affs.push(
      <a href={aff.link} key={aff.link} target="_blank" rel="noreferrer" className='links'>
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

  const handleLike = ()=>{
    if (isLiked) {
      dispatch(removeLike({id, title, slug, img}));
      setIsLiked((prevState) => !prevState);
    } else {
      dispatch(addLike({id, title, slug, img}));
      setIsLiked((prevState) => !prevState);
    }
  }
    
  return (
    <section className='card'>
        <div className='card-sec'>
          <div>
            <Link to={`/paddle/${slug}`}>
              <img src={img} loading='lazy' className='card-image' alt={title} />
            </Link>
          </div>
        </div>

        <div className='card-sec card-info'>
          <div className='card-title'>
            <h3 className='like-icon'>
              <Link to={`/paddle/${slug}`}>
                {title}
              </Link>
              <span className='heart-icon'>
                <FavoriteIcon sx={{ color: isLiked ? red[500] : grey[400]}} onClick={()=>handleLike()} />
              </span>
            </h3>
          </div>
          <div className='details'>
            <p>{surface}</p>
            <p>{weightText}</p>
            <p>{coreThicknessText}</p>
            <p>{handleLength} in</p>
          </div>
        </div>

      <div className='card-sec card-links'>
          {affs}
      </div>
      
    </section>
  );
}

export default PaddleComparison