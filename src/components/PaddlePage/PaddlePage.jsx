import './PaddlePage.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
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

  useEffect(()=>{
    const liked = likes.paddles.find((like) => like.id === id);
    setIsLiked(liked);
  }, [likes, id]);

  const dispatch = useDispatch();
  
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
    <div className='page'>
      <section className='paddle-info'>
        <h2 className='page-title'>
          {title}
        </h2>
        <div className='heart-icon'>
          <FavoriteIcon sx={{ color: isLiked ? red[500] : grey[400]}} onClick={()=>handleLike()} />
        </div>
        <img src={img} className='page-image' alt={title} />
        <section className='page-info'>
            <p>Surface: {surface}</p>
            <p>Weight: {weightText}</p>
            <p>Core Thickness: {coreThicknessText}</p>
            <p>Handle Length: {handleLength} in</p>
        </section>
      </section>
      <section className='paddle-retailers'>
        <h2>Retailers</h2>
        <table>
          <thead>
            <tr>
              <th>Retailer</th>
              <th>Price</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
          {
            aff_links?.map((aff) => {
              return (
              <tr>
                <td>{aff.retailer}</td>
                <td>{aff.price ? aff.price : "Click link for price"}</td>
                <td><a href={aff.link} target="_blank" rel="noreferrer"><OpenInNewIcon /></a></td>
              </tr>
              );
            })
          }
          </tbody>
        </table>
      </section>
    </div>
  </Container>
  );
}

export default PaddlePage