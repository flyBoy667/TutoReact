import {useState} from "react";

function App() {
    const [person, setPerson] = useState(
        {
            firstName: 'John',
            lastName: 'Doe',
            age: 18
        }
    )

    const [count, setCount] = useState(0)

    const incrementAge = () => {
        setPerson({...person, age: person.age + 1})
    }

    const incrementCount = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    return <>
        <p>Age de {person.firstName} : {person.age}</p>
        <button onClick={incrementAge}>Gagner une annee</button>
        <p>Compteur : {count}</p>
        <button onClick={incrementCount}>Incrementer le compteur de trois</button>
    </>

}

export default App;
