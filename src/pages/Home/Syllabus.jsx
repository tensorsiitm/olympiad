import { useCallback, useState } from 'react';
import ComingSoonModal from '../../components/ComingSoonModal';

const classes = ['8', '9', '10'];

function Syllabus() {
    const [paperFor, setPaperFor] = useState(null);
    const closePaper = useCallback(() => setPaperFor(null), []);

    return (
        <section className="section" id="prepare" aria-labelledby="prepare-title">
            <div className="container">
                <div className="split syllabus-intro">
                    <header className="section-head reveal">
                        <p className="eyebrow">[ Prepare ]</p>
                        <h2 id="prepare-title" className="section-title">Syllabus</h2>
                    </header>
                    <div className="syllabus-copy reveal">
                        <p>Each paper is based on the school syllabus of the student&rsquo;s own class, from any board. Your textbooks are the best preparation.</p>
                        <ul className="exam-subjects" aria-label="Subjects">
                            <li>Physics</li>
                            <li>Chemistry</li>
                            <li>Mathematics</li>
                            <li>Biology</li>
                            <li>Mental Aptitude</li>
                        </ul>
                    </div>
                </div>

                <div className="papers reveal" id="sample-papers">
                    <h3 className="papers-title">Sample papers</h3>
                    <ul className="paper-grid">
                        {classes.map((c) => (
                            <li key={c}>
                                <button type="button" className="paper" onClick={() => setPaperFor(c)}>
                                    <span className="paper-class">Class <strong>{c}</strong></span>
                                    <span className="paper-meta">Sample paper <span aria-hidden="true">&rarr;</span></span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <ComingSoonModal
                    open={paperFor !== null}
                    title={`Class ${paperFor} sample paper`}
                    onClose={closePaper}
                >
                    <p>Sample papers in the new exam pattern will be posted here soon.</p>
                </ComingSoonModal>
            </div>
        </section>
    );
}

export default Syllabus;
