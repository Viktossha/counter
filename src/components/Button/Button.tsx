import React from 'react';

type ButtonPropsType = {
    btnTitle: string
    onClick?: () => void
    disabled?: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button disabled={props.disabled} onClick={props.onClick}>
            {props.btnTitle}
        </button>
    );
};
