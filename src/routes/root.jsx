import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';
import Button from '@mui/material/Button';
import QuizIcon from '@mui/icons-material/Quiz';
import SearchIcon from '@mui/icons-material/Search';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Container from '@mui/material/Container';
import { Outlet, Link, ScrollRestoration } from "react-router-dom";
import Subscribe from '../components/Subscribe/Subscribe';
import { Helmet } from 'react-helmet';
import SearchBar from '../components/SearchBar/SearchBar';


function Root() {

  return (
    <>
      <Helmet>
        <title>Find Paddle | Find your perfect pickleball paddle!</title>
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
      <Container maxWidth="xl">
        <div className='hero'>
          <h1>Find Your Next Pickleball Paddle!</h1>
          <p>All the tools you need discover the best paddle to improve your game and smash the competition! All our tools are easy to use and constantly being updated as new paddles are released, allowing you to save time and money when researching.</p>

          <div className='center-items'>
            <div className='tool'>
              <h3>Advanced Search</h3>
              <p>Find the exact paddle you are looking for with our advanced search tool. Filter paddles based on your required criteria.</p>
              <Link to={'/search'}><Button size="large" variant="outlined" endIcon={<SearchIcon />}>Search</Button></Link>
            </div>
            <div className='tool'>
              <h3>Recommendation Quiz</h3>
              <p>Take our short, but comprehensive, quiz and instantly receive paddle recommendations based on your answers.</p>
              <Link to={'/quiz'}><Button size="large" variant="outlined" endIcon={<QuizIcon />}>Take Quiz</Button></Link>
            </div>
            <div className='tool'>
              <h3>Compare Paddles</h3>
              <p>Deciding between a few different paddles? Compare paddles side-by-side.</p>
              <Link to={'/compare'}><Button size="large" variant="outlined" endIcon={<CompareArrowsIcon />}>Compare</Button></Link>
            </div>
            <div className='tool'>
              <h3>Paddle Guide</h3>
              <p>Learn all about what makes each paddle unique, and how to determine which specifications will best suit your game.</p>
              <Link to={'/guide'}><Button size="large" variant="outlined" endIcon={<SportsTennisIcon />}>See Guide</Button></Link>
            </div>
          </div>
          <div className='center-items'>
            <SearchBar use="search" />
          </div>

        </div>
        <div className='why-section'>
          <h2>Why use FindPaddle?</h2>
          <p>With soooo many paddles on the market, it can be overwhelming to make a decision. There are lots of factors that go into whether a certain paddle will fit your game. Our tools help you determine the best paddle for you and find the best retailer to make your purchase.</p>
          <div className='center-items'>
            <div className='why'>
              <img src='/findpaddle_search.png' alt='' className='why-img'/>
              <h3>Trust the Data</h3>
            </div>
            <div className='why'>
            <img src='/findpaddle_money.png' alt='' className='why-img'/>
              <h3>Save Money</h3>
            </div>
            <div className='why'>
              <img src='/findpaddle_podium.png' alt='' className='why-img'/>
              <h3>Beat the Competition</h3>
            </div>
          </div>
        </div>
      </Container>
      <Subscribe />
      <Footer />
    </>
  );
}

export default Root