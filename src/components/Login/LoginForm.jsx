import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [loading, setLoading] = useState(false)

    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, user] = await loginUser(username)
        console.log('Error: ', error)
        console.log('User: ', user   )
        setLoading(false);
    }
    console.log(errors)

    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span>Username required.</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>Username must be at least 3 characters long.</span>
        }
    })()
    
    return (
        <>
            <h2>What's your name?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        placeholder="johndoe"
                        {...register("username", usernameConfig)} />
                    { errorMessage }
                </fieldset>

                {
                // Button disabled if 'loading' is true. Only show 'Logging in...' text if 'loading' is true.
                }
                <button type="submit" disabled={loading}>Continue</button>

                {loading && <p>Logging in...</p>}
            </form>
        </>
    )
}
export default LoginForm