<template>
  <v-footer
    color="#88286e"
    class="align-center justify-center text-center small"
    width="100%"
    max-width="600px"
    dark
  >
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          class="align-center justify-center text-center"
          align="center"
        >
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            color="transparent"
            text
            block
            dark
            nuxt
            :to="item.link"
          >
            <small class="small white--text">
              {{ item.title }}
            </small>
          </v-btn>
          <v-divider class="white--text" />
        </v-col>
      </v-row>
      <v-row class="justify-space-between">
        <v-col
          cols="4"
          sm="12"
          md="12"
          lg="4"
          xl="4"
          align="center"
          class="px-auto py-1 small text-center align-center"
        >
          dbd
        </v-col>
        <v-col
          cols="8"
          sm="12"
          md="12"
          lg="8"
          xl="8"
          align="center"
          class="px-auto py-1 text-center align-center"
        >
          <div class="d-inline-block justify-space-around mx-auto">
            <v-btn
              v-for="(fItem, i) in fItems"
              :key="i"
              :color="fItem.color"
              class="mx-auto my-1"
              dark
              small
              fab
              icon
            >
              <a :href="fItem.href" target="_blank" class="transparent">
                <v-icon size="24px">
                  {{ fItem.icon }}
                </v-icon>
              </a>
            </v-btn>
          </div>
          <div class="d-inline-block justify-space-around mx-auto">
            <v-btn
              v-for="(lItem, i) in lItems"
              :key="i"
              class="mx-auto my-1"
              elevation="0"
              :href="lItem.href"
              dark
              x-small
              icon
            >
              <v-icon
                v-if="$vuetify.breakpoint.lgAndUp"
                :color="lItem.color"
                size="24px"
                light
              >
                {{ lItem.icon }}
              </v-icon>
              <v-icon
                v-if="$vuetify.breakpoint.mdAndDown"
                :color="lItem.color"
                size="20px"
                light
              >
                {{ lItem.icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" class="small py-1" align="center">
          <v-divider dark />
          <br />
          commons-image
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      items: [
        { title: "นโยบายความเป็นส่วนตัว", link: "/policies/privacy" },
        {
          title: "ข้อกำหนดและเงื่อนไข",
          link: "/policies/terms-and-conditions"
        },
        { title: "ข้อกำหนดในการให้บริการ", link: "/policies/terms-of-service" },
        { title: "ข้อกำหนดในการใช้งาน", link: "/policies/terms-of-used" },
        { title: "แหล่งที่มา", link: "/policies/attributions" },
        { title: "ข้อมูลอ้างอิง", link: "/policies/references" }
      ],
      fItems: [
        {
          icon: "mdi-facebook",
          color: "#0067a5",
          href: "#"
        },
        {
          icon: "mdi-instagram",
          color: "brown darken-3",
          href: "#"
        },
        {
          icon: "mdi-twitter",
          color: "blue darken-1",
          href: "#"
        }
      ],
      lItems: [
        {
          icon: "mdi-google-plus",
          color: "red darken-3",
          href: "#"
        },
        {
          icon: "mdi-linkin",
          color: "blue darken-1",
          href: "#"
        },
        {
          icon: "mdi-youtube",
          color: "pink darken-4",
          href: "#"
        }
      ]
    };
  }
};
</script>

<style scoped>
.small {
  font-size: 10px;
}
</style>
