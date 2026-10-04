const faqs = [
    {
        q: 'Who can write the Olympiad?',
        a: 'Students of Classes 8, 9 and 10, from any board and any medium. There is a separate paper and a separate rank list for each class.',
    },
    {
        q: 'When and where is the exam?',
        a: 'On 31 October 2026, offline, at the student’s own school. The school provides the hall and invigilators from its own staff. Every registered school is also informed directly, well in advance.',
    },
    {
        q: 'What is the pattern and syllabus?',
        a: '90 questions in three hours, in two sections. Section A has 50 single-correct questions, 10 each from Physics, Chemistry, Mathematics, Biology and Mental Aptitude. Section B has 40 questions in mixed formats, 10 each from Physics, Chemistry, Mathematics and Biology. It is based on the school syllabus of the student’s own class.',
    },
    {
        q: 'Are sample papers available?',
        a: 'Sample papers for each class are coming soon and will be posted on this website.',
    },
    {
        q: 'How can students register?',
        a: 'Students register through their school, for Rs 49 per student. The last date to register is 15 October 2026.',
    },
    {
        q: 'Is there any payment later for results, certificates or the campus trip?',
        a: 'No. The registration fee is the only payment. Certificates, results, the career guidance sessions and the campus trip cost the student nothing. The fee is not refundable unless there is a serious issue.',
    },
    {
        q: 'When are results declared, and what does a student receive?',
        a: 'Results are declared shortly after the exam. Every participant gets a certificate. Toppers win cash prizes from a Rs 1,00,000 pool, the top 30 in each class get free career guidance from IIT Madras students, and the topper of each class gets a trip to IIT Madras.',
    },
    {
        q: 'What does the Shaastra trip cover?',
        a: 'Shaastra is the annual tech fest of IIT Madras. The topper of each class gets a fully funded trip to see the campus, the work happening at IIT Madras, and the fest itself.',
    },
    {
        q: 'Is this an official IIT Madras exam?',
        a: 'No. Tensors is a student-run team at IIT Madras. The paper is set by IIT Madras students and the toppers visit campus, but this is not an Institute examination.',
    },
    {
        q: 'What is Tensors?',
        a: (
            <>
                A student-run organisation founded at IIT Madras, working across outreach and partnerships, technology, and exams and mentorship. It began as an NGO, and funds raised through exams and counselling programmes go back into its social initiatives. See <a href="https://tensors.in" target="_blank" rel="noopener noreferrer">tensors.in</a>.
            </>
        ),
    },
];

function FAQ() {
    return (
        <section className="section section-alt" id="faq" aria-labelledby="faq-title">
            <div className="container faq-layout">
                <header className="section-head reveal">
                    <p className="eyebrow">[ FAQ ]</p>
                    <h2 id="faq-title" className="section-title">Frequently asked questions</h2>
                    <p className="section-lede">Can&rsquo;t find your answer? <a href="#contact">Talk to the team</a>.</p>
                </header>

                <div className="faq-list">
                    {faqs.map((f) => (
                        <details className="faq-item reveal" key={f.q}>
                            <summary>{f.q}</summary>
                            <p>{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
