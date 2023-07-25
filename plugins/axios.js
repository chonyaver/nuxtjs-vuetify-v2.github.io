export default function({ $axios, redirect }) {
  $axios.defaults.baseURL = process.env.BASE_URL;

  $axios.onRequest(config => {
    if (config.headers !== null && config.headers.Authorization !== undefined) {
      config.withCredentials = true;
      config.headers = {
        "Access-Control-Allow-Origin": "same-origin",
        ...config.headers
      };
    }

    return config;
  });

  $axios.onError(error => {
    const code = parseInt(error && error.response.data.status);
    if (code === 401) {
      return redirect("/");
    }
  });
}
