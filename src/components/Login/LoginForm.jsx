import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/user';
import { storageSave } from '../../utils/storage';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { STORAGE_KEY_USER } from '../../const/storageKeys';

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    // Hooks
    const {register, handleSubmit, formState: { errors }} = useForm()
    const {user, setUser} = useUser()
    const navigate = useNavigate()

    // Local state
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    // Side effects
    useEffect(() => {
        if (user !== null) {
            navigate('/translation') // Navigating website to /translation when logged in
        }
    }, [user, navigate]) // Empty dependencies - only run once. DELETE COmMENt TODO

    // Event handlers
    const onSubmit = async ({username}) => {
        setLoading(true);

        const [error, userResponse] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        // Data about the user is put into local storage.
        // Normally only a token would be stored, not the actual user object.
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }

        setLoading(false);
    }

    // Render Functions
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
                        placeholder="exampleName"
                        {...register("username", usernameConfig)} />
                    { errorMessage }
                </fieldset>

                {
                // Button disabled if 'loading' is true. Only show 'Logging in...' text if 'loading' is true.
                }
                <button type="submit" disabled={loading}>Continue</button>

                {loading && <p>Logging in...</p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}
export default LoginForm