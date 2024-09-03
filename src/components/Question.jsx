function Question({ question }) {
    return (
        <div>
            <h2 className="font-semibold">{question.question}</h2>
            <div>
                {question.options.map((option) => (
                    <button
                        className="bg-[#fff9de] text-gray-800 hover:bg-gray-900 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded"
                        key={option}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;
