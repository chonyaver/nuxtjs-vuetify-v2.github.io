<template>
  <v-row align="center" justify="center">
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
          ศูนย์สมาชิก
          <v-spacer />
        </v-card-title>
        <v-card-text class="align-center py-2">
          <v-spacer />
          <v-card
            light
            elevation="0"
            class="mx-auto mt-0 pa-2 bg10-2"
            max-width="440px"
          >
            <v-card-text class="align-start pa-1">
              <v-container fluid>
                <v-row align="center" justify="center" class="mb-3">
                  <v-col cols="12" class="d-inline-flex flex flex-nowrap align-center justify-center text-center px-2 py-1 mb-4">
                    <span class="ml-auto mr-1 medium">
                      สถานะ&colon;
                    </span>
                    <v-btn
                      :color="uColor"
                      class="ml-0 mr-1 medium pointer"
                      dark
                      text
                      x-small
                      nuxt
                      :to="uLink"
                    >
                      {{ uText }}
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      class="mr-auto ml-1 medium pointer"
                      dark
                      icon
                      x-small
                      @click="refresh()"
                    >
                      <v-icon>
                        mdi-refresh
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col
                    v-for="item in items"
                    :key="item.id"
                    cols="6"
                    :class="item.classes"
                    align="center"
                  >
                    <v-sheet
                      v-if="item.id === '3'"
                      color="transparent"
                      class="d-block align-center justify-center text-center pa-sm-3 pa-md-4 pa-lg-5 pa-xl-6 pointer"
                      height="auto"
                      max-height="180px"
                      elevation="0"
                      light
                      @click="$router.push(item.link)"
                    >
                      <v-icon large class="mx-auto mb-1 t-light">
                        {{ item.icon }}
                      </v-icon>
                      <br>
                      <span class="mx-auto t-light">
                        {{ item.title }}
                      </span>
                      <span
                        v-if="newCount > 0"
                        class="d-flex bd-50 px-2 py-1 red t-white align-center text-center medium"
                        style="width: auto; height: auto; position: absolute; top: 2px; left: 51.5%;"
                      >
                        {{ newCount }}
                      </span>
                    </v-sheet>
                    <v-sheet
                      v-else
                      color="transparent"
                      class="d-block align-center justify-center text-center pa-sm-3 pa-md-4 pa-lg-5 pa-xl-6 pointer"
                      height="auto"
                      max-height="180px"
                      elevation="0"
                      light
                      @click="$router.push(item.link)"
                    >
                      <v-icon large class="mx-auto mb-1 t-light">
                        {{ item.icon }}
                      </v-icon>
                      <br>
                      <span class="mx-auto t-light">
                        {{ item.title }}
                      </span>
                    </v-sheet>
                  </v-col>
                </v-row>
                <v-row align="center" justify="start" class="mb-3">
                  <v-col
                    cols="6"
                    align="center"
                    class="align-center justify-center text-center bd-rt"
                  >
                    <v-sheet
                      color="transparent"
                      class="d-block align-center justify-center text-center pa-sm-3 pa-md-4 pa-lg-5 pa-xl-6 pointer"
                      height="auto"
                      max-height="180px"
                      elevation="0"
                      light
                      @click="$router.push('/policies')"
                    >
                      <v-icon large class="mx-auto mb-1 t-light">
                        mdi-note
                      </v-icon>
                      <br>
                      <span class="mx-auto t-light">
                        นโยบายข้อกำหนด
                      </span>
                    </v-sheet>
                  </v-col>
                  <v-col
                    v-if="user.createdFrom === 'email'"
                    cols="6"
                    align="center"
                    class="align-center justify-center text-center"
                  >
                    <v-sheet
                      color="transparent"
                      class="d-block align-center justify-center text-center pa-sm-3 pa-md-4 pa-lg-5 pa-xl-6 pointer"
                      height="auto"
                      max-height="180px"
                      elevation="0"
                      light
                      @click="$router.push('/update-password')"
                    >
                      <v-icon large class="mx-auto mb-1 t-light">
                        mdi-key
                      </v-icon>
                      <br>
                      <span class="mx-auto t-light">
                        เปลี่ยนรหัสผ่าน
                      </span>
                    </v-sheet>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col cols="12" class="align-end justify-center text-center px-2 pb-2 pt-3">
                    <v-btn
                      color="black"
                      class="mt-3 mb-0 mx-1 medium"
                      dark
                      block
                      rounded
                      link
                      @click="logout()"
                    >
                      <v-icon small>
                        mdi-logout
                      </v-icon>
                      <span class="medium">
                        ออกจากระบบ
                      </span>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text align="center" class="align-center">
          <custom-footer />
        </v-card-text>
      </v-card>
      <br><br>
      <v-snackbar
        v-model="errSnack"
        color="error"
        class="pa-2 align-center text-center medium"
        :timeout="6000"
        max-width="400px"
        dark
        centered
      >
        {{ errMsg }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
import CustomFooter from "../../components/CustomFooter.vue";
import { userData } from "../../utils/datas";

export default {
  name: "Users",

  components: {
    CustomFooter
  },

  data() {
    return {
      uText: '',
      uColor: '',
      uLink: '',
      items: [
        { id: '1', title: 'บัญชีของฉัน', classes: 'align-center justify-center text-center bd-rb', icon: 'mdi-account', link: '/account' },
        { id: '2', title: 'ธนาคาร', classes: 'align-center justify-center text-center bd-b', icon: 'mdi-bank', link: '/bank' },
        { id: '3', title: 'ข้อความ', classes: 'align-center justify-center text-center bd-r', icon: 'mdi-inbox', link: '/messages' },
        { id: '4', title: 'ความเป็นส่วนตัว', classes: 'align-center justify-center text-center bd-b', icon: 'mdi-cog', link: '/privacy' }
      ],
      user: {},
      errSnack: false,
      errMsg: null,
      newCount: 7
    };
  },

  head () {
    return {
      title: 'ศูนย์สมาชิกก',
      link: [
        { rel: 'favicon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    };
  },

  mounted () {
    const user = this.user;
    if (user.tags === 'verified') {
      this.uText = 'ยืนยันตัวตนแล้ว';
      this.uColor = 'success';
      this.uLink ='`/account';
    } else if (user.tags === 'unverified') {
      this.uText = 'ยังไม่ยืนยันตัวตน!';
      this.uColor = 'error';
    }

    if (user.account.passportStatus !== 'verified' && user.bank.bankStatus === 'verified') {
      this.uLink = '/account';
    } else if (user.account.passportStatus === 'verified' && user.bank.bankStatus !== 'verified') {
      this.uLink = '/bank';
    } else if (user.account.passportStatus !== 'verified' && user.bank.bankStatus !== 'verified') {
      this.uLink = '/account';
    }
  },

  created() {
    const user = userData();
    this.user = user;
  },

  methods: {
    refresh () {
      this.$nuxt.refresh();
    }
  }
};
</script>
    }
  }
};
</script>
