import './PaddlePage.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Container } from '@mui/material';
import { addLike, removeLike } from '../../redux/likedRedux';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { grey, red } from '@mui/material/colors';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


function PaddlePage({id, img, title, slug, brand, color, surface, coreThickness, handleLength, paddleWeight, paddleShape, aff_links, playStyle, bestPrice, swingWeight, twistWeight, thermoformed}) {
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
      dispatch(removeLike({id, title, slug, img}));
      setIsLiked((prevState) => !prevState);
    } else {
      dispatch(addLike({id, title, slug, img}));
      setIsLiked((prevState) => !prevState);
    }
  }

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  
  return (
  <Container>
    <div className='page'>
      <section className='paddle-info'>
        <h1 className='page-title'>
          {title}
        </h1>
        <div className='heart-icon'>
          <FavoriteIcon sx={{ color: isLiked ? red[500] : grey[400]}} onClick={()=>handleLike()} />
        </div>
        <img src={img} className='page-image' alt={title} />
      </section>
      <section className='paddle-info'>
        <h2>Specs</h2><br/><br/>
        <p>Shape: {paddleShape}</p>
        <p>Play Style: {playStyle}</p>
        <p>Surface: {surface}</p>
        <p>Core Thickness: {coreThicknessText}</p>
        <p>Handle Length: {handleLength} in</p>
        <p>Static Weight: {weightText}</p>
        <p>
          <HtmlTooltip
            title={
              <>
                <b>{"Swingweight"}</b> {"is a measure of how heavy the paddle feels when you swing it. A higher swingweight means more weight is distributed in the head (heavy-heavy) and will feel heavier to swing. The trade-off with higher/lower swingweignt is swing speed vs power. Typically ranges from 100 to 140."}
              </>
            }
          >
            <span className='helpPopup'>Swingweight: {swingWeight}</span>
          </HtmlTooltip>
        </p>
        <p>
          <HtmlTooltip
            title={
              <>
                <b>{"Twistweight"}</b> {"is a measure of the paddle's resistance to twisting on off-center shots. A higher twistweight indicates that the paddle has a larger sweet spot and is more forgiving. Ranges from 5 to 8."}
              </>
            }
          >
            <span className='helpPopup'>Twistweight: {twistWeight}</span>
          </HtmlTooltip>
        </p>
        <p>Construction: {thermoformed ? "Thermoformed" : ""}</p>
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
      <section className='review'></section>
    </div>
  </Container>
  );
}

export default PaddlePage