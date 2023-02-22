/*
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/storageKeys'
import TranslationSentenceToSigns from './TranslationSentenceToSigns'

const TranslationForm = () => {
    // Hooks
    const {register, handleSubmit, formState: { errors }} = useForm()

    // Local state
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    // Side effects

    // Event handlers
    const onSubmit = async ({sentenceToTranslate}) => {

        //const [translation] = await loginUser(sentenceToTranslate)
        <TranslationSentenceToSigns sentence="lost in translation"/>
    }

    // Render Functions
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="sentenceToTranslate">Translate: </label>
                    <input
                        type="text"
                        placeholder="johndoe"
                        {...register("username")} />
                </fieldset>
            </form>
        </>
    )
}
*/

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import TranslationSentenceToSigns from './TranslationSentenceToSigns'
import ReactDOM from 'react-dom/client';

function TranslationForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();        
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>Enter your name:
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                onSubmit={(e) => setName(e.target.value)}
            />
        </label>
        <input type="submit" />
        <TranslationSentenceToSigns sentence={name}/>
    </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TranslationForm />);

export default TranslationForm