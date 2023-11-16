import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Questions from '../Questions/Questions';
import '../index.css';
import React, { useState } from 'react';
import paddles from '../db/data';
import PaddleCard from '../components/PaddleCard/PaddleCard';
import questions from '../db/questions';

let initialCategories = ["","","","","","","","",""];

function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState(initialCategories);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
      alert("You have reached the end of the quiz!");
    }
  }

  const handleBackClick = event => {
    if (currentQuestion !== 0) {
      const prevQuestion = currentQuestion - 1;
      setCurrentQuestion(prevQuestion);
    }
  }

  function filteredData(paddles, selected) {
    let filteredProducts = [];
    paddles.map((a,e)=>(
      filteredProducts.push(a)
    ));

    //selected filter
    var skillAnswer = selected[0];
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
    if (coreThicknessAnswer === "Medium") {
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
    if (paddleWeightAnswer === "Short") {
      paddleWeightAnswerMin = 0;
      paddleWeightAnswerMax = 6.5;
    }
    if (paddleWeightAnswer === "Medium") {
      paddleWeightAnswerMin = 6.5;
      paddleWeightAnswerMax = 8.5;
    }
    if (paddleWeightAnswer === "Long") {
      paddleWeightAnswerMin = 8.5;
      paddleWeightAnswerMax = 100;
    }
    var surfaceAnswer = selected[8];

    if (skillAnswer !== '' || playStyleAnswer !== '' || !(isNaN(budgetAnswer)) || colorAnswer !== '' || brandAnswer !== '' || coreThicknessAnswer !== '' || handleLengthAnswer !== '' || paddleWeightAnswer !== '' || surfaceAnswer !== '') {
      filteredProducts = filteredProducts.filter((
        {color, company, newPrice, skill, playStyle, coreThickness, handleLength, paddleWeight, surface}) => 
        (skillAnswer === '' || skill === skillAnswer) && 
        (colorAnswer === '' || color === colorAnswer) && 
        (brandAnswer === '' || company === brandAnswer) && 
        (isNaN(budgetAnswer) || parseInt(newPrice, 10) <= budgetAnswer) && 
        (playStyleAnswer === '' || playStyle === playStyleAnswer) && 
        (coreThicknessAnswer === '' || (coreThickness >= coreThicknessAnswerMin && coreThickness <= coreThicknessAnswerMax)) && 
        (handleLengthAnswer === '' || (handleLength >= handleLengthAnswerMin && handleLength <= handleLengthAnswerMax)) && 
        (paddleWeightAnswer === '' || (paddleWeight >= paddleWeightAnswerMin && paddleWeight <= paddleWeightAnswerMax)) &&
        (surfaceAnswer === '' || surface === surfaceAnswer));

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

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice, aff_links, why_chosen, color, surface, skill, playStyle, coreThickness}) => (
      <PaddleCard 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      aff_links={aff_links}
      why_chosen={why_chosen}
      color={color}
      surface={surface}
      skill={skill}
      playStyle={playStyle}
      coreThickness={coreThickness}
      />
    ))

  }

  const results = filteredData(paddles, selectedCategory);

  const tool = "quiz";

  return (
    <>
      <Nav />
      <Questions currentQuestion={currentQuestion} selectedCategory={selectedCategory} handleClick={handleQuizClick} handleBackClick={handleBackClick} />
      <Products results={results} tool={tool} />
      <Footer />
    </>
  );
}

export default Quiz;
