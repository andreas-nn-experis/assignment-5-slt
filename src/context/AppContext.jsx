import UserProvider from "./UserContext"

const AppContext = ({children}) => { // Children objects, anything rendered inside the app context, will be in 'props'. Destructured.
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}
export default AppContext