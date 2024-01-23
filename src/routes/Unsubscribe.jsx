import Nav from '../Navigation/Nav';
import Footer from '../Footer/Footer';
import "../index.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import emailjs from "@emailjs/browser"
import { Padding } from '@mui/icons-material';
import { ScrollRestoration } from 'react-router-dom';

const Unsubscribe = () => {
    const [queryParameters] = useSearchParams();
    const email = queryParameters.get("email");

    const [status, setStatus] = useState("");

    useEffect(()=>{
        emailjs.init("TfTRNIUoU-EiWY6CY")

        const serviceId = "default_service";
        const templateId = "template_3q5i2fb";

        setStatus("Unsubscribing...");

        emailjs.send(serviceId, templateId, {
            name: "Unsubscribe",
            email: email,
            message: "Please remove from email list."
        }).then(() => {
            setStatus(`${email} has successfully been unsubscribed.`);
        }, (error) => {
            console.log(error.text);
            setStatus(`There was an error unsubscribing ${email}. Please try refreshing the page.`);
        });
    },[]);


    return (
    <>
        <ScrollRestoration />
        <Nav/>
            <div className='margintop' style={{textAlign: "center", padding: 20}}>
                <h2 className='margintop'>We're sad to see you leave :(</h2>
                {status}
            </div>
        <Footer />
    </>
    )
}

export default Unsubscribe