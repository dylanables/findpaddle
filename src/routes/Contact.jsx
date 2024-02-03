import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';
import "../index.css";
import { ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Contact = () => {

    return (
    <>
        <Helmet>
        <title>Contact | FindPaddle: Find your perfect pickleball paddle!</title>
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
        <Nav/>
        <ContactForm />
        <Footer />
    </>
    )
}

export default Contact