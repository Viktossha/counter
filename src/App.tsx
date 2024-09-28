import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [value, setValue] = useState(0)

    const maxValue = 5

    const incOnClickHandler = () => {
        if (value !== maxValue) {
            setValue(value + 1)
        } else {
            setValue(maxValue)
        }
    }

    const resetOnClickHandler = () => {
        setValue(0)
    }

    return (
        <div className="App">
            <div className={'counter'}>
                <div className={value !== maxValue ? 'block' : 'block error'}>{value}</div>
                <div className={'btn-wrapper'}>
                    <button disabled={value === maxValue} onClick={incOnClickHandler}>inc</button>
                    <button disabled={value !== maxValue} onClick={resetOnClickHandler}>reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
