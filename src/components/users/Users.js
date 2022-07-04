import {useForm} from "react-hook-form";

import {createUser} from "../../services";

const Users = () => {

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: 'name',
                username: 'username',
                email: 'example@gmail.com'
            }
        }
    );
    const submit = (obj) => {
        createUser(obj).then(result => console.log(result))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('name', {required: true})}/>
                {
                    errors.name && <span>Field si required</span>
                }
                <input type='text' {...register('username')}/>
                <input type='text' {...register('email')}/>
                <input type='submit'/>
            </form>
        </div>
    );
};

export {Users};