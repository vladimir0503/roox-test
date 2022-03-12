import React from 'react';
import { useParams } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { loadUser } from '../../../api/api';
import UserForm from './UserForm/UserForm';
import Button from '../../common/Button/Button';

import './UserProfile.scss';

type Inputs = {
    name: string,
    userName: string,
    email: string,
    street: string,
    city: string,
    zipCode: string,
    phone: string,
    website: string,
};

const UserProfile = (): JSX.Element => {
    const [user, setUser] = React.useState<any>({});
    const [editMode, setMode] = React.useState<boolean>(false);

    const { id } = useParams();

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(JSON.stringify(data));
    };

    const getUserData = async (id: string | undefined) => {
        const data = await loadUser(id);
        setUser(data);
    };

    React.useEffect(() => {
        getUserData(id)
    }, [id]);


    return (
        <div className='UserProfile'>
            <div className='titleBock'>
                <h1>Профиль пользователя</h1>
                <Button onClick={() => setMode(!editMode)}>Редактировать</Button>
            </div>
            <UserForm user={user} editMode={editMode} onSubmit={onSubmit} />
        </div>
    );
};

export default UserProfile;