
import { useState } from "react"
import QuizItem from "./QuizItem"
import './QuizGame.css'
export default function QuizGame({questions}){
    const [index, setIndex] = useState(0)
    const [counter, setCounter] = useState(0)
    const [isEnd, setIsEnd] = useState(false)
    
    function next(){
        setIndex(i => i+1)
    }

    function end(){
        setIsEnd(true)
    }

    // function prev(){
    //     setIndex(i => Math.max(i-1, 0))
    // }

    return <div className="quiz-game">
        {isEnd ? <>{counter}</> :
        <>
        {<QuizItem data={questions[index]} setCounter={setCounter}/>}
        {/* <button onClick={prev}>{"<"}</button> */}
        {index === questions.length - 1 ?
         <button onClick={end}>end game</button>
         : 
         <button onClick={next}>{">"}</button>
         }</>
        }
    </div>
}