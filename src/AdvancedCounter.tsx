import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './AdvancedCounter.module.css'

export const AdvancedCounter = () => {
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [currentValue, setCurrentValue] = useState(startValue)
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        let start = localStorage.getItem('startValue')
        let max = localStorage.getItem('maxValue')
        if (start && max) {
            setStartValue(JSON.parse(start))
            setMaxValue(JSON.parse(max))
            setCurrentValue(JSON.parse(start))
        }
    }, []);

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(0)
        setIsFocused(true)
        setMaxValue(+e.currentTarget.value)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(0)
        setIsFocused(true)
        setStartValue(+e.currentTarget.value)
    }

    const incOnClickHandler = () => {
        if (currentValue < maxValue) {
            setCurrentValue(currentValue + 1)
        }
    }

    const resetOnClickHandler = () => {
        setCurrentValue(startValue)
    }

    const setOnClickHandler = () => {
        setIsFocused(false)
        setCurrentValue(startValue)
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    const incorrectValue = maxValue < 0 || startValue < 0 || maxValue < startValue || maxValue === startValue
    const text = incorrectValue ? 'Incorrect value' : 'Enter values and press "set"'

    return (
        <div className={styles.wrapper}>

            <div className={styles.settings}>
                <div className={styles.inputs}>
                    <label>max value:
                        <input type="number" name="maxValue" value={maxValue} onChange={onChangeMaxValueHandler}/>
                    </label>
                    <label>start value:
                        <input type="number" name="startValue" value={startValue} onChange={onChangeStartValueHandler}/>
                    </label>
                </div>
                <div className={styles.btnBlock}>
                    <button onClick={setOnClickHandler} disabled={!isFocused || incorrectValue}>set</button>
                </div>
            </div>


            <div className={styles.counter}>
                <div
                    className={maxValue === currentValue ? styles.block + ' ' + styles.error : (isFocused ? styles.block + ' ' + styles.blockText : styles.block)}>{isFocused ? text : currentValue}</div>
                <div className={styles.btnWrapper}>
                    <button onClick={incOnClickHandler} disabled={maxValue === currentValue}>inc</button>
                    <button onClick={resetOnClickHandler}>reset</button>
                </div>
            </div>

        </div>
    );
};