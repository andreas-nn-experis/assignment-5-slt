import {createHeaders} from './index'

const apiUrl = process.env.REACT_APP_API_URL

const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)

        if (!response.ok) {
            throw new Error('Could not fullfill request.')
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}

const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST', // POST: create a resource
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })

        if (!response.ok) {
            throw new Error(`Could not create username: "${username}".`)
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}

export const loginUser = async (username) => {
    const [checkError, user] = await checkForUser(username)

    if (checkError != null) {
        return [checkError, null]
    }

    if (user.length > 0) {
        return [null, user.pop()]
    }
    // If previous conditions were false, nothing went wrong, but the user does NOT exist yet.
    return await createUser(username)
}