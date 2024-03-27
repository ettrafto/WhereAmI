import React, { useCallback, useReducer } from 'react'

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';

import './PlaceForm.css'

const formReducer = (state, action) => {
    switch(action.type){
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs){
                {/* checks to see if their is any false isValid states and returns formIsValid as false */}
                if (inputId === action.inputId){
                    formIsValid = formIsValid && action.isValid;
                } else{
                    formIsValid = formIsValid && state.inputs [inputId].isValid;
                }
            }
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                    //ex. title: -> update title states
                    [action.inputId]: {value: action.value, isValid: action.isValid}
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const NewPlace = () => {
    const [formState, dispatch] = useReducer(formReducer,{
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    });

    {/* entire form validation */}
    {/* using useCallback to avoid infinite loop between this function and Input useEffect function,
    with empty dependiencies: always going to be reused  */}

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: 'INPUT_CHANGE', value: value, isValid:isValid, inputId: id})
    }, [dispatch]);


    const placeSubmitHandler = event => {
        event.preventDefault();
        //later replace with backend logic
        console.log(formState.inputs);
    };

    return <form className='place-form' onSubmit={placeSubmitHandler}>
        <Input 
            id="title"
            element='input' 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText='Please enter a valid title.' 
            onInput={inputHandler}
        />

        <Input 
            id="description"
            element='textarea' 
            label="Description" 
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]} 
            errorText='Please enter a valid description, at least 5 characters.' 
            onInput={inputHandler}
        />

        <Input 
            id="address"
            element='input' 
            label="Address" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText='Please enter a valid address.' 
            onInput={inputHandler}
        />

        <Button type='submit' disabled={!formState.isValid}>
            ADD PLACE
        </Button>
    </form>
};

export default NewPlace;