import React from 'react';
import UserItem from '../../common/UserItem/UserItem';
import Spinner from '../../common/Spinner/Spinner';

import './UserList.scss';

type UserListItems = {
  users: []
};

const UserList = ({ users }: UserListItems): JSX.Element => {
  return (
    <div className='UsersList'>
      {
        Boolean(users.length)
          ? <>
            <h1>Список пользователей</h1>
            <div>
              {users.map((user, i) => <UserItem key={i} user={user} />)}
            </div>
            <div className='usersCount'>
              <p>Найдено {users.length} пользователей</p>
            </div>
          </>
          : <Spinner />
      }
    </div>
  );
};

export default UserList;