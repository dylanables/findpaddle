import './Products.css';
import PaddleCard from '../components/PaddleCard/PaddleCard';

const Products = ({results}) => {

  return (
    <div className='results'>
    <p>Found {results.length} result{results.length !== 1 ? "s" : ""}...</p>

    <section className='card-container'>
      {results}
    </section>

    </div>
  )
}

export default Products