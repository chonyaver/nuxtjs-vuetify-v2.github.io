<template>
  <v-row align="start" justify="center">
    <v-col
      cols="12"
      sm="12"
      md="8"
      lg="6"
      xl="5"
      class="px-1 py-2"
      align="center"
    >
      <v-card light elevation="0" color="transparent">
        <v-card-text class="transparent" style="height: 46px"></v-card-text>
        <v-card-title class="large t-light">
          <v-spacer />
          อัตราแลกเปลี่ยน
          <v-spacer />
        </v-card-title>
        <v-card-text>
          <v-spacer />
          <v-card
            light
            color="transparent"
            class="mx-auto pa-1"
            elevation="0"
            max-width="440px"
          >
            <v-container fluid>
              <v-row align="center" justify="space-between">
                <v-col
                  v-for="item in items"
                  :key="item.id"
                  cols="6"
                  class="pa-1"
                  align="center"
                >
                  <v-sheet
                    :class="item.class"
                    height="auto"
                    max-height="190px"
                    elevation="6"
                    light
                  >
                    <v-img
                      :title="item.title"
                      :src="item.src"
                      class="ma-1 pointer"
                      sizes="auto"
                      aspect-ratio="1.7778"
                      @click="
                        $router.push({
                          name: 'currencies-id',
                          params: { id: item.id }
                        })
                      "
                    ></v-img>
                    <small
                      class="d-inline justify-center mx-auto x-small text-center"
                    >
                      *{{ item.ref }}
                      <small
                        class="x-small t-blue-pp pointer"
                        @click="
                          $router.push({
                            name: 'policies-refers-page',
                            params: { page: 'currencies' }
                          })
                        "
                      >
                        ดูอ้างอิง
                      </small>
                    </small>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text>
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
  name: "Currencies",

  components: {
    CustomFooter
  },

  data() {
    return {
      items: [
        {
          id: "currency01",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/pp_jwyiyn.svg",
          title: "Paypal",
          class: "d-block justify-center text-center align-center bd-4 bd-pp",
          ref: "ภาพที่1"
        },
        {
          id: "currency02",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/wm_psbngh.svg",
          title: "Web Money",
          class: "d-block justify-center text-center align-center bd-4 bd-wm",
          ref: "ภาพที่2"
        },
        {
          id: "currency03",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/pm_swnyoo.svg",
          title: "Perfect Money",
          class: "d-block justify-center text-center align-center bd-4 bd-pm",
          ref: "ภาพที่3"
        },
        {
          id: "currency04",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/nt_oqoe3g.svg",
          title: "Neteller",
          class: "d-block justify-center text-center align-center bd-4 bd-nt",
          ref: "ภาพที่4"
        },
        {
          id: "currency05",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/sk_dkxisv.svg",
          title: "Skrill",
          class: "d-block justify-center text-center align-center bd-4 bd-sk",
          ref: "ภาพที่5"
        }
      ]
    };
  },

  head: {
    title: "อัตราแลกเปลี่ยน",
    link: [{ rel: "favicon", type: "image/x-icon", href: "/favicon.ico" }]
  }
};
</script>
