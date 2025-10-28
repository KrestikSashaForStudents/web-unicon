import { useEffect, useState } from "react"
import AnswerItem from './AnswerItem'
import './QuizItem.css'

export default function QuizItem({data, setCounter}){
    const [answers, setAnswers] = useState([])
    const [userSelect, setUserSelect] = useState("")

    useEffect(() => {
        setAnswers([
            data.correct_answer, ...data.incorrect_answers
        ].sort(
            (a,b) => Math.random()-0.5)
        )
        setUserSelect("")
    }, [data])

    useEffect(()=>{
        if(userSelect === data.correct_answer)
            setCounter(c => c+1)
    }, [userSelect])



    return <>
        <h3 className="quiz-title">{data.question}</h3>
        <div className="answer-cont">
        {answers.map((el) => <AnswerItem
            isCorrect={el === data.correct_answer}
            selected={userSelect}
            onClick={() => setUserSelect(el)}
        >
            {el}
            </AnswerItem>)}
            </div>
    </>
}