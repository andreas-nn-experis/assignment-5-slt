import TranslationSentenceToSigns from "../components/Translation/TranslationSentenceToSigns"
import TranslationForm from "../components/Translation/TranslationForm"
import withAuth from "../hoc/withAuth"

const Translate = () => {
    return (
        <>
            <h1>Translation</h1>
            <section id="translated-signs">
                <TranslationForm />
                <TranslationSentenceToSigns sentence="HELLO         ./?.-=12345AAAAA"/>
            </section>
        </>
    )
}
export default withAuth(Translate)