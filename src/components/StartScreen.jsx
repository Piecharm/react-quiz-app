function StartScreen({ numQuestions, dispatch }) {
    return (
        <div className="mx-auto max-w-xl text-center p-4 ">
            <h2 className="mb-2">Welcome to the Quiz</h2>
            <h3>{numQuestions} questions to test your knowledge</h3>
            <button
                className="py-2.5 px-4 me-2 m-3 text-sm font-semibold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => dispatch({ type: "start" })}
            >
                Let&apos;s get Started
            </button>
        </div>
    );
}

export default StartScreen;
