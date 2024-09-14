function quizReducer(state, action) {
    switch (action.type) {
        case "GET_QUIZ_SUCCESS":
            return { ...state, questions: action.payload, status: "ready" };
        case "GET_QUIZ_FAILURE":
            return { ...state, status: "error" };
        case "GET_QUIZ_START":
            return { ...state, status: "active" };
        case "GET_NEW_ANSWER":
            {
                const question = state.questions.at(state.index);

                return {
                    ...state,
                    answer: action.payload,
                    points:
                        action.payload === question.correctOption
                            ? state.points + question.points
                            : state.points,
                };
            }
        case "GET_NEXT_QUESTION":
            return { ...state, index: state.index + 1 }
        default:
            return state;
    }
}

export default quizReducer;