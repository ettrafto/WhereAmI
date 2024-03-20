import React from 'react';
import { useParams } from 'react-router-dom';


import PlaceList from '../components/PlaceList';

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
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId )
    return <PlaceList items={loadedPlaces} /> 
};

export default UserPlaces;