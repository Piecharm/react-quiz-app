import Options from "./Options";

function Question({ question, dispatch, answer }) {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <h2 className="font-semibold">{question.question}</h2>
            <div className="flex flex-col py-2">
                <Options
                    question={question}
                    dispatch={dispatch}
                    answer={answer}
                />
            </div>
        </div>
    );
}

export default Question;
