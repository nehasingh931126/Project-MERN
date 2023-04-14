import React from 'react';
import UsersList from '../components/UsersList';

const Users = ()=> {
    const USERS = [
      {
        id: "1",
        image:
          "https://images.pexels.com/photos/15955945/pexels-photo-15955945.jpeg?auto=compress&cs=tinysrgb&h=350",
        name: "Neha Singh",
        places: 3,
      },
    ];

    return <UsersList items={USERS}></UsersList>;
}


export default Users;