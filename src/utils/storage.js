const validateKey = key => {
    if (!key || typeof key !== "string"){
        throw new Error("Invalid storage key provided")
    }
}

export const storageSave = (key, value) => {
    validateKey(key)
    if (!value){
        throw new Error("StorageSave: No value provided for " + key)
    }
    sessionStorage.setItem(key, JSON.stringify(value)) // Because the key MUST be a string, not a JS object.
}

export const storageRead = key => {
    validateKey(key)
    const data = sessionStorage.getItem(key)
    if (data) {
        return JSON.parse(data) // The inverse of .stringify().
    }
    return null // If no data is found for that key.
}

export const storageDelete = key => {
    validateKey(key)

    sessionStorage.removeItem(key)
}