import React, {useState} from 'react';

export const SimplyCounter = () => {
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
                    <button disabled={!(value > 0)} onClick={resetOnClickHandler}>reset</button>
                </div>
            </div>
        </div>
    );
}