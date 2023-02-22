import { translateClearHistory } from "../../api/translate"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"

const ProfileActions = () => {
    const {user, setUser} = useUser()

    const handleLogoutClick = () => {
        if (window.confirm("are you sure?")){
            //Send an event to the parent!
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
}

    const handleClearHistoryClick = async () => {
        if (!window.confirm(`Are you sure?\n This can not be undone!`)){
            return
        }

        const [clearError] = await translateClearHistory(user.id)
        
        if (clearError !== null){
            //Do something about this!
            return
        }

        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return (
        <ul>
            <li><button onClick={ handleClearHistoryClick }>Clear history</button></li>
            <li><button onClick={ handleLogoutClick }>Log out</button></li>
        </ul>
    )
}
export default ProfileActions