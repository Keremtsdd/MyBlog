import { useNavigate } from 'react-router-dom'
import feride from '../images/feride.jpg'

function Home() {
    const navigate = useNavigate();
    return (
        <>

            <div className='bg-neutral-200'>

                <div className='flex selection:bg-amber-500'>

                    <h1 className='text-5xl mt-[15%] ml-[15%] max-w-xl text-center leading-snug'>
                        I started with my <strong className="font-extrabold">dreams</strong>,
                        now I <strong className="font-extrabold ">build </strong>
                        my own <strong className="font-extrabold">future </strong>
                        in lines of code. Software is my <strong className="font-extrabold "> passion </strong>
                        and  the <strong className="font-extrabold ">world </strong>
                        I create.
                    </h1>

                    <img className='h-[700px] w-[500px] mt-[5%] ml-[15%]' src={feride} alt="" />

                </div>


                <div>

                    <div className="h-[150px] w-full max-w-3xl mt-16  bg-gradient-to-r from-black via-gray-800 to-black flex items-center justify-center shadow-lg">
                        <h1 className="text-white text-5xl font-serif tracking-wide">This Is Me.</h1>
                    </div>

                    <div>
                        <p className='max-w-xl text-justify text-xl font-semibold ml-[7%] mt-[4%] leading-relaxed selection:bg-orange-400'>
                            I am currently studying Computer Programming at Atatürk University and continuously
                            improving myself in the field of software development. My early exposure to computers
                            sparked my passion for technology and motivated me to pursue a career in software.
                            I actively follow the latest developments in the tech world and work on various projects to enhance my skills.
                            Currently, I am working as a freelance junior developer, gaining valuable experience while building my career
                            in the software industry.
                        </p>

                    </div>

                </div>


                <div className='relative'>

                    <div className='flex justify-end mt-[2%] '>
                        <img
                            src="https://st.depositphotos.com/1072187/5106/i/450/depositphotos_51069903-stock-photo-abandoned-fishing-boat-on-beach.jpg"
                            alt="secondfoto"
                            className='w-[750px]'
                        />
                    </div>

                    <div className='h-[600px] w-[700px] bg-gradient-to-r from-black via-gray-800 to-black shadow-xl absolute top-[55%] right-[30%] rounded-sm border-l-2 border-black border-b-2'>

                        <p className='ml-[8%] mt-[15%] text-2xl text-white font-bold'>Technologies I Work With :</p>

                        <p className='max-w-xl text-justify text-lg ml-[8%] mt-[5%] leading-relaxed text-gray-300 selection:bg-orange-400'>
                            I specialize in front-end development using React, creating dynamic and responsive user interfaces.
                            On the back-end, I develop applications and web services with C# and MSSQL.
                            I have solid knowledge of core web technologies including JavaScript, HTML, and CSS.
                            Additionally, I frequently utilize frameworks such as Tailwind CSS and Bootstrap to enhance styling and layout.
                            For API testing and collaboration, I use tools like Postman, GitHub, and Visual Studio Code.
                        </p>

                        <div className="flex justify-center mt-20">
                            <button onClick={() => navigate('/Cv')} className='h-10 w-[120px] border-2 border-white text-white hover:bg-white hover:text-black duration-300 font-serif'>
                                See Full CV
                            </button>
                        </div>

                    </div>

                </div>

                <div className='h-[500px] w-full'></div>
            </div>

        </>
    )
}

export default Home