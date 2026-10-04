const sections = [
    {
        name: 'Section A',
        count: 50,
        text: 'Single-correct questions, 10 each from five subjects.',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Mental Aptitude'],
    },
    {
        name: 'Section B',
        count: 40,
        text: 'Questions in mixed formats, 10 each from four subjects.',
        subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    },
];

function Format() {
    return (
        <section className="section section-alt" id="format" aria-labelledby="format-title">
            <div className="container split">
                <header className="section-head reveal">
                    <p className="eyebrow">[ Exam format ]</p>
                    <h2 id="format-title" className="section-title">90 questions. Three hours. Two sections.</h2>
                    <ul className="format-notes">
                        <li>A separate paper and a separate rank list for each class.</li>
                        <li>Based on the Class 8&ndash;10 school syllabus, from any board and any medium. No coaching needed.</li>
                        <li>Written offline at the student&rsquo;s own school, invigilated by its teachers.</li>
                    </ul>
                </header>

                <ul className="exam-sections">
                    {sections.map((s) => (
                        <li className="exam-section reveal" key={s.name}>
                            <div className="exam-section-head">
                                <span className="subj-n">{s.count}</span>
                                <div>
                                    <h3>{s.name}</h3>
                                    <p>{s.text}</p>
                                </div>
                            </div>
                            <ul className="exam-subjects" aria-label={`${s.name} subjects`}>
                                {s.subjects.map((subj) => <li key={subj}>{subj}</li>)}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Format;
