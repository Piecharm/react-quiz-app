function Options({ question, dispatch, answer }) {
    const hasAnswered = answer !== null;
    return (
        <div>
            {question.options.map((option, index) => (
                <button
                    className={`bg-[#fff9de] text-gray-800 hover:bg-gray-900 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded my-3 ${
                        index === answer ? "translate-x-8" : ""
                    } 
                ${
                    hasAnswered
                        ? index === question.correctOption
                            ? "bg-[#10ad66]"
                            : "bg-[#ff4d4d]"
                        : ""
                }`}
                    key={option}
                    disabled={hasAnswered}
                    onClick={() =>
                        dispatch({ type: "GET_NEW_ANSWER", payload: index })
                    }
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Options;
