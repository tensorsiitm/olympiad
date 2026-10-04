import { REGISTRATION_URL, isRegistrationOpen } from "../config";
import { scrollToId } from "../lib/scroll";

/* A register button. Opens the Google Form once REGISTRATION_URL is set,
   until then it scrolls to the #register section. */
function RegisterLink({ className, children }) {
  if (isRegistrationOpen) {
    return (
      <a href={REGISTRATION_URL} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <a
      href="#register"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        scrollToId("register");
      }}
    >
      {children}
    </a>
  );
}

export default RegisterLink;
