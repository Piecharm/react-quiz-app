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

export default quizReducer;