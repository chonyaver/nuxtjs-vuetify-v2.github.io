/* eslint-enable-no-unused-vars */
const SESSION = "__session";

export const state = () => ({
  uid: null,
  authUser: null
});

export const mutations = {
  SET_UID(state, uid) {
    state.uid = uid;
  },
  SET_AUTH_USER(state, authUser) {
    state.authUser = authUser;
  }
};

export const actions = {
  nuxtServerInit:
    process.server && !process.static
      ? async function({ dispatch }, { req }) {
          if (!req.headers.cookie) {
            return;
          }

          const cookie = await import("cookie");
          const parsed = cookie.parse(req.headers.cookie);
          if (!parsed) {
            return;
          }

          const session = parsed[SESSION];
          if (!session) {
            return;
          }

          const idToken = session.idToken;
          if (!idToken) {
            return;
          }

          await dispatch("getCheckAuth");
        }
      : () => {},

  SET_CSRF(ctx) {
    const csrfToken = this.$cookies.get("csrfToken", { fromRes: true });
    if (!csrfToken) {
      return;
    }

    this.$cookies.set("csrfToken", csrfToken);
  },

  SET_SESSION_COOKIE(ctx, { idToken }) {
    const secure = process.env.NODE_ENV === "production";

    let sessionCookie = { idToken };
    if (this.$cookies.get(SESSION)) {
      sessionCookie = JSON.parse(
        this.$cookies.get(SESSION, { fromRes: true, parseJSON: true })
      );
      sessionCookie.idToken = idToken;
    }

    let expires = 3000000;
    if (Object.keys(sessionCookie).length === 0) {
      expires = 0;
    }

    if (idToken === null) {
      delete sessionCookie.idToken;
    }

    this.$cookies.set(SESSION, JSON.stringify(sessionCookie), {
      maxAge: expires,
      secure: secure
    });
  },

  // eslint-disable-next-line-no-unused-vars
  async sessionLogin(ctx, { idToken, csrfToken }) {
    const response = await this.$axios.$post(
      "/api/sessionLogin",
      { idToken: idToken, csrfToken: csrfToken },
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Contennt-Type": "application/x-www-form-urlencoded",
          Accept: "*/*"
        },
        withCredentials: true,
        xsrfCookieName: "csrfToken"
      }
    );
    console.log("Store_sessionLogin: ", response.data.status);
  },

  async getCheckAuth({ commit, state }) {
    if (state.uid === null) {
      return;
    }

    const response = await this.$axios.$get("/api/check-auth", {
      headers: {
        Accept: "*/*"
      }
    });

    const { status, decodedClaims } = response.data;
    console.log("Store_getCheckAuth; ", status);
    const uid = decodedClaims.sub;
    commit("SET_UID", uid);
  },

  async sessionLogout(ctx) {
    const response = await this.$axios.$get("/api/sessionLogout");
    console.log("Store_sessionLogout: ", response.data.status);
  }
};

export const getters = {
  IS_AUTHENTICATED(state) {
    return !!state.uid;
  }
};
