import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

import './UsersList.css';



const UsersList = props => {
    //we return no users found or list of users 
    if(props.items.length === 0){
        return <div className="center">
            <Card>
                <h2>No Users found</h2>
            </Card>
        </div>
    }
    //list of users
    return <ul className='users-list'>
        {props.items.map(user => (
            <UserItem
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.places} 
                />
        ))}
    </ul>
}

export default UsersList;