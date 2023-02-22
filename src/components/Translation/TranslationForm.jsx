import { useForm } from "react-hook-form"
import TranslationOutput from "./TranslationOutput"

export let lettersToSign = []

const TranslationForm = ({onTranslate}) => {

    const { register, handleSubmit} = useForm()

    let letters = ""

    //handling the onTranslate
    const onSubmit = ({ translatedText }) => { 
        letters = translatedText
        lettersToSign = letters.split("")
        onTranslate(translatedText) 
    }

    //Handling the translation
    const handleTranslation = e => {
        const {letter, value} = e.target
        console.log({letter} + " " + value)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="translatedText">⌨️ | </label>
                <input type="text" {...register("translatedText")} placeholder="Type here to translate" 
                onChange={handleTranslation} />
                <button type="translate">🡆</button>
            </fieldset>
            <fieldset>
                <TranslationOutput />
            </fieldset>
        </form>
    )
}
export default TranslationForm