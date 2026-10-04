import { useEffect, useRef } from 'react';
import { lockScroll, unlockScroll } from '../lib/scroll';

/* A small popup. Closes on Escape, the close button, or a click on the backdrop,
   keeps keyboard focus inside while open and returns it afterwards. */
function ComingSoonModal({ open, title, children, onClose }) {
    const panel = useRef(null);
    const closeBtn = useRef(null);

    useEffect(() => {
        if (!open) return;
        const opener = document.activeElement;
        lockScroll();
        closeBtn.current?.focus();

        const onKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
                return;
            }
            if (e.key !== 'Tab' || !panel.current) return;
            const items = panel.current.querySelectorAll('button, a[href]');
            const first = items[0];
            const last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('keydown', onKey);
            unlockScroll();
            opener?.focus?.();
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={panel}>
                <button type="button" className="modal-close" aria-label="Close" ref={closeBtn} onClick={onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <span className="soon-badge">Coming soon</span>
                <h2 id="modal-title">{title}</h2>
                {children}
                <button type="button" className="btn btn-primary" onClick={onClose}>Got it</button>
            </div>
        </div>
    );
}

export default ComingSoonModal;
