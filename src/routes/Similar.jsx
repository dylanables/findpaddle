import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';
import '../index.css';
import { Container } from '@mui/material';
import { ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Similar() {

  return (
    <>
      <Helmet>
        <title>Similar Paddles | FindPaddle: Find your perfect pickleball paddle!</title>
        <meta name="description" content="Find your ideal pickleball paddle effortlessly! Advanced search, personalized recommendations, and price comparisons - all at Find Paddle." />
        <meta name="keywords" content="pickleball paddle, paddle specifications, pickleball price comparison, paddle selector, best pickleball paddle, paddle reviews" />
        <meta property="og:title" content="Find Paddle | Find your perfect pickleball paddle!" />
        <meta property="og:description" content="Find your ideal pickleball paddle effortlessly! Advanced search, personalized recommendations, and price comparisons - all at Find Paddle." />
        <meta property="og:image" content="https://findpaddle.com/findpaddle.svg" />
        <meta property="og:url" content="https://findpaddle.com" />
        <meta name="twitter:title" content="Find Paddle | Find your perfect pickleball paddle!" />
        <meta name="twitter:description" content="Find your ideal pickleball paddle effortlessly! Advanced search, personalized recommendations, and price comparisons - all at Find Paddle." />
        <meta name="twitter:image" content="https://findpaddle.com/findpaddle.svg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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