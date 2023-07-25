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
      <v-card light elevation="20" class="transparent bd-7">
        <v-card-text class="transparent" style="height: 48px"></v-card-text>
        <v-card-text v-if="flow1 === true" class="bg-white bd-7 align-center">
          <v-spacer />
          <v-card
            light
            class="pa-2 mx-auto my-2 bd-7"
            outlined
            width="360px"
            elevation="20"
          >
            <v-card-text class="px-1 pt-0">
              <v-container fluid>
                <v-row align="center" justify="center" dense>
                  <v-col
                    cols="12"
                    class="align-center justify-center text-center px-1"
                    align="center"
                  >
                    <v-autocomplete
                      v-model="type"
                      label="าัตถุประสงค์"
                      class="mx-1 medium text-center px-2"
                      :items="typeItems"
                      item-text="text"
                      item-value="value"
                      :rules="rules.type"
                      @change="onChange()"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
                <v-row align="center" justify="center" dense>
                  <v-col
                    cols="12"
                    class="align-center justify-center text-center px-1"
                    align="center"
                  >
                    <v-autocomplete
                      v-model="path"
                      label="ช่องทาง"
                      class="mx-1 medium text-center px-2"
                      :items="pathItems"
                      item-text="text"
                      item-value="value"
                      :rules="rules.path"
                      @change="onChange()"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
                <v-row align="center" justify="center" dense>
                  <v-col
                    cols="12"
                    class="align-center justify-center text-center px-1"
                    align="center"
                  >
                    <v-text-field
                      v-model="amount"
                      label="จำนวน"
                      class="mx-1 medium text-center px-2"
                      prefix="$ "
                      :rules="rules.amount"
                      @input="onChange()"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row
                  v-if="flow2 === true"
                  align="center"
                  justify="center"
                  dense
                >
                  <v-col
                    cols="12"
                    class="align-center justify-center text-center px-1"
                    align="center"
                  >
                    <v-btn
                      :loading="btnLoading"
                      color="primary"
                      class="mx-1 medium text-center px-2"
                      dark
                      rounded
                      block
                      @click="findRate()"
                    >
                      ถัดไป
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row
                  v-if="flow3 === true"
                  align="center"
                  justify="center"
                  dense
                >
                  <v-col
                    cols="12"
                    class="align-center justify-center text-center px-1"
                    align="center"
                  >
                    <span class="mb-2 mx-1 medium text-center px-2">
                      อัตรา {{ getDecimal(rate) }} บาทต่อ 1 ดิลลาร์
                    </span>
                  </v-col>
                </v-row>
                <v-row
                  v-if="flow3 === true"
                  align="center"
                  justify="center"
                  dense
                >
                  <v-col
                    cols="12"
                    class="align-center justify-center text-center px-1"
                    align="center"
                  >
                    <span
                      class="d-flex mb-2 mx-2 medium justify-center text-center px-2 pb-2 bd-b"
                    >
                      ยอดรวมสุทธิ {{ getDecimal(total) }} บาท <br /><br />
                    </span>
                  </v-col>
                </v-row>
                <v-row
                  v-if="flow3 === true"
                  align="center"
                  justify="center"
                  dense
                >
                  <v-col
                    cols="12"
                    class="align-center justify-center text-center px-1"
                    align="center"
                  >
                    <v-file-input
                      v-model="file"
                      label="หลักฐานการโอน/สลิปโอน"
                      class="mx-1 medium text-center px-2"
                      accept="image/jpeg, image/jpg, image/png"
                      :rules="rules.upload"
                      show-size
                    ></v-file-input>
                  </v-col>
                </v-row>
                <v-row
                  v-if="flow3 === true"
                  align="center"
                  justify="center"
                  dense
                >
                  <v-col
                    v-if="type === 'sell'"
                    cols="12"
                    class="align-center justify-center text-center px-1"
                    align="center"
                  >
                    <v-autocomplete
                      v-if="user.account.linkSocial === true"
                      v-model="receiver"
                      label="วิธีรับเงิน"
                      class="mx-1 medium text-center px-2"
                      :items="soItems"
                      item-text="text"
                      item-value="value"
                      :rules="rules.receiver"
                    ></v-autocomplete>
                    <v-autocomplete
                      v-if="user.account.linkSocial === false"
                      v-model="receiver"
                      label="วิธีรับเงิน"
                      class="mx-1 medium text-center px-2"
                      :items="bankItems"
                      item-text="text"
                      item-value="value"
                      :rules="rules.receiver"
                    ></v-autocomplete>
                  </v-col>
                  <v-col
                    v-if="type === 'buy'"
                    cols="12"
                    class="align-center justify-center text-center px-1"
                    align="center"
                  >
                    <v-text-field
                      v-model="receiver"
                      :label="labels"
                      class="mx-1 medium text-center px-2"
                      :placeholder="labels"
                      :rules="rules.receiver"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row align="center" justify="center" dense>
                  <v-col
                    cols="12"
                    class="align-center justify-center text-center px-1"
                    align="center"
                  >
                    <span class="t-light text-start medium mx-1 px-2">
                      โปรดตรวจสอบให้แน่ใจก่อนว่าข้อมูลลที่สมาชิกได้ระยุทั้งหมดมีความถูกต้อง
                      การกดปุม &quot;แจ้งโอน&quot; ถือว่าสมาชิกได้ยอมรับใน
                      <nuxt-link
                        to="/policies/conditions"
                        class="medium link t-blue-pp"
                        >ข้อกำหนดและเงื่อนไข</nuxt-link
                      >
                      ทั้งหมดแล้ว ดูรายละเอียดเพิ่มเติมได้
                      <nuxt-link to="/policies" class="medium link t-blue-pp"
                        >ที่นี่!</nuxt-link
                      >
                    </span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions v-if="flow3 === true" class="pa-1">
              <v-spacer />
              <v-btn
                color="primary"
                class="mb-2 mx-1 medium"
                dark
                rounded
                block
                :disabled="
                  type === null ||
                    path === null ||
                    amount === null ||
                    file === null ||
                    receiver === null
                "
                @click="create(user)"
              >
                แจ้งโอน
              </v-btn>
              <v-spacer />
            </v-card-actions>
            <v-card-actions class="pa-1">
              <v-spacer />
              <v-btn
                color="black"
                class="mb-2 mx-1 medium"
                dark
                rounded
                block
                @click="cancel()"
              >
                ยกเลิก
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text v-if="flow4 === true" class="bg-white align-center py-2">
          <v-spacer />
          <v-card light class="pa-2 mx-auto bd-7" outlined width="360px">
            <v-card-text class="pa-1">
              <v-spacer />
              <v-alert
                v-if="errAlert !== null"
                type="error"
                class="mx-auto my-2 pa-2 align-center justify-center text-center medium white--text"
                width="99%"
                dark
              >
                {{ errAlert }}
              </v-alert>
              <v-spacer />
            </v-card-text>
            <v-card-actions class="pa-1">
              <v-spacer />
              <v-btn
                color="black"
                class="mb-2 mx-1 medium"
                dark
                rounded
                block
                link
                nuxt
                :to="{ name: 'users-id', params: { id: uid } }"
              >
                ตกลง
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card>
          <v-spacer />
        </v-card-text>
      </v-card>
      <custom-header :title="title" />
      <v-snackbar
        v-model="errSnack"
        color="black"
        :timeout="6000"
        class="pa-2 align-center justify-center text-center medium white--text"
        style="opacity: 0.9"
        max-width="400px"
        dark
        centered
      >
        {{ errMsg }}
      </v-snackbar>
      <v-overlay
        :value="loading"
        color="ghostwhite"
        opacity="0.8"
        fill-width
        fill-height
      >
        <v-progress-circular
          indeterminate
          width="5px"
          size="100"
          class="medium"
          color="primary"
        >
          รอสักครู่...
        </v-progress-circular>
      </v-overlay>
    </v-col>
  </v-row>
</template>

<script>
import CustomHeader from "../../components/CustomHeader.vue";
import { getBankName, lastFour, multiply, getDecimal } from "../../utils/utils";

export default {
  name: "NewOrderCreate",

  components: {
    CustomHeader
  },

  layout: "simple",

  data() {
    return {
      user: {
        uid: "userid001",
        userId: "lineUserId",
        tags: "verified",
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
        date: Date.now(),
        bank: {
          bankName: "other",
          bankName2: "แสตนดาด ชาเตอร์",
          bankNumber: "0078750065"
        }
      },
      title: "แจ้งโอน",
      loading: false,
      btnLoading: false,
      errAlert: null,
      errSnack: false,
      errMsg: null,
      flow1: true,
      flow2: true,
      flow3: false,
      flow4: false,
      typeItems: [
        { text: "ประเภทธุรกรรม", value: "" },
        { text: "ขายดอลลาร์", value: "sell" },
        { text: "ซื้อดอลลาร์", value: "buy" }
      ],
      pathItems: [
        { text: "ช่องทาง", value: "" },
        { text: "PayPal", value: "currency01" },
        { text: "Web Money", value: "currency02" },
        { text: "Perfect Money", value: "currency03" },
        { text: "Neteller", value: "currency04" },
        { text: "Skrill", value: "currency05" }
      ],
      rules: {
        type: [value => !!value || "โปรดเลือกประเภทธุรกรรม"],
        path: [value => !!value || "โปรดเลือกช่องทาง"],
        amount: [
          value => !!value || "โปรดป้อนจำนวนดอลลาร์ที่ต้องการซื้อขาย",
          value => (value >= 20 && value <= 10000) || "ต่ำสุด 20 สูงสุด 10,000",
          value => !isNaN(value) || "เฉพาะตัวเลขเท่านั้น"
        ],
        upload: [
          value =>
            !value ||
            value.size <= 10000000 ||
            "รูปขนาดใหญ่เกินไป ต้องมีขนาดไม่เกิน 10MB"
        ],
        receiver: [value => !!value || "โปรดเลือกวิธีรับเงิน"]
      },
      type: null,
      path: null,
      amount: null,
      rate: NaN,
      total: NaN,
      currencyId: "",
      file: null,
      soItems: [],
      bankItems: [],
      receiver: null
    };
  },

  head() {
    return {
      title: "แจ้งโอน",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    };
  },

  computed: {
    uid() {
      return this.$store.state.uid;
    },
    labels() {
      const path = this.path;
      switch (path) {
        case "currency01":
          return "อีเมลล์/บัญชี Paypal ที่ใช้รับเงิน";
        case "currency02":
          return "หมายเลขกระเป๋า WM ผู้รับเงิน";
        case "currency03":
          return "หมายเลข PM ผู้รับเงิน";
        case "currency04":
          return "อีเมลล์/หมายเลขกระเป๋า Neteller ผู้รับเงิน";
        case "currency05":
          return "อีเมลล์/บัญชี Skrill ทที่ใช้รับเงิน";
        default:
          return "วิธีรับเงิน";
      }
    }
  },

  mounted() {
    const user = this.user;
    if (!user) {
      return;
    }

    if (user.tags === "unverified") {
      this.flow1 = false;
      this.flow4 = true;
      this.errAlert =
        "ขออภัยค่ะ ท่านยังไม่ได้ส่งหลักฐานเพื่อยืนยันตัวตน" +
        " หรือ ยังอยู่ในรหว่างกระบวนการยืนยันตัวตนที่ยังไม่เสร็จสิ้น " +
        "ท่านต้องมีสถานะบัญชีเป็น ยืนยันตัวตนแล้ว เท่านั้น จึงจะสามารถ" +
        "ทำการซื้อขายได้ค่ะ ดูข้อมูลเพิ่มเติมได้ที่หน้า วิธีซื้อขาย หรือ ติดต่อเจ้าหน้าที่";
    } else if (user.tags === "verified") {
      this.flow4 = false;
      this.flow1 = true;
    }

    if (user.account.linkSocial && user.account.linkSocial === false) {
      const bank = this.user.bank;
      this.bankItems = this.setBankItems(bank);
    } else if (user.account.linkSocial && user.account.linkSocial === true) {
      const bank = this.user.bank;
      const socials = this.user.account.socials;
      this.soItems = this.setSoItems(bank, socials);
    }
  },

  methods: {
    getDecimal,
    setBankItems(bank) {
      let bankItems = [];
      const bankItem1 = { text: "วิธีรับเงิน", value: "" };
      bankItems.push(Object.assign({}, bankItem1));
      const bName = getBankName(bank);
      const str = bank.bankNumber;
      const bNumber = lastFour(str);
      const bankItem2 = {
        text: bName + ".." + bNumber,
        value: bName + bNumber
      };
      bankItems.push(Object.assign({}, bankItem2));
      return bankItems;
    },
    setSoItems(bank, socials) {
      let soItems = [];
      const soItem1 = { text: "วิธีรับเงิน", value: "" };
      soItems.push(Object.assign({}, soItem1));
      const bName = getBankName(bank);
      const str = bank.bankNumber;
      const bNumber = lastFour(str);
      const soItem2 = { text: bName + ".." + bNumber, value: bName + bNumber };
      soItems.push(Object.assign({}, soItem2));
      for (const i in socials) {
        const sName = socials[i].socialName;
        const str = socials[i].social;
        const sVal = lastFour(str);
        const soItem3 = { text: sName + ".." + sVal, value: sName + str };
        soItems.push(Object.assign({}, soItem3));
      }
      return soItems;
    },
    onChange() {
      this.flow3 = false;
      this.flow2 = true;
    },
    findRate() {
      if (this.type === null || this.path === null || this.amount === null) {
        return;
      }

      this.clearError();
      this.btnLoading = true;
      const type = this.type;
      const path = this.path;
      const amount = this.amount;
      this.btnLoading = false;
      this.flow2 = false;
      this.flow3 = true;
      this.currencyId = path + type;
      this.rate = 33.67;
      const rate = 33.67;
      this.total = multiply(amount, rate);
    },
    create(user) {
      if (this.type === null || this.path === null || this.amount === null) {
        return;
      }

      this.loading = true;
      console.log("create: ", user.uid);
      this.reset();
      this.loading = false;
    },
    reset() {
      this.type = null;
      this.path = null;
      this.amount = null;
      this.rate = NaN;
      this.total = NaN;
      this.currencyId = "";
      this.file = null;
      this.receiver = null;
      this.flow3 = false;
      this.flow1 = true;
    },
    cancel() {
      this.errAlert = null;
      this.clearError();
      this.reset();
      this.$router.push("/new-order");
    },
    clearError() {
      this.errSnack = false;
      this.errMsg = null;
    }
  }
};
</script>
