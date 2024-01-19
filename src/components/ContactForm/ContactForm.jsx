import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react"
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import "./contactForm.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        emailjs.init("TfTRNIUoU-EiWY6CY")
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "default_service";
        const templateId = "template_3q5i2fb";
        try {
            setIsLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: name,
                email: email,
                message: message,
            });
            setName("")
            setEmail("")
            setMessage("")
            alert("Contact submission sent!")
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <input 
                type="text" 
                placeholder="Name" 
                onChange={e=>setName(e.target.value)}
                style={{padding:10}}
                value={name} />
            <input 
                type="text"
                required
                placeholder="Email" 
                onChange={e=>setEmail(e.target.value)}
                style={{padding:10}}
                value={email} />
            <textarea
                placeholder="Message"
                required
                onChange={e=>setMessage(e.target.value)}
                style={{padding:10}}
                value={message} />
            <Button 
                variant="contained"
                onClick={handleSubmit} 
                disabled={isLoading}
            >
                <SendIcon /> Send
            </Button>
        </div>
    )
}

export default Contact