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
import Container from '@mui/material/Container';

function Questions({currentQuestion, selectedCategory, handleClick, handleBackClick}) {

  return <>
    <section className='questions'>
      <Container>
      <div className='questions-container'>
        <div className='logo-container'>
            <img src='/findpaddle_quiz.png' style={{height:'100px', width:'100px'}} id="Logo" />
            <h2 className='quiz-title'>Paddle Quiz</h2>
        </div>

        <Question currentQuestion={currentQuestion} selectedCategory={selectedCategory} handleClick={handleClick} />

        <button onClick={handleBackClick} className='btns prevBtn'>Previous Question</button>

      </div>
      </Container>
    </section>
  </>
}

export default Questions

