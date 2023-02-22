import { addTranslate } from "../api/translate"
import TranslationForm from "../components/Translation/TranslationForm"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const Translation = (props) => {

    const {user, setUser} = useUser()

    const handleTranslateClicked = async (translation) => {
        const [error, updatedUser] = await addTranslate(user, translation)
        if (error !== null){
            alert("Please type something to translate!")
            return
        }
        //Keep UI state and server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)

        //Updating the context state
        setUser(updatedUser)
        console.log(updatedUser)


        

    }
    
    return (
        <>
            <h1>Lost in Translation</h1>
            <section id="translator-input">
                <TranslationForm onTranslate={handleTranslateClicked} />
            </section>
        </>
    )
}
export default withAuth(Translation)