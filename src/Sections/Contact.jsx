import { useState } from "react"
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        setIsSending(true);
        try {
            await emailjs.send("service_3hxekgi", "template_raxd79v", {
                from_name: formData.name,
                to_name: "Anish",
                from_email: formData.email,
                to_email: "anishgarg5914@gmail.com",
                message: formData.message
            }, "uD1z9WAsOLtzb1k-x")
            setIsSending(false);
            setFormData({
                name: "",
                email: "",
                message: ""
            })
            setAlertType("Success");
            setAlertMessage("Your message has been sent");
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        } catch (error) {
            setIsSending(false);
            console.log(error);
            setAlertType("danger");
            setAlertMessage("Something went wrong");
        }
    }

    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("Success");
    const [alertMessage, setAlertMessage] = useState("");

    return (
        <section id="contact" className="relative flex items-center c-space section-spacing">
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
            />
            {showAlert && (<Alert type={alertType} text={alertMessage} />)}
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Let's Talk</h2>
                    <p className="font-normal text-neutral-400">Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>
                </div>
                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name" className="field-input field-input-focus" placeholder="John Doe"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email" className="field-input field-input-focus" placeholder="johndoe@gmail.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="name">Full Name</label>
                        <textarea
                            id="message"
                            type="text"
                            name="message"
                            rows="4"
                            className="field-input field-input-focus" placeholder="Share your thoughts..."
                            autoComplete="name"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover:animation">{!isSending ? "Send" : "Sending"}</button>
                </form>
            </div>
        </section>
    )
}

export default Contact