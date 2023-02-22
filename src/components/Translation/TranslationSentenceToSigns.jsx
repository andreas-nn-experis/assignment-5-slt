import TranslationLetterToSign from "./TranslationLetterToSign"

const TranslationSentenceToSigns = ({sentence}) => {

    // Split the input sentence into an array of individual characters.
    let characterArray = sentence.split('')

    // For each character, retrieve it's sign (image) using 'TranslationLetterToSign'.
    const translationList = characterArray.map((currElement) => {
        // Signs can only be retrieved for English-language letters (A-Z). Anything else is skipped.
        const regEx = /[a-zA-Z]/
        if (regEx.test(currElement)) {
            return <TranslationLetterToSign letter={currElement.toLowerCase()}/>
        }
        return null // Return null for anything else (whitespace, punctuation, numbers, etc.).
    })

    // Return all retrieved signs.
    return (
        <section id="translated-signs">
            {translationList}
        </section>
    )

}
export default TranslationSentenceToSigns