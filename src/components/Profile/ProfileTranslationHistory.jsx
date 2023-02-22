import { Link } from "react-router-dom"
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {

    const translationList = translations
    .map((translation, index) => <ProfileTranslationHistoryItem key={index + '-' + translation} translation={translation} />)
    return (
        <section>
            <h4>Your translation history:</h4>

            <p>{translationList.length === 0 && <Link to="/translation">Click here to get your first translation</Link>}</p>

            <ul> 
                {translationList} 
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory