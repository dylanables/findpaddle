import './Liked.css';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Liked() {

  const numLikes = useSelector(state=>state.liked.quantity);
  const likedPaddles = useSelector(state=>state.liked.paddles);

  return (
    <div className='cart'>
        <h1>Your Saved Paddles</h1>
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
        <Link to={`/compare?liked=true`}>
          <button>Compare Saved Paddles</button>
        </Link>
    </div>
  );
}

export default Liked