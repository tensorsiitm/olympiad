const contacts = [
    { title: 'Nizamuddhin Basheer', label: '+91 70349 43826', href: 'tel:+917034943826' },
    { title: 'Mohammed Ikram', label: '+91 97453 09909', href: 'tel:+919745309909' },
    { title: 'Email', label: 'tensorsofficial@gmail.com', href: 'mailto:tensorsofficial@gmail.com' },
    { title: 'Website', label: 'tensors.in', href: 'https://tensors.in', external: true },
];

function Contact() {
    return (
        <section className="section section-alt" id="contact" aria-labelledby="contact-title">
            <div className="container">
                <header className="section-head reveal">
                    <p className="eyebrow">[ Contact ]</p>
                    <h2 id="contact-title" className="section-title">Questions? Talk to the team</h2>
                </header>

                <ul className="contact-grid">
                    {contacts.map((c) => (
                        <li className="contact-card reveal" key={c.title}>
                            <h3>{c.title}</h3>
                            <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{c.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Contact;
