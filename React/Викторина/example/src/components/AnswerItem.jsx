import { useEffect, useState } from 'react'
import './AnswerItem.css'

export default function AnswerItem({isCorrect, selected, onClick, children}){
    const [status, setStatus] = useState("")

    console.log(isCorrect, selected, children);
    
    useEffect(()=>{
        if(isCorrect && selected !== ""){
            setStatus("correct")
        }
        else{
            if (!isCorrect && selected === children){
                setStatus("incorrect")
            }
            else{
                setStatus("")
            }
        }
    }, [isCorrect, selected, children])
    
    return <div 
        className={`answer-item ${status}`}
        onClick={selected === "" ? onClick : null}
    >
        {children}
    </div>
}