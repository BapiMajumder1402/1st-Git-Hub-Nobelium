import React, { useState,useRef } from 'react'
import quiz from './quiz.module.css'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [ui,setUi] = useState(true);
    const score=useRef(0)
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            score.current+=2
            setUi(!ui);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        score.current=0
    }
  return (
    <div>
        <p className={quiz.heading_txt}>Dus Ka Dum</p>
        <div className={quiz.container}>
            {showResult ? (
                <QuizResult score={score.current} totalScore={QuizData.length*2} tryAgain={resetAll}/>
            ):(
            <>
            <div className={quiz.question}>
                <span className={quiz.question_number}>{currentQuestion+1}. </span>
                <span className={quiz.question_txt}>{QuizData[currentQuestion].question}</span>
            </div>
            <div className={quiz.option_container}>
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        className={`${quiz.option_btn}  ${ clickedOption=== i+1 ? quiz.checked : null}`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" className={quiz.next_button} onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  )
}

export default Quiz