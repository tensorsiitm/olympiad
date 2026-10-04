/* Google Form for registration.
   The one place the registration link lives. Every <RegisterLink> uses it.
   While it is not an http(s) URL, the buttons just scroll to #register. */
export const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSchcnO-vETP18mIVAvxxAFHrRcW1nZVRnAaO84yqG-H2Qcmxw/viewform";

export const isRegistrationOpen = /^https?:\/\//i.test(REGISTRATION_URL);

/* Files served from public/assets */
export const asset = (path) => `${process.env.PUBLIC_URL}/assets/${path}`;
