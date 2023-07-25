<template>
  <v-row align="center" justify="center">
    <v-col
      cols="12"
      sm="12"
      md="8"
      lg="6"
      xl="5"
      class="py-3 px-2"
      align="center"
    >
      <v-card light elevation="0" class="mt-0">
        <v-card-text class="transparent" style="height: 120px"></v-card-text>
        <v-card-title class="h6 py-2">
          <v-spacer />
          หน้าหลัก
          <v-spacer />
        </v-card-title>
        <v-card-text>
          Content here!
        </v-card-text>
        <v-card-text align="center">
          <custom-footer />
        </v-card-text>
      </v-card>
      <br /><br />
    </v-col>
  </v-row>
</template>

<script>
import CustomFooter from "../components/CustomFooter.vue";

export default {
  components: {
    CustomFooter
  },

  layout: "basic"
};
</script>
