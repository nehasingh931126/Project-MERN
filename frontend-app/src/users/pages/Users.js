import React from 'react';
import UsersList from '../components/UsersList';

const Users = ()=> {
    const USERS = [{id: '1', image:'http://', name: 'Neha Singh', places: 3 }];

    return <UsersList items={USERS}></UsersList>;
}


export default Users;