<template>
  <v-row id="top" align="start" justify="center">
    <v-col
      cols="12"
      sm="12"
      md="8"
      lg="6"
      xl="5"
      align="center"
      class="px-1 py-2"
    >
      <v-card id="target" light elevation="0" color="transparent">
        <v-card-text class="transparent" style="height: 48px;"></v-card-text>
        <v-card-text v-if="account.fullName" class="transparent pa-1" v-scroll.#target="onScroll">
          <v-spacer />
          <v-card
            light
            color="transparent"
            class="grad7 pa-2 mx-auto"
            max-width="440px"
            elevation="16"
            rounded
          >
            <v-card-text class="d-inline-flex flex-nowrap bg12 px-2 py-2 align-center">
              <span class="t-white my-1">
                ชื่อ-นามสกุล
              </span>
              <v-spacer />
            </v-card-text>
            <v-card-text class="bg-white px-2 py-2 t-light align-center justify-center text-center">
              {{ account.fullName }}
            </v-card-text>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text v-if="user.createdFrom === 'email'" class="transparent mt-1 pa-1">
          <v-spacer />
          <v-card
            light
            color="transparent"
            class="pa-2 grad7 mx-auto"
            max-width="440px"
            elevation="18"
            rounded
          >
            <v-card-text class="d-inline-flex flex-nowrap bg12 px-2 py-2 align-center">
              <span class="medium t-white">
                อีเมลล์
              </span>
              <v-btn
                color="white"
                class="ml-1"
                light
                icon
                small
              >
                <v-icon v-if="account.emailVerified === true" color="green" small>
                  mdi-check-circle
                </v-icon>
                <v-icon v-else color="red" x-small>
                  mdi-close-circle
                </v-icon>
              </v-btn>
              <v-btn
                color="white"
                class="ml-1 mr-auto pointer"
                light
                icon
                small
                @click="refresh()"
              >
                <v-icon small color="blue darken-3">
                  mdi-refresh
                </v-icon>
              </v-btn>
              <v-spacer />
            </v-card-text>
            <v-card-text class="bg-white px-2 py-2 medium t-light align-center justify-center text-center">
              {{ account.email }}
            </v-card-text>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text v-if="account.phoneNumber" class="transparent mt-1 pa-1">
          <v-spacer />
          <v-card
            light
            color="transparent"
            class="pa-2 grad7 mx-auto overflow-hidden"
            max-width="440px"
            elevation="18"
            rounded
          >
            <v-card-text class="d-inline-flex flex-nowrap bg12 px-2 py-2 align-center" style="width: 100%">
              <span class="medium t-white">
                หมายเลขโทรศัพท์
              </span>
              <v-btn
                color="white"
                class="ml-1"
                light
                icon
                small
              >
                <v-icon v-if="account.phoneStatus === 'verified'" color="green" small>
                  mdi-check-circle
                </v-icon>
                <v-icon v-else color="red" small>
                  mdi-close-circle
                </v-icon>
              </v-btn>
              <v-btn
                color="white"
                class="ml-1 pointer"
                light
                icon
                small
                @click="refresh()"
              >
                <v-icon small color="blue darken-3">
                  mdi-refresh
                </v-icon>
              </v-btn>
              <v-spacer />
              <v-btn
                :color="editPhone ? 'black' : 'secondary'"
                class="mr-0 medium pointer"
                dark
                rounded
                small
                @click="editPhone = !editPhone"
              >
                <span v-if="editPhone">
                  ปิด
                </span>
                <span v-else>
                  แก้ไข
                </span>
              </v-btn>
            </v-card-text>
            <v-card-text class="bg-white px-2 py-2 medium t-light align-center justify-center text-center">
              <v-spacer />
              <v-container>
                <v-row v-if="!editPhone" align="center" justify="center" dense>
                  <v-col cols="12" align="center" class="pa-1 align-center justify-center text-center">
                    <span class="d-flex px-1 py-1 medium t-light mx-auto">
                      {{ account.phoneNumber }}
                    </span>
                  </v-col>
                </v-row>
                <v-row v-if="editPhone" align="center" justify="center" dense>
                  <v-col cols="12" align="center" class="pa-1 align-center justify-center text-center">
                    <v-text-field
                      v-model="phoneNumber"
                      placeholder="หมายเลขโทรศัพท์(ใหม่) 9 หลัก"
                      class="medium px-2 py-1 text-center t-light mx-auto"
                      prefix="+66 "
                      color="#555555cc"
                      :rules="rules.phone"
                    ></v-text-field>
                  </v-col>
                  <v-col v-if="flow1 === true" cols="12" align="center" class="pa-1 align-center justify-center text-center">
                    <v-btn
                      id="recaptcha-container"
                      :loading="phoneLoading"
                      class="medium mx-2"
                      color="primary"
                      dark
                      rounded
                      block
                      small
                      :disabled="!phoneActive"
                      @click="sendOtp()"
                    >
                      ขอรหัสยืนยัน
                    </v-btn>
                  </v-col>
                  <v-col v-if="flow2 === true" cols="12" align="center" class="pa-1 align-center justify-center text-center">
                    <span class="medium teal--text mx-auto">
                      {{ minutes }} &colon; {{ seconds }}
                    </span>
                  </v-col>
                  <v-col v-if="flow2 === true" cols="12" align="center" class="pa-1 align-center justify-center text-center">
                    <v-otp-input
                      v-model="verificationCode"
                      type="text"
                      class="medium px-2 py-1 text-center t-light mx-auto"
                      :length="length"
                      color="#555555cc"
                      :rules="rules.otp"
                    ></v-otp-input>
                  </v-col>
                </v-row>
              </v-container>
              <v-spacer />
            </v-card-text>
            <v-card-actions v-if="editPhone" class="bg-white py-1 px-1">
              <v-spacer />
              <v-btn
                color="black"
                class="medium mb-2"
                dark
                rounded
                @click="resetPhone()"
              >
                ยกเลิก
              </v-btn>
              <v-spacer />
              <v-btn
                color="primary"
                class="medium mb-2"
                dark
                rounded
                @click.prevent="verifyOtp()"
              >
                บันทึก
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
          <v-spacer />
        </v-card-text>
      </v-card>
      <br><br>
      <v-btn
        v-if="goTop === true"
        id="go-top"
        color="transparent"
        class="grad5 bottom-right"
        dark
        fab
        small
        link
        href="#top"
      >
        <v-icon>
          mdi-chevron-up
        </v-icon>
      </v-btn>
      <v-snackbar
        v-model="errSnack"
        color="error"
        class="align-center justify-center text-center medium pa-2"
        max-width="400px"
        :timeout="6000"
        dark
        v-click-outside="errSnack = false"
        centered
      >
        {{ errMsg }}
      </v-snackbar>
      <v-snackbar
        v-model="sccSnack"
        color="success"
        class="align-center justify-center text-center medium pa-2"
        max-width="400px"
        :timeout="4000"
        dark
        v-click-outside="sccSnack = false"
        centered
      >
        {{ sccMsg }}
      </v-snackbar>
      <custom-header :title="title" />
      <v-overlay
        :value="loading"
        color="ghostwhite"
        opacity="0.8"
        light
        fill-width
        fill-height
      >
        <v-progress-circular
          indeterminate
          width="5px"
          size="100"
          color="blue darken-1"
        >
          รอสักครู่...
        </v-progress-circular>
      </v-overlay>
    </v-col>
  </v-row>
</template>

<script>
import CustomHeader from '~/components/CustomHeader.vue';
import { getPassStatus, getPhoneStatus, getDate, lastPass } from "~/utils/utils";

export default {
  name: "AccountPage",

  components: {
    CustomHeader
  },
  
  layout: 'simple',

  data() {
    return {
      title: 'บัญชีของฉัน',
      user: {
        uid: "userid001",
        userId: "lineUserId",
        createdFrom: "email",
        linkLine: false,
        account: {
          email: "fs.chonyaver@gmail.com",
          emailVerified: true,
          fullName: "เงินทอง ไหลมาเร็ว",
          phoneNumber: "+66829914824",
          phoneStatus: "verified",
          passport: "1570400003322",
          passportStatus: "verified",
          passportURL:
            "https://res.cloudinary.com/dzre5cq2d/image/upload/v1659704392/public/bg011_yashbj.jpg",
          line: "FS EXCHANGER",
          linkSocial: true,
          socials: [
            {
              id: "social1",
              socialName: "TMN",
              social: "0829914824"
            },
            {
              id: "social2",
              socialName: "DOLPHIN",
              social: "0829914824"
            }
          ]
        },
        date: Date.now()
      },
      account: {
        email: "fs.chonyaver@gmail.com",
        emailVerified: true,
        fullName: "เงินทอง ไหลมาเร็ว",
          phoneNumber: "+66829914824",
          phoneStatus: "verified",
          passport: "1570400003322",
          passportStatus: "verified",
          passportURL:
            "https://res.cloudinary.com/dzre5cq2d/image/upload/v1659704392/public/bg011_yashbj.jpg",
          line: "FS EXCHANGER",
          linkSocial: true,
          socials: [
            {
              id: "social1",
              socialName: "TMN",
              social: "0829914824"
            },
            {
              id: "social2",
              socialName: "DOLPHIN",
              social: "0829914824"
            }
          ]
      },
      rColor: '#0072B5',
      loading: false,
      errSnack: false,
      errMsg: null,
      sccSnack: false,
      sccMsg: null,
      model: null,
      editPhone: null,
      flow1: true,
      flow2: false,
      phoneLoading: false,
      intervalId: null,
      minutes: 0,
      seconds: 0,
      countryCode: '+66',
      phoneNumber: '',
      phoneRules: [
        value => !!value || 'โปรดป้อนหมายเลขโทรศัพท์มือถือ',
        value => value.length === 9 || 'ต้องมี 9 หลัก ไม่ต้องป้อน 0 ตัวแรก',
        value => !isNaN(value) || 'ต้องเป็นตัวเลข'
      ],
      verificationId: '',
      verificationCode: '',
      length: 6,
      editPass: null,
      passport: '',
      passRules: [
        value => !!value || 'โปรดระบุหมายเลขประจำตัวประชาชน',
        value => value.length === 13 || 'ต้องมี 13 หลัก',
        value => !isNaN(value) || 'ต้องเป็นตัวเลข'
      ],
      pFile: null,
      uploadRules: [
        value => !value || 'โปรดอับโหลดภาพบัตรประชาชน',
        value => value.size < 10000000 || 'ภาพขนาดใหญ่เกินไป ต้องเป็นภาพนามสกุล .jpg, .jpeg, .png ที่ขนาดไม่เกิน 10MB'
      ],
      goTop: false,
      socials: {},
      editSo: null,
      linkSocial: true,
      unlinkSocial: false,
      soChildren: 0,
      socialItems: [
        { text: 'โปรดเลือก', value: '' },
        { text: 'ทรู วอเลท/True Wallet', value: 'TMN' },
        { text: 'พรร้อมเพย์/Prompt Pay', value: 'PROMPT' },
        { text: 'เฟสบุ๊ค เพย์/Facebook Pay', value: 'FBPAY' },
        { text: 'วีแชท เพย์/WeChat Pay', value: 'WCPAY' },
        { text: 'ดอลฟิน/Dolphin', value: 'DOLPHIN' }
      ],
      soName: null,
      soVal: '',
      soNum: 1,
      soNameRules: [
        value => !!value || 'โปรดเลือกประเภทบัญชี'
      ],
      soValRules: [
        value => !!value || 'โปรดระบุรายละเอียด'
      ],
      rules: {
        phone: [
          value => !!value || 'โปรดป้อนหมายเลขโทรศัพท์มือถือ',
          value => value.length === 9 || 'ต้องมี 9 หลัก ไม่ต้องป้อน 0 ตัวแรก',
          value => !isNaN(value) || 'ต้องเป็นตัวเลข'
        ],
        soName: [
          value => !!value || 'โปรดเลือกประเภทบัญชี'
        ],
        soVal: [
          value => !!value || 'โปรดระบุรายละเอียด'
        ],
        upload: [
          value => !value || 'โปรดอับโหลดภาพบัตรประชาชน',
          value => value.size < 10000000 || 'ภาพขนาดใหญ่เกินไป ต้องเป็นภาพนามสกุล .jpg, .jpeg, .png ที่ขนาดไม่เกิน 10MB'
        ],
        pass: [
          value => !!value || 'โปรดระบุหมายเลขประจำตัวประชาชน',
          value => value.length === 13 || 'ต้องมี 13 หลัก',
          value => !isNaN(value) || 'ต้องเป็นตัวเลข'
        ]
      }
    };
  },

  head () {
    return {
      title: 'บัญชีของฉัน',
      link: [
        { rel: 'favicon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    };
  },

  computed: {
    uid () {
      this.user.uid;
    },
    phoneActive() {
      return this.phoneNumber.length === 9;
    },
    otpActive() {
      return this.verificationCode.length === 6;
    },
    passActive() {
      return this.passport.length === 13;
    },
    labels() {
      let label = "";
      if (this.soName === "TMN") {
        label = "เบอร์มือถือทรูวอเลท";
      } else if (this.soName === "PROMPT") {
        label = "เบอร์มือถือพร้อมเพย์/หมายเลขบัตรประชชาชน";
      } else if (this.soName === "FBPAY") {
        label = "บัญชีเฟสบุ๊คเพย์";
      } else if (this.soName === "WCPAY") {
        label = "บัญชีวีแชทเพย์";
      } else if (this.soName === "DOLPHIN") {
        label = "เบอร์มือถือที่ใช้ดอลฟิน";
      }
      return label;
    }
  },

  mounted() {
    const user = this.user;
    if (!user.uid) {
      return;
    }

    this.passport = this.account.passport;
  },

  created () {
    this.socials = this.account.socials;
  },

  methods: {
    getDate,
    getPassStatus,
    getPhoneStatus,
    lastSo (social) {
      const str = social.social;
      const pattern = /.(?=.{4})/g;
      return str.replace(pattern, ' ');
    },
    lastFour (account) {
      const str = account.passport;
      return lastPass(str);
    },
    clearError () {
      this.errMsg = null;
      this.errSnack = false;
    },
    clearScc () {
      this.sccMsg = null;
      this.sccSnack = false;
    },
    clearSnack () {
      this.errMsg = null;
      this.errSnack = false;
      this.sccMsg = null;
      this.sccSnack = false;
    },
    refresh () {
      this.$nuxt.refresh();
    },
    onScroll(event) {
      const scrollTarget = event.target.scrollTarget.scrollTop;
      if (scrollTarget > 100) {
        this.goTop = true;
      } else if (scrollTarget <= 100) {
        this.goTop = false;
      }
    },
    resetPhone () {
      this.verificationCode = '';
      this.verificationId = '';
      this.intervalId = null;
      this.minutes = 0;
      this.seconds = 0;
      this.flow2 = false;
      this.flow1 = true;
    },
    startTimer () {
      const n = Date.now();
      const f = 5 * 60 * 1000;
      const u = n + f;
      const t = new Date(u).getTime();
      const intervalId = setInterval(() => {
        const c = new Date().getTime();
        const d = t - c;
        const m = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((d % (1000 * 60)) / 1000);
        this.intervalId = intervalId;
        this.flow2 = true;
        this.minutes = m;
        this.seconds = s;
        if (d < 0) {
          clearInterval(intervalId);
          this.verificationId = '';
          this.verificationCode = '';
          this.minutes = 0;
          this.seconds = 0;
          this.flow2 = false;
          this.flow1 = true;
        }
      }, 1000);
    },
    stopTimer () {
      if (this.intervalId === null) {
        return;
      }
      clearInterval(this.intervalId);
    },
    sendOtp () {
      this.phoneLoading = false;
      this.flow1 = false;
      this.sccSnack = true;
      this.sccMsg = 'ส่งรหัสยืนยันไปยัง ' + phoneNumber + ' แล้ว!';
      this.startTimer();
    },
    verifyOtp () {
      this.resetPhone();
      this.phoneNumber = '';
      this.loading = false;
      this.editPhone = !this.editPhone;
      this.sccSnack = true;
      this.sccMsg = 'เปลี่ยนหมายเลขโทรศัพท์ สำเร็จ!';
      this.refresh();
    },
    changePass () {
      this.pFile = null;
      this.editPass = !this.editPass;
      this.sccSnack = true;
      this.sccMsg = 'บันทึก สำเร็จ!';
      this.refresh();
    },
    updateLinkSo (linkSocial) {
    },
    updateUnlinkSo (unlinkSocial) {
    },
    addSo () {
      this.soName = null;
      this.soVal = '';
      this.editSo = !this.editSo;
      this.sccSnack = true;
      this.sccMsg = 'บันทึกข้อมูล สำเร็จ!';
      this.refresh();
    },
    deleteSo (social) {
      this.sccSnack = true;
      this.sccMsg = 'ลบข้อมูลแล้ว';
      this.refresh();
    },
    navigate () {
    }
  }
};
</script>
