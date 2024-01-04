import './Loading.css';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {

    return (
      <div className="full-height">
        <div className='loading-circle'><CircularProgress /></div>
      </div>
     )
  }
  
  export default Loading
  