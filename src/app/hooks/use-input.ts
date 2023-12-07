import { useState } from "react";

const useInput = (validateValue:any) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid= validateValue(enteredValue);
    const isError = !valueIsValid  && isTouched;

    const valueChangeHandler = (event:React.ChangeEvent<HTMLInputElement>): void => {
        setEnteredValue(event.target.value);
    };

    const areaChangeHandler = (event:React.ChangeEvent<HTMLTextAreaElement>): void => {
        setEnteredValue(event.target.value);

    }

    const inputBlurHandler = (event:React.ChangeEvent<HTMLInputElement>): void => {
        setIsTouched(true);   
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: isError,
        areaChangeHandler,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

};

export default useInput;