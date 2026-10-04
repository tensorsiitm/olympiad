import { asset } from '../../config';
import RegisterLink from '../../components/RegisterLink';

const facts = [
    { label: 'Classes', value: '8, 9, 10' },
    { label: 'Questions', value: '90 in 3 hours' },
    { label: 'Prize pool', value: 'Rs 1,00,000' },
    { label: 'Register by', value: '15 October 2026' },
    { label: 'Exam date', value: '31 October 2026' },
];

function Hero() {
    return (
        <section className="hero" id="top" aria-labelledby="hero-title">
            <div className="container hero-grid">
                <div className="hero-copy">
                    <p className="eyebrow reveal">[ Born out of IIT Madras ]</p>
                    <h1 id="hero-title" className="hero-title reveal">
                        <span className="hero-kicker">Tensors</span>
                        National Olympiad <span className="accent">2026</span>
                    </h1>
                    <p className="hero-tagline reveal">Challenge. Learn. Grow.</p>
                    <dl className="hero-dates reveal">
                        <div className="hero-date">
                            <dt className="hero-date-label">Register by</dt>
                            <dd><time dateTime="2026-10-15">Thursday, 15 October 2026</time></dd>
                            <dd className="hero-date-note">Last date for registration</dd>
                        </div>
                        <div className="hero-date">
                            <dt className="hero-date-label">Exam day</dt>
                            <dd><time dateTime="2026-10-31">Saturday, 31 October 2026</time></dd>
                            <dd className="hero-date-note">3 hours, offline at your own school</dd>
                        </div>
                    </dl>
                    <div className="hero-cta reveal">
                        <RegisterLink className="btn btn-primary">Register now</RegisterLink>
                        <a href={asset('Tensors-Olympiad-Brochure.pdf')} className="btn btn-ghost" download>Download brochure</a>
                    </div>
                </div>

                <figure className="hero-poster reveal">
                    <img
                        src={asset('olympiad-poster.jpeg')}
                        alt="Official poster for the Tensors National Olympiad 2026, for Classes 8 to 10, with a prize pool of Rs 1,00,000."
                        width="720"
                        height="1018"
                        fetchpriority="high"
                    />
                </figure>
            </div>

            <div className="container">
                <dl className="fact-strip reveal">
                    {facts.map((f) => (
                        <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

export default Hero;
