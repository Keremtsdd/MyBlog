import { FaEnvelope, FaMapMarkerAlt, } from "react-icons/fa";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full flex flex-col md:flex-row overflow-hidden">

                <div className="md:w-1/2 p-10">
                    <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your.email@example.com"
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Your message..."
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="md:w-1/2 bg-yellow-400 text-black flex flex-col justify-center p-10">
                    <h3 className="text-3xl font-bold mb-6">Contact Info</h3>
                    <div className="space-y-5 text-lg">
                        <p className="flex items-center gap-3"><FaMapMarkerAlt />Istanbul / Turkey</p>
                        <p className="flex items-center gap-3"><FaEnvelope /> tast.kerem@gmail.com</p>
                    </div>

                    <div className="mt-10 flex space-x-4 text-2xl">
                        <Link to={'https://github.com/Keremtsdd'} target='_blank'>
                            <span><GitHubIcon /></span>
                        </Link>
                        <Link to={'https://www.linkedin.com/in/kerem-ta%C5%9Fdemir-164337349/'} target='_blank'>
                            <span><LinkedInIcon /></span>
                        </Link>
                        <Link to={'https://www.instagram.com/keremmtd/'} target='_blank'>
                            <span><InstagramIcon /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
