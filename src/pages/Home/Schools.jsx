import { asset } from '../../config';
import RegisterLink from '../../components/RegisterLink';

const steps = [
    'Register your school and nominate one teacher as the point of contact.',
    'Share the opportunity, collect student details and send them to us with the fee.',
    'We send roll numbers and sealed question papers before exam day.',
    'Students write the exam at your school. We handle evaluation, results and certificates.',
];

const provides = [
    'One teacher as point of contact',
    'Student details and the registration fee',
    'A hall on exam day',
    'Invigilators from its own staff',
];

const gets = [
    'Rs 500 per invigilating teacher, paid by Tensors',
    'Recognition on the Tensors website as a participating school',
    'Subsidised pricing on the Tensors School App',
    'An on-site session on entrance exams and careers by IIT Madras students, for the schools registering the most students',
];

function Schools() {
    return (
        <section className="section section-alt" id="schools" aria-labelledby="schools-title">
            <div className="container">
                <header className="section-head reveal">
                    <p className="eyebrow">[ For schools ]</p>
                    <h2 id="schools-title" className="section-title">Bring the Olympiad to your school</h2>
                    <p className="section-lede">No minimum number of students. A school with twenty registrations gets the same dispatch, invigilation payment and rank list as one with four hundred.</p>
                </header>

                <ol className="steps">
                    {steps.map((s, i) => (
                        <li className="step reveal" key={s}>
                            <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                            <p>{s}</p>
                        </li>
                    ))}
                </ol>

                <div className="school-cols">
                    <div className="school-col reveal">
                        <h3>What the school provides</h3>
                        <ul className="ticks">{provides.map((p) => <li key={p}>{p}</li>)}</ul>
                    </div>
                    <div className="school-col reveal">
                        <h3>What the school gets</h3>
                        <ul className="ticks">{gets.map((g) => <li key={g}>{g}</li>)}</ul>
                    </div>
                </div>

                <div className="school-cta reveal">
                    <RegisterLink className="btn btn-primary">Register your school</RegisterLink>
                    <a href={asset('Tensors-Olympiad-Brochure.pdf')} className="btn btn-ghost" download>School brochure</a>
                </div>
            </div>
        </section>
    );
}

export default Schools;
