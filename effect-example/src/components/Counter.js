import { useState, useEffect } from "react";
function Counter() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Ömer");
    const [surName, setSurName] = useState("Kor");


    useEffect(() => {
        console.log("Component mounted")
        /* */
        const interval = setInterval(() => {
            setNumber((n) => n + 1);
        }, 1000);
        /* */
        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        console.log("state updated")
    });

    useEffect(() => {
        console.log("Number or name state updated")
    }, [number, name]);

    useEffect(() => {
        console.log("Only surname state updated")
    }, [surName]);

    return (
        <div className="App">
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>
                Click
            </button>
            <hr />
            <h1>{name}</h1>
            <button onClick={() => setName("Toygar")}>
                Click
            </button>
            <hr />
            <h1>{surName}</h1>
            <button onClick={() => setSurName("Kandemir")}>
                Click
            </button>
        </div>
    );
}

export default Counter;