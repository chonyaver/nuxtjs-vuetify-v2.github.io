export default async function({ app, store }) {
  const csrfToken = app.$cookies.get("csrfToken", { fromRes: true }) || "";

  app.$fire.auth.onIdTokenChanged(async user => {
    if (user) {
      try {
        await handleAuthSuccess(user);
      } catch {}
    } else {
      await handleAuthSignOut();
    }
  });

  async function handleAuthSuccess(user) {
    const { uid, email, emailVerified, phoneNumber } = user;
    const { token, claims } = await user.getIdToken(true);
    const authUser = {
      uid: uid,
      email: email,
      emailVerified: emailVerified,
      phoneNumber: phoneNumber,
      claims
    };
    await store.dispatch("SET_SESSION_COOKIE", { idToken: token });
    await store.dispatch("SET_CSRF");
    await store.dispatch("sessionLogin", {
      idToken: token,
      csrfToken: csrfToken
    });
    store.commit("SET_UID", uid);
    store.commit("SET_AUTH_USER", authUser);
    await store.dispatch("getCheckAuth");
  }

  async function handleAuthSignOut() {
    await store.dispatch("sessionLogout");
    await store.dispatch("SET_SESSION_COOKIE", { idToken: nulll });
    store.commit("SET_UID", null);
    store.commit("SET_AUTH_USER", null);
  }
}
