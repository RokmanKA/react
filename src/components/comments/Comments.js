import {useForm} from "react-hook-form";

import {createComments} from "../../services";

const Comments = () => {

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: 'name',
                body: 'body',
                email: 'example@gmail.com'
            }
        }
    );
    const submit = (obj) => {
        createComments(obj).then(({data}) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('name', {required: true})}/>
                {
                    errors.name && <span>Field si required</span>
                }
                <input type='text' {...register('body')}/>
                <input type='text' {...register('email')}/>
                <input type='submit'/>
            </form>
        </div>
    );
};

export {Comments};