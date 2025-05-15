function Cv() {
    return (
        <div className="bg-neutral-100 min-h-screen py-16 px-4 flex flex-col items-center gap-20">

            <section className="text-center">
                <h1 className="text-5xl font-bold tracking-wide">Curriculum Vitae</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl">Full Stack Developer | Computer Programming Student</p>
            </section>

            <section className="bg-white rounded-sm shadow-lg p-10 max-w-4xl w-full">
                <h2 className="text-3xl font-semibold mb-6">My Journey</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    I'm currently studying Computer Programming at Atatürk University, constantly improving myself in software development.
                    My journey began with a passion for technology, evolving through hands-on projects and continuous learning.
                    Currently working as a freelance junior developer.
                </p>
                <div className="mt-6">
                    <a href="/KeremCv.pdf" download>
                        <button className="px-6 py-2 border border-black rounded-lg hover:bg-black duration-300 hover:text-white transition">
                            Download Full CV
                        </button>
                    </a>

                </div>
            </section>

            <section className="max-w-6xl w-full">
                <h2 className="text-4xl font-bold text-center mb-10">Skills & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SkillCard title="Frontend" skills={[
                        "React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS / Bootstrap"
                    ]} />
                    <SkillCard title="Backend" skills={[
                        "C# & .NET Core", "Microsoft SQL Server", "ASP.NET Web API"
                    ]} />
                    <SkillCard title="Tools" skills={[
                        "Postman", "Git / GitHub", "Visual Studio & VS Code"
                    ]} />
                </div>
            </section>

            <section className="max-w-4xl w-full">
                <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
                <div className="space-y-6">
                    <EducationCard year="2024 - Continues" school="Atatürk University" program="Associate Degree in Computer Programming" />
                    <EducationCard year="2024 - 2025" school="Wissen Akademie" program="Full Stack Programming Specialization Training" />
                </div>
            </section>

        </div>
    );
}

function SkillCard({ title, skills }) {
    return (
        <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <ul className="space-y-2 text-gray-700">
                {skills.map((skill, idx) => (
                    <li key={idx} className="before:content-['•'] before:mr-2">{skill}</li>
                ))}
            </ul>
        </div>
    );
}

function EducationCard({ year, school, program }) {
    return (
        <div className="bg-white rounded-md shadow-md p-6 text-center">
            <h3 className="text-xl font-bold">{year}</h3>
            <p className="text-lg font-medium">{school}</p>
            <p className="text-gray-600">{program}</p>
        </div>
    );
}

export default Cv;
