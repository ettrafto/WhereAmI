import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    //dummy constant
    
    const USERS = [{id: 'u1', name: "Harry Gimber", image: 'https://compote.slate.com/images/eb00a5c5-ba32-4ada-8b6e-ddf0fe6c350b.jpeg?crop=1560%2C1040%2Cx0%2Cy0', places: 3}];
    return <UsersList items={USERS} />
}

export default Users;