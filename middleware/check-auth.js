import cookieParser from "cookie-parser";
import JWTDecode from "jwt-decode";

export default function({ store, req }) {
  if (process.server && !store.getters.IS_AUTHENTICATED) {
    let uid = getUserFromSession(req);
    if (!uid) {
      uid = getUserFromCookie(req);
    }
    store.commit("SET_UID", uid);
  }
}

function getUserFromSession(req) {
  console.log("GET_USER_FROMM_SESSION", req.session.uid);
  return req.session ? req.session.uid : null;
}

function getUserFromCookie(req) {
  if (!req.headers.cookie) {
    return;
  }

  const parsed = cookieParser(req.headers.cookie);
  if (!parsed) {
    return;
  }

  const session = parsed.__session;
  if (!session) {
    return;
  }

  const idToken = session.idToken;
  if (!idToken) {
    return;
  }

  decodeedTokken = JWTDecode(idToken);
  if (!decodeedTokken) {
    return;
  }

  return decodeedTokken.sub;
}
