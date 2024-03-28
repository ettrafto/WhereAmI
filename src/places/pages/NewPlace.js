import React from 'react'

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css'



const NewPlace = () => {
    const [formState, inputHandler] = useForm({
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
    },false);
    
    
    {/* entire form validation */}
    {/* using useCallback to avoid infinite loop between this function and Input useEffect function,
    with empty dependiencies: always going to be reused  */}


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