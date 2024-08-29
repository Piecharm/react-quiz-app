export default function Loader() {
    return (
        <div className="flex space-x-2 justify-center items-center h-screen">
            <div className="h-5 w-5 bg-blue-100 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-5 w-5 bg-blue-100 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-5 w-5 bg-blue-100 rounded-full animate-bounce"></div>
            <p className="text-gray-800">Loading questions...</p>
        </div>
    );
}
