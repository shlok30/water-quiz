import { Link } from "react-router-dom"

const QuizCard = ({title,id,category}) => {

    return(
        <div className="card-container flex flex-column gap-m" style = {{width : "30%"}}>
            <Link to = {`/quiz/${id}`}>
                <div className="img-container badge">
                    <img src="https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80"/>
                    <span className="badge-icon">New</span>
                </div>
                <div className="card-header padding-s">
                    <h4>{title}</h4>
                    <p className="card-subtitle m1 m2-top">Category : {category}</p>
                </div>
            </Link>
        </div>
    )
}

export default QuizCard