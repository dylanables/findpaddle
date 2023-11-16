import Brand from './Brand/Brand'
import Shape from './Shape/Shape'
import Surface from './Surface/Surface'
import Core from './Core/Core'
import Weight from './Weight/Weight'
import Handle from './Handle/Handle'
import Color from './Color/Color'
import './Questions.css'
import Button from '@mui/material/Button';
import { AiFillStar } from "react-icons/ai";
import {FaTableTennis} from "react-icons/fa";
import Question from './Question/Question'

function Questions({currentQuestion, selectedCategory, handleClick, handleBackClick}) {

  return <>
    <section className='questions'>
      <div className='questions-container'>
        <div className='logo-container'>
            <img src='https://paddlequiz.com/Paddle_Quiz_Logo_1000x1000.png' style={{height:'100px', width:'100px'}} id="Logo" /><h1>Paddle Quiz</h1>
        </div>

        <Question currentQuestion={currentQuestion} selectedCategory={selectedCategory} handleClick={handleClick} />

        <button onClick={handleBackClick} className='btns prevBtn'>Previous Question</button>

      </div>
    </section>
  </>
}

export default Questions

