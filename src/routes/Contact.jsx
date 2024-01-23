import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';
import ContactForm from '../components/ContactForm/ContactForm';
import "../index.css";
import { ScrollRestoration } from 'react-router-dom';

const Contact = () => {

    return (
    <>
        <ScrollRestoration/>
        <Nav/>
        <ContactForm />
        <Footer />
    </>
    )
}

export default Contact