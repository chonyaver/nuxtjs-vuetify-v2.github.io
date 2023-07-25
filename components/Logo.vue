<template>
  <v-btn
    id="logo-spin"
    color="transparent"
    elevation="0"
    class="mx-auto mt-2 pa-1"
    text
    nuxt
    to="/"
  >
    <v-img
      alt="Logo"
      src="https://res.cloudinary.com/dckrvb0rw/image/upload/v1688750315/public/svg/logo2_y9nmgh.svg"
      width="auto"
      height="auto"
      max-height="38px"
      class="ma-1"
    ></v-img>
  </v-btn>
</template>

<style>
v-btn#logo-spin {
  animation: spin1 6s infinite;
}

@keyframes spin1 {
  from {
    transform: rotateY(360deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>

<script>
export default {
  name: "Logo"
};
</script>
