export const storageSave = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value)) // Because the key MUST be a string, not a JS object.
}

export const storageRead = key => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data) // The inverse of .stringify().
    }
    return null // If no data is found for that key.
}