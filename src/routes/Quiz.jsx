import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Questions from '../Questions/Questions';
import '../index.css';
import React, { useState, useEffect } from 'react';
//import paddles from '../db/data';
import PaddleCard from '../components/PaddleCard/PaddleCard';
import questions from '../db/questions';
import axios from 'axios';
import { ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet';

let initialCategories = ["","","","","","","","","",""];

function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState(initialCategories);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const[paddles, setPaddles] = useState([]);

  useEffect(()=>{
    const getPaddles = async ()=>{
      try {
        const res = await axios.get("https://findpaddle-api.onrender.com/api/paddle");
        setPaddles(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getPaddles();
  }, []);

  //quiz button answer filter
  const handleQuizClick = event => {
    const nextQuestion = currentQuestion + 1;
    const currentCategories =  selectedCategory.map((cat, i) => {
      if (i === currentQuestion) {
        return event.target.value;
      } else {
        return cat;
      }
    
    });
    setSelectedCategory(currentCategories);
  

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      document.getElementById("quiz").scrollIntoView();
      document.getElementById("quiz-results-heading").style.display = 'block';
    }
  }

  const handleBackClick = event => {
    if (currentQuestion !== 0) {
      const prevQuestion = currentQuestion - 1;
      setCurrentQuestion(prevQuestion);
    }
  }

  function meetsOneOfCriteria(criteriaArr, x, operation) {
    console.log("criteriaArr", criteriaArr)
    console.log("x", x)
    console.log("operation", operation)

    let meets = false;

    if (operation === 'min') {
      criteriaArr.map((criteria) => {
        if (parseFloat(criteria) >= parseFloat(x)) {
          meets = true;
        }
      });
    }else if (operation === 'max') {
      criteriaArr.map((criteria) => {
        if (parseFloat(criteria) <= parseFloat(x)) {
          console.log("work ", parseFloat(criteria), " <= ", x)
          console.log("meets", true)
          meets = true;
        }
      });
    } else if (operation === 'equal') {
      criteriaArr.map((criteria) => {
        if (criteria === x) {
          meets = true;
        }
      });
    }
    console.log("meets", meets)
    return meets;
  }

  function filteredData(paddles, selected) {
    let filteredProducts = [];
    paddles.map((a,e)=>(
      filteredProducts.push(a)
    ));

    //selected filter
    var skillAnswer = selected[0];
    var skillPaddleWeightMax = 20;
    var skillCoreThicknessMin = 0;
    var skillPaddleShapes = ["Elongated", "Wide Body", "Standard", "Square"]
    if (skillAnswer === "Beginner") {
      skillPaddleWeightMax = 8.0;
      skillCoreThicknessMin = 15;
      skillPaddleShapes = ["Elongated", "Wide Body"]
    }

    var playStyleAnswer = selected[1];
    var budgetAnswer = parseInt(selected[2],10);
    var colorAnswer = selected[3];
    var brandAnswer = selected[4];
    var coreThicknessAnswer = selected[5];
    var coreThicknessAnswerMin = 0;
    var coreThicknessAnswerMax = 100;
    if (coreThicknessAnswer === "Thin") {
      coreThicknessAnswerMin = 0;
      coreThicknessAnswerMax = 12;
    }
    if (coreThicknessAnswer === "Standard") {
      coreThicknessAnswerMin = 13;
      coreThicknessAnswerMax = 15;
    }
    if (coreThicknessAnswer === "Thick") {
      coreThicknessAnswerMin = 16;
      coreThicknessAnswerMax = 100;
    }
    var handleLengthAnswer = selected[6];
    var handleLengthAnswerMin = 0;
    var handleLengthAnswerMax = 100;
    if (handleLengthAnswer === "Short") {
      handleLengthAnswerMin = 0;
      handleLengthAnswerMax = 4.5;
    }
    if (handleLengthAnswer === "Medium") {
      handleLengthAnswerMin = 4.5;
      handleLengthAnswerMax = 7;
    }
    if (handleLengthAnswer === "Long") {
      handleLengthAnswerMin = 7;
      handleLengthAnswerMax = 100;
    }
    var paddleWeightAnswer = selected[7];
    var paddleWeightAnswerMin = 0;
    var paddleWeightAnswerMax = 100;
    if (paddleWeightAnswer === "Light") {
      paddleWeightAnswerMin = 0;
      paddleWeightAnswerMax = 6.5;
    }
    if (paddleWeightAnswer === "Medium") {
      paddleWeightAnswerMin = 6.5;
      paddleWeightAnswerMax = 8.5;
    }
    if (paddleWeightAnswer === "Heavy") {
      paddleWeightAnswerMin = 8.5;
      paddleWeightAnswerMax = 100;
    }
    var surfaceAnswer = selected[8];
    var injuryAnswer = selected[9];
    var injuryPaddleWeightMin = 7.6;
    var injuryPaddleWeightMax = 8.4;

    if (skillAnswer !== '' || playStyleAnswer !== '' || !(isNaN(budgetAnswer)) || colorAnswer !== '' || brandAnswer !== '' || coreThicknessAnswer !== '' || handleLengthAnswer !== '' || paddleWeightAnswer !== '' || surfaceAnswer !== '' || injuryAnswer !== '') {
      filteredProducts = filteredProducts.filter((
        {color, bestPrice, playStyle, coreThickness, handleLength, paddleWeight, surface, paddleShape}) => 
        (skillAnswer === '' || (meetsOneOfCriteria(paddleWeight, skillPaddleWeightMax, "max") && meetsOneOfCriteria(coreThickness, skillCoreThicknessMin, "min") && meetsOneOfCriteria(skillPaddleShapes, paddleShape, "equal"))) && 
        (colorAnswer === '' || meetsOneOfCriteria(color, colorAnswer, "equal")) && 
        (isNaN(budgetAnswer) || parseInt(bestPrice, 10) <= budgetAnswer) && 
        (playStyleAnswer === '' || playStyle === playStyleAnswer) && 
        (coreThicknessAnswer === '' || (coreThickness >= coreThicknessAnswerMin && coreThickness <= coreThicknessAnswerMax)) && 
        (handleLengthAnswer === '' || (handleLength >= handleLengthAnswerMin && handleLength <= handleLengthAnswerMax)) && 
        (paddleWeightAnswer === '' || (paddleWeight >= paddleWeightAnswerMin && paddleWeight <= paddleWeightAnswerMax)) &&
        (surfaceAnswer === '' || surface === surfaceAnswer) && 
        (injuryAnswer === '' || injuryAnswer === "No" || (meetsOneOfCriteria(paddleWeight, injuryPaddleWeightMin, "min") && meetsOneOfCriteria(paddleWeight, injuryPaddleWeightMax, "max"))));

        for (let i = 0, len = filteredProducts.length; i < len; ++i) {
          filteredProducts[i].why_chosen = [];
          
          if(playStyleAnswer !== ''){
            filteredProducts[i].why_chosen.push(filteredProducts[i].playStyle + " Paddle (match!)");
          }
          if(surfaceAnswer !== ''){
            filteredProducts[i].why_chosen.push(filteredProducts[i].surface + " Surface (match!)");
          }
          if(coreThicknessAnswer !== ''){
            filteredProducts[i].why_chosen.push(filteredProducts[i].coreThickness + "mm Thickness (match!)");
          }
        }

    }

    return filteredProducts.map(({_id, img, title, slug, star, reviews, avgPrice, bestPrice, aff_links, why_chosen, color, surface, skill, playStyle, coreThickness, paddleWeight, handleLength, paddleShape}) => (
      <PaddleCard
      key={_id}
      id={_id}
      img={img}
      title={title}
      slug={slug}
      star={star}
      reviews={reviews}
      avgPrice={avgPrice}
      bestPrice={bestPrice}
      aff_links={aff_links}
      why_chosen={why_chosen}
      color={color}
      surface={surface}
      skill={skill}
      playStyle={playStyle}
      coreThickness={coreThickness}
      paddleWeight={paddleWeight}
      handleLength={handleLength}
      paddleShape={paddleShape}
      />
    ))

  }

  const results = filteredData(paddles, selectedCategory);

  const tool = "quiz";

  return (
    <>
      <Helmet>
        <title>Paddle Recommendation Quiz | FindPaddle: Find your perfect pickleball paddle!</title>
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
      <Questions currentQuestion={currentQuestion} selectedCategory={selectedCategory} handleClick={handleQuizClick} handleBackClick={handleBackClick} />
      <Products results={results} tool={tool} />
      <Footer sidebar={''} />
    </>
  );
}

export default Quiz;
