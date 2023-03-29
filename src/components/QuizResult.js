import React from 'react'
import result from './quiz.module.css'

function QuizResult(props) {
  return (
    <>
    <div className={result.show_score}>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button className={result.next_button} onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult