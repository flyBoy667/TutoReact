import {useState} from "react";

function App() {
    const [name, setName] = useState('John Smith');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const reset = () => {
        setName('');
    }
    console.log('render')
    return <form>
        <label>
            Name:
            <input type="text" name="name" value={name} onChange={handleNameChange}/>
        </label>
        <input type="reset" value="Reset" onClick={reset}/>
    </form>

}

export default App;
