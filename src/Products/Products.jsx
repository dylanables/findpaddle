import './Products.css';
import PaddleCard from '../components/PaddleCard/PaddleCard';
import Container from '@mui/material/Container';
import Loading from '../components/Loading/Loading';
import { useState, useEffect } from 'react';

const Products = ({results, tool}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(results?.length > 0) {
      setLoading(false)
    }
  }, [results])

  return (
    <div className={`results ${tool}`} id={tool}>
      <Container maxWidth='xl'>
        <h2 id='quiz-results-heading'>Quiz Results</h2>
        {loading
            ? <Loading />
            : <p>Found {results.length} result{results.length !== 1 ? "s" : ""}...</p>
          }
        <section className='card-container'>
          {results}
        </section>
      </Container>
    </div>
  )
}

export default Products