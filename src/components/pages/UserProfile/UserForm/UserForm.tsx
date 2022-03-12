import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import './UserForm.scss';

type UserFormProps = {
    user: {
        name: string,
        username: string,
        email: string,
        address: {
            street: string,
            city: string,
            zipcode: string,
        },
        phone: string,
        website: string
    },
    editMode: boolean,
    onSubmit: SubmitHandler<Inputs>
}

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

const UserForm = ({ user, editMode, onSubmit }: UserFormProps): JSX.Element => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<Inputs>();

    React.useEffect(() => {
        const obj: any = {
            'name': user.name,
            'userName': user.username,
            'email': user.email,
            'street': user.address?.street,
            'city': user.address?.city,
            'zipCode': user.address?.zipcode,
            'phone': user.phone,
            'website': user.website,
        };

        if (user) {
            Object.keys(obj).forEach(key => setValue<any>(key, obj[key]))
        };
    }, [user]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'fromWrapper'}>
                <div className='formItem'>
                    <label>Name</label>
                    <input className={(errors.name) && 'error'} disabled={!editMode} {...register("name", { required: true })} />
                </div>
                <div className='formItem'>
                    <label>User name</label>
                    <input className={(errors.userName) && 'error'} disabled={!editMode} {...register("userName", { required: true })} />
                </div>
                <div className='formItem'>
                    <label>E-mail</label>
                    <input className={(errors.email) && 'error'} disabled={!editMode} {...register("email", { required: true })} />
                </div>
                <div className='formItem'>
                    <label>Street</label>
                    <input className={(errors.street) && 'error'} disabled={!editMode} {...register("street", { required: true })} />
                </div>
                <div className='formItem'>
                    <label>City</label>
                    <input className={(errors.city) && 'error'} disabled={!editMode} {...register("city", { required: true })} />
                </div>
                <div className='formItem'>
                    <label>Zip-code</label>
                    <input className={(errors.zipCode) && 'error'} disabled={!editMode} {...register("zipCode", { required: true })} />
                </div>
                <div className='formItem'>
                    <label>Phone</label>
                    <input className={(errors.phone) && 'error'} disabled={!editMode} {...register("phone", { required: true })} />
                </div>
                <div className='formItem'>
                    <label>Website</label>
                    <input className={(errors.website) && 'error'} disabled={!editMode} {...register("website", { required: true })} />
                </div>
                <div className='formItem'>
                    <label>Comment</label>
                    <textarea />
                </div>
            </div>
            <div className='submitBlock'>
                <input disabled={!editMode} type="submit" />
            </div>
        </form>
    )
}

export default UserForm;