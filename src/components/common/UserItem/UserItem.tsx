import React from 'react';
import { Link } from 'react-router-dom';

import './UserItem.scss';

type UserItemProps = {
    user: {
        name: string,
        address: {
            city: string
        },
        company: {
            name: string
        },
        id: string
    }
};

const UserItem = ({user}: UserItemProps): JSX.Element => {
    return (
        <div className='UserItem'>
            <div className='userInfo'>
                <p><span>ФИО:</span> {user.name}</p>
                <p><span>город:</span> {user.address.city}</p>
                <p><span>компания:</span> {user.company.name}</p>
            </div>
            <div className='profileLink'>
                <Link to={`/user/${user.id}`} >Подробнее</Link>
            </div>
        </div>
    );
};

export default UserItem;