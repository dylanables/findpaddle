import './Liked.css';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Liked({tool}) {

  const numLikes = useSelector(state=>state.liked.quantity);
  const likedPaddles = useSelector(state=>state.liked.paddles);

  return (
    <div className={tool === "compare" ? "cartCompare" : "cart"}>
      <h1>Your Liked Paddles</h1>
      <div className='likescontainer'>
        {
        numLikes > 0 ? 
        likedPaddles.map(item=>(
          <Link to={`/paddle/${item.slug}`}>
            <div className='item' key={item.id}>
                <img src={item.img} alt='' />
                <div className='details'>
                    <p>{item.title}</p>
                </div>
            </div>
          </Link>
        )) : <p>{'No saved paddles'}</p>
        }
        </div>
        <div className='compareContainer'>
          <Link to={`/compare?liked=true`}>
            <Button variant="outlined" size={tool === "compare" ? "large" : ""}>Compare Liked Paddles</Button>
          </Link>
        </div>
    </div>
  );
}

export default Liked