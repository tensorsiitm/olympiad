/* About Tensors: content taken from tensors.in */
const edu = [
    { title: 'JEE Mock Tests', text: 'Full-length, exam-accurate practice.' },
    { title: 'Olympiad Prep', text: 'Structured problem sets and guidance.' },
    { title: 'JoSAA Counselling', text: 'Choice-filling and admissions support.' },
    { title: 'Tensors LMS', text: 'Courses, tracking and the mentorship portal.' },
];

const work = [
    ['2024', 'Finance Workshop with Shaastra'],
    ['2023', 'De-Cov Ideathon with IMA Kerala'],
    ['2023', 'Free JoSAA Counselling Drive'],
    ['2022', 'Decov COVID-response campaign'],
    ['Web', 'Idukki Ministry website'],
    ['Event', 'Technical workshops at SOS Children’s Villages'],
];

function About() {
    return (
        <section className="section" id="about" aria-labelledby="about-title">
            <div className="container">
                <div className="split about-intro">
                    <header className="section-head reveal">
                        <p className="eyebrow">[ About Tensors ]</p>
                        <h2 id="about-title" className="section-title">Built by students, for students</h2>
                    </header>
                    <div className="about-copy reveal">
                        <p>Tensors began as an NGO at IIT Madras and grew into a student-run tech consultancy that ships real products and gives back. What we earn and learn goes back into social impact and mentorship.</p>
                        <p>The Olympiad is run by <strong>Tenment</strong>, our exam and mentorship vertical. Tenment runs JEE mock tests, Olympiad prep and JoSAA counselling for thousands of students every year, along with the Tensors LMS and a career guidance and mentorship portal for high schoolers.</p>
                        <div className="about-links">
                            <a href="https://tensors.in" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Visit tensors.in</a>
                            <a href="https://edu.tensors.in/" className="btn btn-ghost" target="_blank" rel="noopener noreferrer">Explore Tensors-Edu</a>
                        </div>
                    </div>
                </div>

                <ul className="edu-grid">
                    {edu.map((e) => (
                        <li className="edu reveal" key={e.title}><h3>{e.title}</h3><p>{e.text}</p></li>
                    ))}
                </ul>

                <div className="track reveal">
                    <h3 className="track-title">Some of our work</h3>
                    <ul className="track-list">
                        {work.map(([tag, text]) => (
                            <li key={text}><span>{tag}</span>{text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;
