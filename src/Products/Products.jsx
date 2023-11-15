import './Products.css';
import PaddleCard from '../components/PaddleCard/PaddleCard';

const Products = ({results}) => {

  return (
    <div className='results'>
    <h2>Found {results.length} result{results.length !== 1 ? "s" : ""}...</h2>

    <section className='card-container'>
      {results}
    </section>

    </div>
  )
}

export default Products