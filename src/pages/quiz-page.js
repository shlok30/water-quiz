import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useQuiz } from "../context/quiz-context"

const QuizPage = () => {

    const {quizID} = useParams()

    const {quizDB,questionIndex,answerList,setQuestionIndex,setAnswerList} = useQuiz()

    useEffect(() => !answerList.find(quiz => quiz.quizID === quizID) ? setAnswerList(prevList => [...prevList,{quizID, answers : []}]) : null,[])

    const currentQuizObject = quizDB.find(quiz => quiz["_id"] === quizID)

    const currentQuestion = currentQuizObject.mcqs[questionIndex].question

    const options = currentQuizObject.mcqs[questionIndex].options

    return(
        <>
            <div className="container center-block padding-s m6-top" style = {{maxWidth : "50%"}}>
                    <h1 className="primary-colour-text padding-s">{currentQuizObject.title}</h1>
                    <div className="m3-top padding-s flex space-between">
                        <p>Ouestion : {questionIndex + 1}/{currentQuizObject.mcqs.length}</p>
                        <p>Score : {calculateSum(answerList,quizID)}/15</p>
                    </div>
    
                    <div className="m5-top padding-s flex flex-column gap-xl">
                        <p className="text-l">{currentQuestion}</p>
                        <div className="flex flex-column gap-m">
                            {renderOptions(options)}
                        </div>
                    </div>
    
                    <div className="m5-top flex space-between padding-s">
                        <button className={`btn secondary-link ${questionIndex === 0 ? "hide" : ""}`} onClick={() => setQuestionIndex(prevIndex => prevIndex - 1)}>Prev</button>
                        <button className={`btn primary-link ${questionIndex === currentQuizObject.mcqs.length - 1 ? "hide" : ""}`} onClick = {() => setQuestionIndex(prevIndex => prevIndex + 1)}>Next</button>
                        <Link className = {`btn primary-link ${(questionIndex === currentQuizObject.mcqs.length - 1 ) && (answerList.find(quiz => quiz.quizID === quizID).answers.length === currentQuizObject.mcqs.length ) ? "" : "hide"}`} to = {`/result/${quizID}`}>Results</Link>  
                        
                    </div>
    
            </div>
        
        
        </>
    )
}

export default QuizPage