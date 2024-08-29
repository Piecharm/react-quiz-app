import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";

const initialState = {
    questions: [],
    status: "loading",
};

function quizReducer(state, action) {
    switch (action.type) {
        case "GET_QUIZ_SUCCESS":
            return { ...state, questions: action.payload, status: "ready" };
        case "GET_QUIZ_FAILURE":
            return { ...state, status: "error" };
        default:
            return state;
    }
}

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
            <Main>{status === "loading" && <Loader />}</Main>
        </div>
    );
}

export default App;
