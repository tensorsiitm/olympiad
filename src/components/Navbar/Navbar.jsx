import { useEffect, useRef, useState } from 'react';
import { asset } from '../../config';
import RegisterLink from '../RegisterLink';

const links = [
    { id: 'format', label: 'Format' },
    { id: 'prizes', label: 'Prizes' },
    { id: 'schools', label: 'For schools' },
    { id: 'prepare', label: 'Syllabus' },
    { id: 'faq', label: 'FAQ' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('');
    const menuBtn = useRef(null);

    // Close the menu on Escape, and when the window grows to the desktop layout
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                menuBtn.current?.focus();
            }
        };
        const desktop = window.matchMedia('(min-width: 960px)');
        const onResize = () => setIsOpen(false);
        document.addEventListener('keydown', onKey);
        desktop.addEventListener('change', onResize);
        return () => {
            document.removeEventListener('keydown', onKey);
            desktop.removeEventListener('change', onResize);
        };
    }, [isOpen]);

    // The current section is the last one whose top has passed just below the header
    useEffect(() => {
        let ticking = false;
        const update = () => {
            ticking = false;
            const tracked = Array.from(document.querySelectorAll('main section[id]'));
            if (!tracked.length) return;
            const line = (document.getElementById('site-header')?.offsetHeight || 70) + 40;
            const doc = document.documentElement;
            const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 4;
            let current = '';
            tracked.forEach((s) => {
                if (s.getBoundingClientRect().top <= line) current = s.id;
            });
            if (atBottom) current = tracked[tracked.length - 1].id;
            setActive(current === 'top' ? '' : current);
        };
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', update);
        update();
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <header className="site-header" id="site-header">
            <div className="header-inner">
                <a href="#top" className="logo" aria-label="Tensors National Olympiad 2026, home">
                    <img src={asset('logos/tensors-mark.png')} alt="" className="logo-mark" width="36" height="36" />
                    <span className="logo-text">Tensors <em>Olympiad</em></span>
                </a>

                <nav className={`nav ${isOpen ? 'is-open' : ''}`} id="site-nav" aria-label="Primary">
                    <ul className="nav-list">
                        {links.map((l) => (
                            <li key={l.id}>
                                <a
                                    href={`#${l.id}`}
                                    className={`nav-link ${active === l.id ? 'is-active' : ''}`}
                                    aria-current={active === l.id ? 'true' : undefined}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <RegisterLink className="btn btn-primary btn-sm header-register">Register</RegisterLink>
                    <button
                        type="button"
                        ref={menuBtn}
                        className="icon-btn menu-toggle"
                        aria-expanded={isOpen}
                        aria-controls="site-nav"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="bars" aria-hidden="true"><i></i><i></i></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
