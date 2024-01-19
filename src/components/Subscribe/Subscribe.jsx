import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react"
import { TextField, Button, IconButton } from "@mui/material"


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
            alert("Subscription successful!")
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="subscribe">
            <h2>Subscribe for Updates</h2><br/><br/>
            <TextField
                label="Email"
                fullWidth
                onChange={e=>setEmail(e.target.value)}
                InputProps={{
                    endAdornment: 
                        <Button 
                            onClick={handleSubmit} 
                            disabled={isLoading}
                            variant="contained"
                        >
                            Subscribe
                        </Button>
                }}
            />
        </div>
    )
}

export default Subscribe