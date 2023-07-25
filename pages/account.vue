<template>
  <v-row id="top" align="start" justify="center">
    <v-col
      cols="12"
      sm="12"
      md="8"
      lg="6"
      xl="5"
      class="px-3 py-2"
      align="center"
    >
      <v-card light color="transparent" elevation="0">
        <v-card-text class="transparent" style="height: 48px"></v-card-text>
        <v-card-text align="center" class="transparent align-center pa-2">
          <v-spacer />
          <v-card light rounded color="secondary" outlined max-width="400px" class="pa-0 mx-auto mt-2" elevation="16">
            <v-toolbar dark dense class="bg12 align-center pt-0" max-height="42px">
              <v-toolbar-title class="white--text large align-center mt-0">
                ชื่อ-นามสกุล
              </v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text align="center" class="bg-white pa-2 d-block align-center justify-center text-center">
              <span class="medium t-light">
                {{ account.fullName }}
              </span>
            </v-card-text>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text v-if="user.createdFrom === 'email'" align="center" class="transparent align-center pa-2" elevation="16">
          <v-spacer />
          <v-card light rounded color="secondary" outlined max-width="400px" class="pa-0 mx-auto">
            <v-toolbar dark dense class="bg12 align-center" max-height="42px">
              <v-toolbar-title class="white--text large">
                อีเมลล์
              </v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text align="center" class="bg-white pa-2 d-block align-center justify-center text-center">
              <span class="medium t-light">
                {{ account.email }}
              </span>
              <div class="d-inline-flex flex flex-nowrap justify-center text-center">
                <v-btn
                  v-if="account.emailVerified === true"
                  color="success"
                  class="flex mt-1 ml-auto mr-0"
                  dark
                  icon
                  x-small
                >
                  <v-icon>
                    mdi-check-circle
                  </v-icon>
                </v-btn>
                <v-btn
                  v-if="account.emailVerified === false"
                  color="error"
                  class="flex mt-1 ml-auto mr-0"
                  dark
                  icon
                  x-small
                  link
                  nuxt
                  to="/email-verify"
                >
                  <v-icon>
                    mdi-close-circle
                  </v-icon>
                </v-btn>
                <v-btn
                  :color="rColor"
                  class="flex mt-1 ml-1 mr-auto"
                  dark
                  icon
                  x-small
                  link
                  @click="refresh()"
                >
                  <v-icon>
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text v-if="account.phoneNumber" align="center" class="transparent align-center pa-2">
          <v-spacer />
          <v-card light rounded color="secondary" outlined max-width="400px" class="pa-0 mx-auto overflow-hidden">
            <v-toolbar dark dense class="bg12 align-center" max-height="42px">
              <v-toolbar-title class="white--text large">
                หมายเลขโทรศัพท์
              </v-toolbar-title>
              <v-spacer />
              <v-btn
                :color="editPhone ? 'black' : 'primary'"
                class="bg-light mt-0 ml-auto medium"
                text
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
            </v-toolbar>
            <v-card-text align="center" class="bg-white pa-2 d-block align-center justify-center text-center">
              <span v-if="!editPhone" class="medium t-light">
                {{ account.phoneNumber }}
              </span>
              <div v-if="!editPhone" class="d-inline-flex flex flex-nowrap justify-center text-center">
                <v-btn
                  v-if="account.phoneStatus === 'verified'"
                  color="success"
                  class="flex mt-1 ml-auto mr-0"
                  dark
                  icon
                  x-small
                >
                  <v-icon>
                    mdi-check-circle
                  </v-icon>
                </v-btn>
                <v-btn
                  v-if="account.phoneStatus !== 'verified'"
                  color="error"
                  class="flex mt-1 ml-auto mr-0 red--text"
                  dark
                  outlined
                  rounded
                  x-small
                >
                  {{ getPhoneStatus(account) }}
                </v-btn>
                <v-btn
                  :color="rColor"
                  class="flex mt-1 ml-1 mr-auto"
                  dark
                  icon
                  x-small
                  link
                  @click="refresh()"
                >
                  <v-icon>
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </div>
              <div v-if="editPhone" class="d-block align-center justify-center text-center">
                <v-text-field
                  v-model="phoneNumber"
                  label="หมายเลขโทรศัพท์(ใหม่) 9 หลัก"
                  class="px-2 medium text-center mx-auto"
                  :prefix="+66 "
                  :rules="phoneRules"
                  @input="resetPhone()"
                ></v-text-field>
                <v-btn
                  v-if="flow1 === true"
                  id="recaptcha-container"
                  :loading="phoneLoading"
                  color="primary"
                  class="medium mt-2 mx-auto"
                  dark
                  rounded
                  block
                  :disabled="!phoneActive"
                  @click="sendOtp()"
                >
                  ขอรหัสยืนยัน
                </v-btn>
                <small v-if="flow2 === true" class="d-inline teal--text text-center mt-2 mx-auto">
                  {{ minutes }} &colon; {{ seconds }}
                </small>
                <v-otp-input
                  v-if="flow2 === true"
                  v-model="verificationCode"
                  type="text"
                  :length="length"
                  class="mt-2 mx-auto"
                ></v-otp-input>
              </div>
            </v-card-text>
            <v-card-actions v-if="editPhone" class="bg-white pa-2">
              <v-spacer />
              <v-btn
                color="primary"
                class="medium mx-auto"
                dark
                rounded
                block
                :disabled="!otpActive"
                @click.prevent="verifyOtp()"
              >
                บันทึก
              </v-btn>
              <v-btn
                color="black"
                class="medium mx-auto mt-2 mb-1"
                dark
                rounded
                block
                @click="editPhone = !editPhone"
              >
                ยกเลิก
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text v-if="account.passport" align="center" class="transparent align-center pa-2">
          <v-spacer />
          <v-card light rounded color="secondary" outlined max-width="400px" class="pa-0 mx-auto overflow-hidden">
            <v-toolbar dark dense class="bg12 align-center" max-height="42px">
              <v-toolbar-title class="white--text large">
                บัตรประจำตัวประชาชน
              </v-toolbar-title>
              <v-spacer />
              <v-btn
                color="ghostwhite"
                class="mt-0 ml-auto medium"
                light
                rounded
                small
                @click="editPass = !editPass"
              >
                <span v-if="editPhone" class="black--text">
                  ปิด
                </span>
                <span v-else class="t-pink1">
                  แก้ไข
                </span>
              </v-btn>
            </v-toolbar>
            <v-card-text align="center" class="bg-white pa-2 d-block align-center justify-center text-center">
              <span v-if="!editPass" class="medium t-light">
                {{ lastFour(account) }}
              </span>
              <div v-if="!editPass" class="d-inline-flex flex flex-nowrap justify-center text-center">
                <v-btn
                  v-if="account.passportStatus === 'verified'"
                  color="success"
                  class="mt-1 ml-auto mr-0"
                  dark
                  icon
                  x-small
                >
                  <v-icon>
                    mdi-check-circle
                  </v-icon>
                </v-btn>
                <v-btn
                  v-if="account.passportStatus !== 'verified'"
                  color="error"
                  class="mt-1 ml-auto mr-0 red--text"
                  dark
                  outlined
                  rounded
                  x-small
                >
                  {{ getPassStatus(account) }}
                </v-btn>
                <v-btn
                  :color="rColor"
                  class="mt-1 ml-1 mr-auto"
                  dark
                  icon
                  x-small
                  link
                  @click="refresh()"
                >
                  <v-icon>
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </div>
              <div v-if="!editPass" class="d-block mx-auto mt-2 mb-1 align-center justify-center text-center">
                <a class="link transparent d-flex pa-1 mx-auto" :href="account.passportURL" target="_blank">
                  <v-img
                    :src="account.passportURL"
                    class="ma-1"
                    max-width="200px"
                    height="auto"
                    aspect-ratio="1.7778"
                  ></v-img>
                </a>
              </div>
              <div v-if="editPass" class="d-block align-center justify-center text-center">
                <v-text-field
                  v-if="account.passportStatus !== 'verified'"
                  v-model="passport"
                  label="หมายเลขบัตรประชาชน 13 หลัก"
                  class="px-2 medium text-center mx-auto"
                  :return-value.sync="account.passport"
                ></v-text-field>
                <v-file-input
                  v-if="account.passportStatus !== 'verified'"
                  v-model="pFile"
                  label="รูปบัตรประชาชนด้านหน้า"
                  accept="image/jpeg, image/png, image/jpg"
                  :rules="uploadRules"
                  class="px-2 medium text-center mx-auto mt-2 mb-1"
                  :disabled="!passActive"
                  show-size
                  full-width
                ></v-file-input>
                <p v-if="account.passportStatus === 'verified'">
                  ท่านได้ทำการยืนยันบัตรประชาชนเสร็จเสมบูรณ์แล้ว หากต้องการแก้ไขโปรด <nuxt-link to="/contact" class="medium t-blue-pp">
                    ติดต่อเจ้าหน้าที่
                  </nuxt-link>
                </p>
              </div>
            </v-card-text>
            <v-card-actions v-if="editPass" class="bg-white pa-2">
              <v-spacer />
              <v-btn
                v-if="account.passportStatus !== 'verified'"
                color="primary"
                class="medium mx-auto"
                dark
                rounded
                block
                :disabled="!pFile"
                @click.prevent="changePass()"
              >
                บันทึก
              </v-btn>
              <v-btn
                color="black"
                class="medium mx-auto mt-2 mb-1"
                dark
                rounded
                block
                @click="editPass = !editPass"
              >
                ยกเลิก
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text align="center" class="transparent align-center pa-2">
          <v-spacer />
          <v-card light rounded color="secondary" outlined max-width="400px" class="pa-0 mx-auto overflow-hidden">
            <v-toolbar dark dense class="bg12 align-center" max-height="42px">
              <v-toolbar-title class="white--text large">
                เปิดการใช้งานบัญชีภายนอก
              </v-toolbar-title>
              <v-spacer />
              <v-switch
                v-if="account.linkSocial === false"
                v-model="unlinkSocial"
                :input-value="unlinkSocial"
                class="ml-auto"
                color="warning"
                light
              ></v-switch>
              <v-switch
                v-if="account.linkSocial === true"
                v-model="linkSocial"
                :input-value="linkSocial"
                class="ml-auto mb-0"
                color="blue ligghten-1"
                light
              ></v-switch>
            </v-toolbar>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text v-if="account.linkSocial === true" align="center" class="transparent align-center pa-2">
          <v-spacer />
          <v-card light rounded color="secondary" outlined max-width="400px" class="pa-0 mx-auto overflow-hidden">
            <v-toolbar dark dense class="bg12 align-center" max-height="42px">
              <v-toolbar-title class="white--text large">
                บัญชีภายนอก
              </v-toolbar-title>
              <v-spacer />
              <v-btn
                v-if="soChildren < 3"
                color="ghostwhite"
                class="mt-0 ml-auto medium"
                light
                rounded
                x-small
                @click="editSo = !editSo"
              >
                <span v-if="editSo" class="black--text">
                  ปิด
                </span>
                <span v-else class="t-pink1">
                  เพิ่ม
                </span>
              </v-btn>
            </v-toolbar>
            <v-card-text v-if="!editSo" align="center" class="bg-white pa-2 d-block align-center justify-center text-center">
              <v-spacer />
              <v-container>
                <v-row align="center" justify="space-around">
                  <v-col cols="12" class="d-inline align-center justify-center text-center py-1 px-2" align="center">
                    <small class="teal--text">
                      สามารถเพิ่มบัญชีภายนอกเพื่อใช้รับเงินได้สูงสุดไม่เกิน บัญชี หากต้องการเพิ่มเกินกว่านี้ โปรดลบบัญชีที่มีอยู่ออกก่อนแล้วทำการเพิ่มใหม่ได้ค่ะ
                    </small>
                    <v-btn
                      :color="rColor"
                      class="flex ml-1 mr-auto"
                      dark
                      icon
                      x-small
                      link
                      @click="refresh()"
                    >
                      <v-icon>
                        mdi-refresh
                      </v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row
                  v-for="social in socials"
                  :key="social.id"
                  align="center"
                  justify="center"
                  class="bd-b"
                >
                  <v-col cols="10" align="start" class="align-center justify-start text-start py-2 pl-3 medium t-light">
                    {{ soNum++ }}.&nbsp;{{ social.socialName }}{{ lastSo(social) }}
                  </v-col>
                  <v-col cols="2" align="end" class="py-2 pr-2 align-center justify-ends">
                    <v-btn
                      color="secondary darken-1"
                      class="flex mr-2"
                      dark
                      x-small
                      rounded
                      @click="deleteSo(social)"
                    >
                      ลบ
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
              <v-spacer />
            </v-card-text>
            <v-card-text v-if="editSo" align="center" class="bg-white pa-2 align-center justify-center text-center">
              <v-container fluid>
                <v-row align="center" justify="center">
                  <v-col cols="12" align="center" class="pa-1 align-center justify-center text-center">
                    <v-autocomplete
                      v-model="soName"
                      class="medium text-center px-2 mx-auto"
                      :items="socialItems"
                      item-text="text"
                      item-value="value"
                      :rules="soNameRules"
                      full-width
                    ></v-autocomplete>
                  </v-col>
                </v-row>
                <v-row v-if="soName !== null" align="center" justify="center">
                  <v-col cols="12" align="center" class="pa-1 align-center justify-center text-center">
                    <v-text-field
                      v-model="soVal"
                      :label="labels"
                      class="medium text-center px-2 mx-auto"
                      :rules="soValRules"
                      full-width
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions v-if="editSo" class="bg-white pa-2">
              <v-spacer />
              <v-btn
                color="primary"
                class="medium mx-auto"
                dark
                rounded
                block
                :disabled="soVal === ''"
                @click="addSo()"
              >
                บันทึก
              </v-btn>
              <v-btn
                color="black"
                class="medium mx-auto mt-2 mb-1"
                dark
                rounded
                block
                @click="editSo = !editSo"
              >
                ยกเลิก
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text id="target" align="center" class="transparent align-center pa-2">
          <v-spacer />
          <v-card light rounded color="secondary" outlined max-width="400px" class="pa-0 mx-auto" v-scroll.#target="onScroll">
            <v-toolbar dark dense class="bg12 align-center" max-height="42px">
              <v-toolbar-title class="white--text large">
                ไลน์
              </v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text align="center" class="bg-white pa-2 d-block align-center justify-center text-center">
              <v-container fluid>
                <v-row align="center" justify="center">
                  <v-col cols="12" class="d-inline align-center justify-center text-center py-1" align="center">
                    <span class="medium t-light">
                      {{ account.line }}
                    </span>
                    <v-btn
                      v-if="user.linkLine === false"
                      color="#00b900"
                      class="flex ml-1 mr-auto"
                      dark
                      small
                      rounded
                      link
                      @click="navigate()"
                    >
                      เชื่อมกับไลน์
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <v-spacer />
        </v-card-text>
      </v-card>
      <custom-header :title="title" />
      <v-btn
        v-if="goTop === true"
        id="goTop"
        color="black"
        class="bottom-right"
        dark
        fab
        small
        href="#top"
        link
      >
        <v-icon>
          mdi-chevron-up
        </v-icon>
      </v-btn>
      <v-snackbar
        v-model="errSnack"
        color="black"
        class="pa-2 align-center text-center medium white--text"
        max-width="400px"
        :timeout="6000"
        dark
        centered
        v-click-outside="clearError"
      >
        {{ errMsg }}
      </v-snackbar>
      <v-snackbar
        v-model="sccSnack"
        color="success"
        class="pa-2 align-center text-center medium white--text"
        max-width="400px"
        :timeout="6000"
        dark
        centered
        v-click-outside="clearScc"
      >
        {{ sccMsg }}
      </v-snackbar>
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
          color="primary"
          width="5"
          size="100"
          dark=""
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
              socialName: "True Wallet",
              social: "0829914824"
            },
            {
              id: "social2",
              socialName: "Dolphin Wallet",
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
              socialName: "True Wallet",
              social: "0829914824"
            },
            {
              id: "social2",
              socialName: "Dolphin Wallet",
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
        { text: 'ทรู วอเลท/True Wallet', value: 'TrueWallet' },
        { text: 'พรร้อมเพย์/Prompt Pay', value: 'PromptPay' },
        { text: 'เฟสบุ๊ค เพย์/Facebook Pay', value: 'FacebookPay' },
        { text: 'วีแชท เพย์/WeChat Pay', value: 'WeChatPay' },
        { text: 'ดอลฟิน/Dolphin', value: 'DolphinWallet' }
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
      if (this.soName === "TrueWallet") {
        label = "เบอร์มือถือทรูวอเลท";
      } else if (this.soName === "PromptPay") {
        label = "เบอร์มือถือพร้อมเพย์/หมายเลขบัตรประชชาชน";
      } else if (this.soName === "FacebookPay") {
        label = "บัญชีเฟสบุ๊คเพย์";
      } else if (this.soName === "WeChatPay") {
        label = "บัญชีวีแชทเพย์";
      } else if (this.soName === "DolphinWallet") {
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
      if (scrollTarget > 200) {
        this.goTop = true;
      } else if (scrollTarget <= 300) {
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
