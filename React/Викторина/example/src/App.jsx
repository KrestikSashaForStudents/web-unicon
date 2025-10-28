import { useState , useEffect, cloneElement} from 'react'
import './App.css'
import QuizGame from './components/OuizGame'

const url = 'https://opentdb.com/api.php?amount=10'
function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    let id = setTimeout(() =>
      fetch(url)
      .then(response => response.json())
      .then(result => {
        if("response_code" in result && result.response_code === 0){
          setQuestions(result.results)
        }
        else
          alert("Error - " + result)
      }), 1000)

    return () => {
      clearTimeout(id)
    }
  }, [])

  return <div className='app'>
    {questions.length === 0 ? <div>loading....</div> : <QuizGame questions={questions}/>}
  </div>
}

export default App
