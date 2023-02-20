import { createContext, useContext, useState } from "react"
import { storageRead } from "../utils/storage"
import { STORAGE_KEY_USER } from "../const/storageKeys"

// Context -> exposes the state - creating a context and pulling out the context's value from the context item.
const UserContext = createContext() // TODO: camelCasing or PascalCasing?

// This saves us from having to use the createContext function in every single component we want to read the context value. 
export const useUser = () => {
    return useContext(UserContext) // This will provide the state that exists in this context. Object: {user, setUser}.
}

// Provider -> manages the state
// We will define the state above in our provider.
const UserProvider = ({children}) => {
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));

    const state = {
        user,
        setUser
    }

    // This is the component we want to return:
    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider
// We're exposing the provider, not the context. The context we are exposing with our custom useUser() hook.