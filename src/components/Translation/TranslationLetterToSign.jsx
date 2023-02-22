// Gets any image
const TranslationLetterToSign = ({letter}) => {
    let imageDir = `img_signs/${letter}.png`

    return (
        <>
            <img src={imageDir} alt={letter} width={100} height={100} />
        </>
    )
}
export default TranslationLetterToSign