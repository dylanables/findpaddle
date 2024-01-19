import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react"
import { Container, TextField, Button, IconButton } from "@mui/material"
import "./subscribe.css";

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        emailjs.init("TfTRNIUoU-EiWY6CY")
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "default_service";
        const templateId = "template_cjdwmpa";
        try {
            setIsLoading(true);
            await emailjs.send(serviceId, templateId, {
                email: email,
            });
            setEmail("")
            alert("Subscription successful!")
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="subscribe">
                <h2>Subscribe for Updates</h2>
                <p>Get notified of all the latest developments in pickleball paddles and feature launches!</p><br/>
                <TextField
                    placeholder="Email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    InputProps={{
                        endAdornment: 
                            <Button 
                                onClick={handleSubmit} 
                                disabled={isLoading}
                                variant="contained"
                            >
                                Subscribe
                            </Button>,
                        className: "lightInput",
                    }}
                />
        </div>
    )
}

export default Subscribe