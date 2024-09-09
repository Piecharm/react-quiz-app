function Options({ question }) {
    return (
        <div>
            {question.options.map((option) => (
                <button
                    className="bg-[#fff9de] text-gray-800 hover:bg-gray-900 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded my-3"
                    key={option}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Options;
