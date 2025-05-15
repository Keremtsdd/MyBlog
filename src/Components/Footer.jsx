
const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-4 flex justify-between items-center text-sm font-sans">
            <nav>
                <a href="/" className="mx-3 hover:text-gray-400 transition-colors">Home</a>
                <a href="/cv" className="mx-3 hover:text-gray-400 transition-colors">CV</a>
                <a href="/contact" className="mx-3 hover:text-gray-400 transition-colors">Contact</a>
            </nav>

            <div>
                <h1 class="text-xs text-gray-500 text-center">
                    © 2025 Kerem Taşdemir. All rights reserved.
                </h1>

            </div>
        </footer>
    );
};

export default Footer;
