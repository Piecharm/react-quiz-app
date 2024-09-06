function Question({ question }) {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <h2 className="font-semibold">{question.question}</h2>
            <div className="flex flex-col py-2">
                {question.options.map((option) => (
                    <button
                        className="bg-[#fff9de] text-gray-800 hover:bg-gray-900 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded my-3"
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
