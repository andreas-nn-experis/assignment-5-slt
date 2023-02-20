import { Link } from "react-router-dom"
import { storageDelete } from "../../utils/storage"
import { useUser } from "../../context/UserContext"
import { STORAGE_KEY_USER } from "../../const/storageKeys"

const ProfileActions = () => {

    const {setUser} = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {

            // Could have invoked a logout() function in the parent Profile component instead,
            // But since withAuth so conveniently handles refreshing and redirecting for us,
            // we'll just put this here so our code doesn't get fragmented.
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    return (
        <ul>
            <li><Link to="/translate">Translate</Link></li>
            <li><button>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Log out</button></li>
        </ul>
    )
}

export default ProfileActions