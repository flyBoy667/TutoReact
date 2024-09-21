import {useState} from "react";

function App() {

    console.log('render')
    const [text, setText] = useState('');
    const [checked, setChecked] = useState(true);

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const toggleChecked = () => {
        setChecked(!checked);
    }

    return <form>
        <textarea value={text} onChange={handleChange}/>
        <input type="checkbox" checked={checked} onChange={toggleChecked}/>
        <input type="submit" disabled={!checked} value="Envoyer"/>
    </form>

}

export default App;
