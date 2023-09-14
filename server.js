const { Nuxt, Builder } = require("nuxt");
const app = require("express")();
const port = process.env.PORT || 3000;
const hostname = process.env.HOST || "0.0.0.0" || "localhost";
const config = require("./nuxt.config.js");
const nuxt = new Nuxt(config);

app.use(nuxt.render);

if (config.dev) {
  new Builder(nuxt).build();
}

app.listen(port, hostname, function() {
  console.log(`Server is listening on port: ${port}`);
});
