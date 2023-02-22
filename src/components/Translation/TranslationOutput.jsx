import { lettersToSign } from "./TranslationForm"

const TranslationOutput =  () => {
    console.log(lettersToSign)
    let renderedLetters = lettersToSign.map((letter, index) => {
        return(
            <div key={index}>
                <img src= {`individial_signs/${letter}.png`} alt = {letter} width="100"/>
            </div>
        )
    })
    return (
        <>
            {renderedLetters}
        </>

    )
}
export default TranslationOutput