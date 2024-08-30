import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import quizReducer from "./reducers/QuizReducer";
import Error from "./components/Error";

const initialState = {
    questions: [],
    status: "loading",
};

function App() {
    const [state, dispatch] = useReducer(quizReducer, initialState);
    const { status } = state;

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
        <div>
            <Header />
            <Main>
                {status === "loading" && <Loader />}
                {status === "error" && <Error />}
            </Main>
        </div>
    );
}

export default App;
