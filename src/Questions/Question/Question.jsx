import QuizButtons from '../../components/QuizButtons/QuizButtons';
import './Question.css';

import questions from '../../db/questions';

function Question({currentQuestion, selectedCategory, handleClick}) { 
  return <>
    <div>
      <h2 className='sidebar-title color-title'><span className="currQuestion">Question {currentQuestion + 1}</span> / {questions.length}</h2>

      <div className='question-text'>{questions[currentQuestion].questionText}</div>

      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((answerOption) => (
            <label key={answerOption.answerValue} className='sidebar-label-container'>
                <QuizButtons onClickHandler={handleClick} value={answerOption.answerValue} title={answerOption.answerText} selectedCategory={selectedCategory} activeBtn={answerOption.answerValue === selectedCategory[currentQuestion] ? "activeBtn" : ""} />
            </label>
        ))}
      </div>
      
    </div>
  </>
}

export default Question;