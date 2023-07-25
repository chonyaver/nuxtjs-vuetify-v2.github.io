export default function({ app, req }) {
  if (process.server) {
    const csrfToken = app.$cookies.get("csrfToken", { fromRes: true });
    if (csrfToken) {
      console.log("csrfToken: ", csrfToken);
      app.$cookies.set("csrfToken", csrfToken);
    }

    const sessionCookie = app.$cookies.get("__session", {
      fromRes: true,
      parseJSON: true
    });
    if (sessionCookie) {
      console.log("sessionCookie: ", sessionCookie);
      app.$cookies.set("__session", sessionCookie, { expires: 3000000 });
    }

    app.$axios.defaults.headers.common.cookie = req.headers.cookie;
  }
}
