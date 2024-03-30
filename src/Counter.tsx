import React, {useState} from 'react';

//type ValuesType = 0 | 1 | 2 | 3 | 4 | 5

export const Counter = () => {

    let [value, setValue] = useState<number>(0)

    const increaseCounterHandler = () => {
        let newValue = value + 1
        setValue(newValue)
    }

    const resetCounterHandler = () => {
        setValue(0)
    }

    return (
        <div className='block'>
            <div className={value === 5 ? 'counter red' : 'counter'}>
                {value}
            </div>
            <div className='btns-wrapper'>
                <button disabled={value === 5} onClick={increaseCounterHandler}>inc</button>
                <button disabled={value === 0} onClick={resetCounterHandler}>reset</button>
            </div>
        </div>
    );
};