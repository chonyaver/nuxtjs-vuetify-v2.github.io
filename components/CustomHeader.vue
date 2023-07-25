<template>
  <v-card
    dark
    class="background top-left d-inline-flex flex-nowrap px-0 py-0 align-start ml-0"
    elevation="0"
    width="100%"
    height="60px"
  >
    <v-btn
      color="transparent"
      class="flex ml-0 mt-0 mr-auto btn-left2"
      max-width="44px"
      height="44px"
      small
      link
      @click="goBack()"
    >
      <v-icon color="white">
        mdi-arrow-left-thick
      </v-icon>
    </v-btn>
    <v-spacer />
    <span
      class="flex px-2 pt-5 pb-2 mx-auto align-end text-center h6 white--text"
    >
      {{ title }}
    </span>
    <v-spacer />
    <v-btn
      color="transparent"
      class="flex ml-auto mt-0 mr-0 btn-right2"
      max-width="44px"
      height="44px"
      small
      link
      nuxt
      to="/"
    >
      <v-icon color="white">
        mdi-home
      </v-icon>
    </v-btn>
  </v-card>
</template>

<style>
.top-left {
  position: fixed;
  top: 0;
  left: 0;
}

.h6 {
  font-family: "Roboto", sans-serif;
  font-size: 0.9987656789rem;
  letter-spacing: 0.0178571429em;
  font-weight: 500;
}

.background {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1689237872/public/svg/background.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
}

.btn-left2 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687439354/public/svg/btn-left2.svg");
  background-size: 44px 44px;
  background-repeat: no-repeat;
  background-position: left center;
}

.btn-right2 {
  background: url("https://res.cloudinary.com/dckrvb0rw/image/upload/v1687439203/public/svg/btn-right2.svg");
  background-size: 38px 44px;
  background-repeat: no-repeat;
  background-position: right center;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },

  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>
