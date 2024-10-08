import React, {ChangeEvent, useState} from 'react';
import {isDisabled} from "@testing-library/user-event/dist/utils";
import {Button} from "../Button/Button";

//type ValuesType = 0 | 1 | 2 | 3 | 4 | 5

export const Counter = () => {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [isDisabled, setDisabled] = useState<boolean>(true)

    const increaseCounterHandler = () => {
        let newValue = startValue + 1
        setStartValue(newValue)
    }

    const resetCounterHandler = () => {
        setStartValue(0)
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        maxValue = +e.currentTarget.value; //с помощью унарного оператора "+" переводим строку в число
    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        startValue = +e.currentTarget.value;
    }

    const onClickSettingsHandler = () => {
        setStartValue(startValue);
        setMaxValue(maxValue);
    }

    return (
        <>
            <div className='block settings'>
                <div className="label-wrapper">
                    <div className="input-wrapper">
                        <label htmlFor="max">max value:</label>
                        <input type="number" name="max" id="max" onChange={onChangeMaxHandler}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="min">start value:</label>
                        <input type="number" name="min" id="min" onChange={onChangeStartHandler}/>
                    </div>
                </div>
                <div className='btns-wrapper'>
                    <Button btnTitle={'set'} onClick={onClickSettingsHandler}/>
                </div>
            </div>

            <div className='block'>
                <div className={startValue === maxValue ? 'counter red' : 'counter'}>
                    {startValue}
                </div>
                <div className='btns-wrapper'>
                    <Button disabled={startValue === maxValue ? isDisabled : !isDisabled} btnTitle={'inc'} onClick={increaseCounterHandler}/>
                    <Button disabled={startValue === 0 ? isDisabled : !isDisabled} btnTitle={'reset'} onClick={resetCounterHandler}/>
                </div>
            </div>
        </>
    )
        ;
};