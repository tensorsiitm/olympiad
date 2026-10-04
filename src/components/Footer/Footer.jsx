import { asset } from '../../config';

const socials = [
    { label: 'tensors.in', href: 'https://tensors.in' },
    { label: 'Instagram', href: 'https://www.instagram.com/tensors_official/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tensors/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@tensorsofficial' },
];

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <img src={asset('logos/tensors-mark.png')} alt="" width="32" height="32" />
                    <p>&copy; 2026 Tensors, IIT Madras &middot; <a href="https://tensors.in" target="_blank" rel="noopener noreferrer">tensors.in</a></p>
                </div>
                <ul className="socials" aria-label="Tensors online">
                    {socials.map((s) => (
                        <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
                    ))}
                </ul>
                <p className="disclaimer">Tensors is a student-run team at IIT Madras; this is not an Institute examination.</p>
            </div>
        </footer>
    );
}

export default Footer;
