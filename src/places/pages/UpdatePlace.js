import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";

import './PlaceForm.css'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scraper in the world!',
        imageUrl: 'https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg',
        address: '20 W 34th St, New York, NY 10001', 
        coordinates: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1',
    },
    {
        id: 'p2',
        title: 'Mount Mansfield',
        description: 'Tallest Mountian in Vermont',
        imageUrl: 'https://urbanpostmortem.files.wordpress.com/2013/04/dsc_0161_pe.jpg',
        address: 'Underhill, VT 05489', 
        coordinates: {
            lat: 44.4721349,
            lng: -72.8300114
        },
        creator: 'u2',
    }
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if(!identifiedPlace){
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
            );
    }

    return( 
        <form className="place-form">
            <Input 
                id="title" 
                element="input" 
                type="text" 
                label="title" 
                validators={VALIDATOR_REQUIRE} 
                errorText="Please enter a valid title."
                onInput={() => {}}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input 
                id="description" 
                element="textarea" 
                label="Description" 
                validators={VALIDATOR_MINLENGTH} 
                errorText="Please enter a valid description (min. 5 characters)."
                onInput={() => {}}
                value={identifiedPlace.description}
                valid={true}
            />

            <Button type="submit" disabled={true}>
                UPDATE PLACE
            </Button>
        </form>
    );

};

export default UpdatePlace;