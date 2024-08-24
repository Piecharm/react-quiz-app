import { useEffect } from "react";
import Header from "./components/Header";

function App() {
    useEffect(function () {
        async function getQuizDetails() {
            try {
                const res = await fetch("http://localhost:8000/questions");
                const data = await res.json();
                console.log(data);
            } catch (err) {
                console.error("Error");
            }
        }
        getQuizDetails();
    }, []);

    return (
        <div>
            <Header />
        </div>
    );
}

export default App;
