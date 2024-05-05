import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';
import '../index.css';
import '../compare.css';
import { useState, useEffect } from 'react';
//import paddles from '../db/data';
import PaddleComparison from '../components/PaddleComparison/PaddleComparison';
import axios from 'axios';
import { ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";
import { addLike, removeLike } from '../redux/likedRedux';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';


function Compare() {

  const [searchParams, setSearchParams] = useSearchParams();

  const[paddles, setPaddles] = useState([]);
  const[compare, setCompare] = useState([]);

  const likes = (useSelector(state=>state.liked));
  console.log("Likes",likes);

  useEffect(()=>{
    const getPaddles = async ()=>{
      try {
        const res = await axios.get("https://findpaddle-api.onrender.com/api/paddle");
        setPaddles(res.data);
        if (searchParams.get("liked") === "true") {
            let likedPaddles = [];
            console.log("liked true");
            likes.paddles.map((item) => {
                likedPaddles.push(res.data.find((paddle) => paddle._id === item.id));
            });
            console.log("likedPaddles", likedPaddles);
            setCompare(likedPaddles);
        }
      } catch(err) {
        console.log(err);
      }
    };
    getPaddles();
  }, [searchParams]);

  console.log("PADDLES", paddles);

  const handleSelectFilter = (event, keyName) => {
    //for react-select
    let values = [];
    event.map((item)=>{
      values.push(item.value);
    });

    console.log(values)


    //for vanilla html <select>
    //const values = Array.from(event.target.selectedOptions, option => option.value);
    // Or this way
    //const values = [...event.target.selectedOptions].map(opt => opt.value)

    if (keyName === 'brand'){
      setBrand(values);
    } else if (keyName === 'shape') {
      setShape(values);
    } else if (keyName === 'surface') {
      setSurface(values);
    } else {
      console.log("error");
    }
    

  };

  function handleNewCompare(option) {
    setCompare([...compare, option]);
  };

  const tool = "compare";

  return (
    <>
        <Helmet>
            <title>Compare | FindPaddle: Find your perfect pickleball paddle!</title>
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
        <div class="results">
            <Container maxWidth="xl">
                <div className='compare'>
                    <SearchBar use={tool} handleCompare={handleNewCompare} />

                    {compare?.length > 0 ? 
                    <>
                    <div class="tableContainer">
                        <table className='compareTable'>
                            <thead>
                            <tr class="columnHeaders">
                                <th class="rowHeader emptyCell" title="Empty cell"></th>
                                {compare?.map((item) => {
                                    return (
                                        <th scope="col" class="columnHeader">
                                            <img src={item?.img} height={100} width={100}/><br/>
                                            {item?.title}
                                        </th>
                                    )
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            
                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader">Shape</th>
                                {compare?.map((item) => {
                                    return (
                                        <td className='compareData'>{item?.paddleShape}</td>
                                    )
                                })}
                            </tr>

                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader">Play Style</th>
                                {compare?.map((item) => {
                                    return (
                                        <td className='compareData'>{item?.playStyle}</td>
                                    )
                                })}
                            </tr>

                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader">Surface Material</th>
                                {compare?.map((item) => {
                                    return (
                                        <td className='compareData'>{item?.surface}</td>
                                    )
                                })}
                            </tr>
                        
                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader">Static Weight</th>
                                {compare?.map((item) => {
                                    return (
                                        <td className='compareData'>{item?.paddleWeight.join(" / ")} oz</td>
                                    )
                                })}
                            </tr>

                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader">Core Thickness</th>
                                {compare?.map((item) => {
                                    return (
                                        <td className='compareData'>{item?.coreThickness.join(" / ")} mm</td>
                                    )
                                })}
                            </tr>

                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader">Handle Length</th>
                                {compare?.map((item) => {
                                    return (
                                        <td className='compareData'>{item?.handleLength} in</td>
                                    )
                                })}
                            </tr>

                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader">Swing Weight</th>
                                {compare?.map((item) => {
                                    return (
                                        <td className='compareData'>{item?.swingWeight || ""}</td>
                                    )
                                })}
                            </tr>

                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader">Twist Weight</th>
                                {compare?.map((item) => {
                                    return (
                                        <td className='compareData'>{item?.twistWeight || ""}</td>
                                    )
                                })}
                            </tr>

                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader">Thermoformed</th>
                                {compare?.map((item) => {
                                        if (item?.thermoformed !== undefined && item?.thermoformed !== '') {
                                            if (item?.thermoformed) {
                                                return (
                                                <td className='compareData'>
                                                    <span title="Thermoformed" class="featureCheck">✔</span>
                                                </td>
                                                )
                                            } else {
                                                return (
                                                <td className='compareData'>
                                                    <span title="Not thermoformed" class="featureX">✘</span>
                                                </td>
                                                )
                                            }
                                        } else {
                                            return (
                                            <td className='compareData'>{""}</td>
                                            )
                                        }
                                })}
                            </tr>

                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader">Best Price</th>
                                {compare?.map((item) => {
                                    return (
                                        <td className='compareData'>${item?.bestPrice}</td>
                                    )
                                })}
                            </tr>

                            <tr class="tableBodyRow">
                                <th scope="row" class="rowHeader emptyCell" title="Empty Cell"></th>
                                {compare?.map((item) => {
                                    return (
                                        <td className='compareData'><Link to={`/paddle/${item?.slug}`}><Button variant="contained">View</Button></Link></td>
                                    )
                                })}
                            </tr>


                            </tbody>
                        </table>
                    </div>
                    </>
                    : <p className='nothingToCompare'>{"Select 2 or more paddles to compare"}</p>
                    }
                </div>
            </Container>
        </div>

        <Footer sidebar={''} />
    </>
  );
}

export default Compare
