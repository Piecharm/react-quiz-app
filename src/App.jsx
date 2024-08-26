import { useEffect, useReducer } from "react";
import Header from "./components/Header";

const initialState = {
    questions: [],
    status: "loading",
};

function reducer(state, action) {
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
    const [state, dispatch] = useReducer(reducer, initialState);

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
        </div>
    );
}

export default App;
