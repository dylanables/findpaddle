import Nav from '../Navigation/Nav';
import '../index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import Button from '@mui/material/Button';
import PaddlePage from '../components/PaddlePage/PaddlePage';
import { ScrollRestoration } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet';

function Paddle() {

  const location = useLocation();
  const paddleSlug = location.pathname.split("/")[2];

  const[paddle, setPaddle] = useState({});
  const[loading, setLoading] = useState(false);

  useEffect(()=>{
    const getPaddle = async ()=>{
      try {
        setLoading(true);
        const res = await publicRequest.get("https://findpaddle-api.onrender.com/api/paddle/find/"+paddleSlug);
        setPaddle(res.data);
        setLoading(false);
        console.log("data: ", res.data);
      } catch(err) {
        console.log("error", err);
      }
    };
    getPaddle();
  }, [paddleSlug]);

  return (
    <>
      <Helmet>
        <title>{paddle.title ? paddle.title : ""} | FindPaddle: Find your perfect pickleball paddle!</title>
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
      {loading
        ? <Loading />
        : <PaddlePage 
            id={paddle._id} //change
            img={paddle.img}
            title={paddle.title}
            slug={paddle.slug}
            brand={paddle.brand}
            color={paddle.color}
            surface={paddle.surface}
            coreThickness={paddle.coreThickness}
            handleLength={paddle.handleLength}
            paddleWeight={paddle.paddleWeight}
            paddleShape={paddle.paddleShape}
            playStyle={paddle.playStyle}
            bestPrice={paddle.bestPrice}
            aff_links={paddle.aff_links}
          />
      }
      <Footer />
    </>
  );
}

export default Paddle
