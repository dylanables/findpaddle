import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';
import '../index.css';
import { Container } from '@mui/material';
import { ScrollRestoration } from 'react-router-dom';

function Similar() {

  return (
    <>
      <ScrollRestoration/>
      <Nav />
      <Container>
        <section className='margintop'>
          <h2>This tool is coming soon...</h2>
          <p>Please check back shortly.</p>
        </section>
      </Container>
      <Footer sidebar={''} />
    </>
  );
}

export default Similar