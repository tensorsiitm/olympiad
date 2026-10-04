import { isRegistrationOpen } from '../../config';
import RegisterLink from '../../components/RegisterLink';

function Register() {
    return (
        <section className="section register" id="register" aria-labelledby="register-title">
            <div className="container">
                <header className="section-head reveal">
                    <p className="eyebrow">[ Register ]</p>
                    <h2 id="register-title" className="section-title">Register through your school</h2>
                    <p className="register-deadline">Students register through their school. Registrations close on <strong><time dateTime="2026-10-15">15 October 2026</time></strong>.</p>
                </header>

                <div className="fee reveal">
                    <p className="fee-label">Registration fee</p>
                    <p className="fee-amt">Rs 49 <span>per student</span></p>
                </div>

                <div className="register-cta reveal">
                    <RegisterLink className="btn btn-primary btn-lg">Register now</RegisterLink>
                    {!isRegistrationOpen && (
                        <p className="register-note">The registration form opens soon. Check back here, or contact the team below.</p>
                    )}
                    <p className="register-note">Is your school not registered yet? Ask a teacher to get in touch with us, or <a href="#contact">contact the team</a> yourself.</p>
                </div>
            </div>
        </section>
    );
}

export default Register;
