function quizReducer(state, action) {
    switch (action.type) {
        case "GET_QUIZ_SUCCESS":
            return { ...state, questions: action.payload, status: "ready" };
        case "GET_QUIZ_FAILURE":
            return { ...state, status: "error" };
        case "GET_QUIZ_START":
            return { ...state, status: "active" };
        case "GET_NEW_ANSWER":
            return { ...state, answer: action.payload };
        default:
            return state;
    }
}

export default quizReducer;