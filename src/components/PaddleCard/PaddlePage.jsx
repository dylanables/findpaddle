import './PaddlePage.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


function PaddlePage({id, img, title, brand, color, surface, coreThickness, handleLength, paddleWeight, paddleShape, aff_links, playStyle, bestPrice}) {
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
    
  
  return (
    <section className='page'>
      <h2 className='page-title'>
        {title}
      </h2>
      <div className='page-heart-icon'>
        <FavoriteBorderOutlinedIcon />
      </div>
      <img src={img} className='page-image' alt={title} />
      <section className='page-info'>
          <p>Surface: {surface}</p>
          <p>Weight: {paddleWeight} oz</p>
          <p>Core Thickness: {coreThickness} mm</p>
          <p>Handle Length: {handleLength} in</p>
          <p>Play Style: {playStyle} (to remove)</p>
          <p>Price: {bestPrice} (to remove)</p>
          <p>Shape: {paddleShape} (to remove)</p>
      </section>
      <section className='page-links'>
        {affs}
      </section>
    </section>
  );
}

export default PaddlePage