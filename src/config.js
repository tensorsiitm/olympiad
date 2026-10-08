/* Google Form for registration.
   The one place the registration link lives. Every <RegisterLink> uses it.
   While it is not an http(s) URL, the buttons just scroll to #register. */
export const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd7MIgg_ajHHQdEJUR1mkbV5jFRcZP0sonSExCsnbiaU3uJHA/viewform";

export const isRegistrationOpen = /^https?:\/\//i.test(REGISTRATION_URL);

/* Files served from public/assets */
export const asset = (path) => `${process.env.PUBLIC_URL}/assets/${path}`;
