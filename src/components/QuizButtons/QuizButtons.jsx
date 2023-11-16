function QuizButtons({onClickHandler, value, title, selectedCategory, activeBtn}) {

    return (
      <button onClick={onClickHandler} value={value} className={`btns ${activeBtn}`}>{title}</button>
     )
  }
  
  export default QuizButtons;
  