import React from 'react';
import useResources from './useResources';

const UserList = () => {
  const users = useResources('users');

  const renderItem = (user) => {
    return (
      <li key={user.id}>{user.name}</li>
    )
  };

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map( user => renderItem(user))}
      </ul>
    </div>
  );
};

export default UserList;
