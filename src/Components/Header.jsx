import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <div className='pt-16'>
                    <div className="h-24 w-full bg-white/70 shadow-xl flex items-center justify-between px-32 fixed top-0 left-0 right-0 z-50 backdrop-blur-md">

                        <div className="ml-[10%]">
                            <h1 onClick={() => navigate('/')} className="font-semibold text-lg cursor-pointer">I'm Kerem Taşdemir ,</h1>
                            <h1 onClick={() => navigate('/')} className="text-lg ml-8 cursor-pointer">
                                Full Stack <span className="bg-yellow-500 text-black">.NET and Web </span> Developer
                            </h1>
                        </div>

                        <div className='flex space-x-6 ml-[45%] text-lg font-serif'>
                            <span onClick={() => navigate('/')} className='cursor-pointer hover:text-neutral-400 duration-300'>Home</span>
                            <span onClick={() => navigate('/Cv')} className='cursor-pointer hover:text-neutral-400 duration-300'>Cv</span>
                            <span onClick={() => navigate('/Contact')} className='cursor-pointer hover:text-neutral-400 duration-300'>Contact</span>
                        </div>

                        <div className="flex space-x-4 items-center">
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
            </header>
        </>
    );
}

export default Header;
