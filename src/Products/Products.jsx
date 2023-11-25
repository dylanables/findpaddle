import './Products.css';
import PaddleCard from '../components/PaddleCard/PaddleCard';
import Container from '@mui/material/Container';

const Products = ({results, tool}) => {

  return (
    <div className={`results ${tool}`} id={tool}>
    <Container maxWidth='xl'>
    <h2 id='quiz-results-heading'>Quiz Results</h2>
    <p>Found {results.length} result{results.length !== 1 ? "s" : ""}...</p>

    <section className='card-container'>
      {results}
    </section>
    </Container>
    </div>
  )
}

export default Products