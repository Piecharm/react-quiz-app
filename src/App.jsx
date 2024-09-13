import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import quizReducer from "./reducers/QuizReducer";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
};

function App() {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const { questions, status, index, answer } = state;
    const numQuestions = questions.length;

    useEffect(function () {
        async function getQuizDetails() {
            try {
                const res = await fetch("http://localhost:8000/questions");
                const data = await res.json();
                dispatch({ type: "GET_QUIZ_SUCCESS", payload: data });
            } catch (err) {
                dispatch({ type: "GET_QUIZ_FAILURE" });
            }
        }
        getQuizDetails();
    }, []);

    return (
        <div className="bg-[#fff9de] h-screen">
            <Header />
            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
                {status === "ready" && (
                    <StartScreen
                        numQuestions={numQuestions}
                        dispatch={dispatch}
                    />
                )}
                {status === "active" && (
                    <Question
                        question={questions[index]}
                        dispatch={dispatch}
                        answer={answer}
                    />
                )}
            </Main>
        </div>
    );
}

export default App;
