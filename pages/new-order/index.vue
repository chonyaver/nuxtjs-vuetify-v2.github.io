<template>
  <v-row align="start" justify="center">
    <v-col
      cols="12"
      sm="12"
      md="8"
      lg="6"
      xl="5"
      align="center"
      class="px-1 py-2"
    >
      <v-card light elevation="0">
        <v-card-text class="transparent" style="height: 46px"></v-card-text>
        <v-card-title class="large t-light">
          <v-spacer />
          แจ้งโอน
          <span v-if="subtitle" class="large t-light"
            >&nbsp; &rArr; &nbsp; {{ subtitle }}</span
          >
          <v-spacer />
        </v-card-title>
        <v-card-text v-if="flow1 === true">
          <v-spacer />
          <v-card
            light
            elevation="0"
            class="mx-auto pa-2 bg10-2"
            max-width="440px"
          >
            <v-card-text class="align-center pa-1" align="center">
              <v-container fluid>
                <v-row align="center" justify="center">
                  <v-col
                    v-for="item in items"
                    :key="item.id"
                    cols="6"
                    :class="item.classes"
                    align="center"
                  >
                    <v-sheet
                      v-if="item.id === '1'"
                      color="transparent"
                      class="d-block align-center justify-center text-center pa-sm-3 pa-md-4 pa-lg-5 pa-xl-6 pointer"
                      height="auto"
                      max-height="200px"
                      elevation="0"
                      light
                      @click="openFlow2(item)"
                    >
                      <v-icon large class="mx-auto mb-1 t-light">
                        {{ item.text1 }}
                      </v-icon>
                      <br />
                      <span class="mx-auto t-light">
                        {{ item.text2 }}
                      </span>
                    </v-sheet>
                    <v-sheet
                      v-if="item.id === '2'"
                      color="transparent"
                      class="d-block align-center justify-center text-center pa-sm-3 pa-md-4 pa-lg-5 pa-xl-6 pointer"
                      height="auto"
                      max-height="200px"
                      elevation="0"
                      light
                      @click="openFlow3(item)"
                    >
                      <v-icon large class="mx-auto mb-1 t-light">
                        {{ item.text1 }}
                      </v-icon>
                      <br />
                      <span class="mx-auto t-light">
                        {{ item.text2 }}
                      </span>
                    </v-sheet>
                    <v-sheet
                      v-if="item.id === '3'"
                      color="transparent"
                      class="d-block align-center justify-center text-center pa-sm-3 pa-md-4 pa-lg-5 pa-xl-6 pointer"
                      height="auto"
                      max-height="200px"
                      elevation="0"
                      light
                      @click="$router.push('/new-order/create')"
                    >
                      <v-icon large class="mx-auto mb-1 t-light">
                        {{ item.text1 }}
                      </v-icon>
                      <br />
                      <span class="mx-auto t-light">
                        {{ item.text2 }}
                      </span>
                    </v-sheet>
                    <v-sheet
                      v-if="item.id === '4'"
                      color="transparent"
                      class="d-block align-center justify-center text-center pa-sm-3 pa-md-4 pa-lg-5 pa-xl-6 pointer"
                      height="auto"
                      max-height="200px"
                      elevation="0"
                      light
                      @click="$router.push('/orders')"
                    >
                      <v-icon large class="mx-auto mb-1 t-light">
                        {{ item.text1 }}
                      </v-icon>
                      <br />
                      <span class="mx-auto t-light">
                        {{ item.text2 }}
                      </span>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text v-if="flow2 === true">
          <v-spacer />
          <v-card
            light
            elevation="0"
            class="mx-auto pa-2 bg-white"
            max-width="400px"
          >
            <v-card-text class="align-center pa-1" align="center">
              <v-container fluid>
                <v-row align="center" justify="center">
                  <v-col
                    v-for="sItem in sItems"
                    :key="sItem.id"
                    cols="6"
                    align="center"
                    class="align-center"
                  >
                    <v-sheet
                      color="transparent"
                      class="d-block align-center justify-center text-center bd-4 ma-1 pointer"
                      height="auto"
                      max-height="180px"
                      light
                      @click="openSDialog(sItem)"
                    >
                      <v-img
                        :alt="sItem.title"
                        :src="sItem.src"
                        class="grey lighten-3 bd-4"
                        sizes="auto"
                        aspect-ratio="1.7778"
                      ></v-img>
                    </v-sheet>
                  </v-col>
                  <v-col cols="6" align="center" class="align-center">
                    <v-sheet
                      color="ghostwhite"
                      class="d-block align-center justify-center text-center bd-4 ma-1 pointer"
                      height="auto"
                      max-height="180px"
                      light
                      @click="closeFlow2()"
                    >
                      <v-icon large class="mx-auto mb-1 t-light">
                        mdi-arrow-left-thick
                      </v-icon>
                      <br />
                      <span class="mx-auto medium t-light">
                        กลัย
                      </span>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text v-if="flow3 === true" align="center" class="pt-0">
          <v-spacer />
          <v-card
            light
            elevation="0"
            class="mx-auto mt-0 pa-2 bg-white"
            max-width="400px"
          >
            <v-card-text class="align-center" align="center">
              <v-container fluid>
                <v-row align="center" justify="center">
                  <v-col
                    v-for="bItem in bItems"
                    :key="bItem.id"
                    cols="6"
                    align="center"
                    class="align-center"
                  >
                    <v-sheet
                      color="transparent"
                      class="align-center justify-center text-center bd-4 pointer"
                      height="auto"
                      max-height="180px"
                      light
                      @click="openBDialog(bItem)"
                    >
                      <v-img
                        :alt="bItem.title"
                        :src="bItem.src"
                        class="grey lighten-3 bd-4"
                        width="100%"
                        height="auto"
                        aspect-ratio="1.7778"
                      ></v-img>
                    </v-sheet>
                  </v-col>
                  <v-col cols="6" align="center" class="align-center">
                    <v-sheet
                      color="transparent"
                      class="d-block align-center justify-center text-center btn2-2 bd-4 pointer py-2"
                      height="auto"
                      max-height="180px"
                      light
                      @click="closeFlow3()"
                    >
                      <v-icon large class="mx-auto mb-1 mt-auto t-light">
                        mdi-arrow-left-thick
                      </v-icon>
                      <br />
                      <span class="mx-auto mt-0 mb-auto medium t-light">
                        กลัย
                      </span>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text v-if="flow1 === true">
          <custom-footer />
        </v-card-text>
      </v-card>
      <br /><br />
      <v-dialog
        v-model="sDialog"
        max-width="460px"
        class="align-center bg-dialog1"
        v-click-outside="closeSDialog"
      >
        <v-card
          elevation="0"
          color="transparent"
          class="bg-dialog1 pa-0"
          width="auto"
        >
          <v-card-text align="center" class="dark3 align-center pa-0">
            <v-card class="transparent pa-2" elevation="0">
              <v-card-title class="transparent large align-center t-white py-0">
                <v-spacer />
                {{ dSub }}
                <v-spacer />
              </v-card-title>
              <v-card-text align="center" class="transparent align-center">
                <v-container fluid>
                  <v-row
                    v-for="sellItem in sellItems"
                    :key="sellItem.id"
                    align="center"
                    justify="center"
                    class="transparent"
                  >
                    <v-col
                      v-if="
                        sellItem.id === '1' ||
                          sellItem.id === '3' ||
                          sellItem.id === '5' ||
                          sellItem.id === '7' ||
                          sellItem.id === '9' ||
                          sellItem.id === '11'
                      "
                      cols="12"
                      align="center"
                      class="align-end justify-center text-center py-1 px-1 mb-1 transparent"
                    >
                      <span
                        class="justify-center text-center mx-auto mb-1 mt-auto medium t-white"
                      >
                        {{ sellItem.data }}
                      </span>
                    </v-col>
                    <v-col
                      v-if="
                        sellItem.id === '2' ||
                          sellItem.id === '4' ||
                          sellItem.id === '6' ||
                          sellItem.id === '8' ||
                          sellItem.id === '10' ||
                          sellItem.id === '12'
                      "
                      cols="12"
                      align="center"
                      class="d-inline-flex flex flex-nowrap align-center justify-center text-center py-1 px-1 bg-white bd-4"
                    >
                      <span :id="sellItem.id" class="medium t-light">
                        {{ sellItem.data }}
                      </span>
                      <v-btn
                        v-if="sellItem.id === '2' || sellItem.id === '4'"
                        title="คัดลอก"
                        :color="color"
                        class="ml-1"
                        dark
                        icon
                        x-small
                        link
                        @click="onCopySell(sellItem)"
                      >
                        <v-icon small>
                          mdi-content-copy
                        </v-icon>
                      </v-btn>
                      <v-tooltip
                        :value="sccSnack"
                        class="small bd-50"
                        :class="color"
                        absolute
                        top
                        right
                      >
                        {{ sccMsg }}
                      </v-tooltip>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions align="center" class="transparent align-center">
                <v-spacer />
                <v-btn
                  color="black"
                  class="medium t-white mx-auto"
                  dark
                  rounded
                  small
                  @click="closeSDialog()"
                >
                  ปิด
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="bDialog"
        max-width="460px"
        class="align-center bg-dialog1"
        v-click-outside="closeBDialog"
      >
        <v-card
          elevation="0"
          color="transparent"
          class="bg-dialog1 pa-0"
          width="auto"
        >
          <v-card-text align="center" class="dark3 align-center pa-0">
            <v-card class="transparent pa-2" elevation="0">
              <v-card-title class="transparent large align-center t-white py-0">
                <v-spacer />
                {{ dSub2 }}
                <v-spacer />
              </v-card-title>
              <v-card-text align="center" class="transparent align-center">
                <v-container fluid>
                  <v-row
                    v-for="buyItem in buyItems"
                    :key="buyItem.id"
                    align="center"
                    justify="center"
                    class="transparent"
                  >
                    <v-col
                      v-if="
                        buyItem.id === '1' ||
                          buyItem.id === '3' ||
                          buyItem.id === '5' ||
                          buyItem.id === '7' ||
                          buyItem.id === '9' ||
                          buyItem.id === '11'
                      "
                      cols="12"
                      align="center"
                      class="d-flex align-end justify-center text-center py-1 px-1 transparent"
                    >
                      <span
                        class="text-center mx-auto mb-0 mt-2 medium t-white"
                      >
                        {{ buyItem.data }}
                      </span>
                    </v-col>
                    <v-col
                      v-if="
                        buyItem.id === '2' ||
                          buyItem.id === '4' ||
                          buyItem.id === '6' ||
                          buyItem.id === '8' ||
                          buyItem.id === '10' ||
                          buyItem.id === '12'
                      "
                      cols="12"
                      align="center"
                      class="d-inline-flex flex flex-nowrap align-center justify-center text-center py-1 px-1 bg-white bd-4"
                    >
                      <span :id="buyItem.id" class="medium t-light">
                        {{ buyItem.data }}
                      </span>
                      <v-btn
                        v-if="
                          buyItem.id === '2' ||
                            buyItem.id === '4' ||
                            buyItem.id === '6'
                        "
                        title="คัดลอก"
                        :color="color2"
                        class="ml-1"
                        dark
                        icon
                        x-small
                        link
                        @click="onCopyBuy(buyItem)"
                      >
                        <v-icon small>
                          mdi-content-copy
                        </v-icon>
                      </v-btn>
                      <v-tooltip
                        :value="sccSnack2"
                        class="small bd-50"
                        :class="color2"
                        absolute
                        top
                        right
                      >
                        {{ sccMsg2 }}
                      </v-tooltip>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions align="center" class="transparent align-center">
                <v-spacer />
                <v-btn
                  color="black"
                  class="medium t-white mx-auto"
                  dark
                  rounded
                  small
                  @click="closeBDialog()"
                >
                  ปิด
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-snackbar
        v-model="errSnack"
        color="error"
        class="medium white--text pa-2 text-center"
        max-width="400px"
        dark
        :timeout="6000"
        centered
      >
        {{ errMsg }}
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
import CustomFooter from "../../components/CustomFooter.vue";

export default {
  name: "NewOrder",

  components: {
    CustomFooter
  },

  data() {
    return {
      flow1: true,
      flow2: false,
      flow3: false,
      sDialog: false,
      bDialog: false,
      sItems: [],
      bItems: [],
      items: [
        {
          id: "1",
          text1: "mdi-bank-transfer-out",
          text2: "บัญชีขาย",
          classes: "align-center text-center justify-center bd-rb"
        },
        {
          id: "2",
          text1: "mdi-bank-transfer-in",
          text2: "บัญชีซื้อ",
          classes: "align-center text-center justify-center bd-b"
        },
        {
          id: "3",
          text1: "mdi-hand-coin",
          text2: "แจ้งโอน",
          classes: "align-center text-center justify-center bd-r"
        },
        {
          id: "4",
          text1: "mdi-history",
          text2: "ประวัติ",
          classes: "align-center text-center justify-center"
        }
      ],
      flow1Src:
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1688366320/public/svg/btn4-2_ure3cc.svg",
      sellItems: [],
      buyItems: [],
      errSnack: false,
      errMsg: null,
      sccSnack: false,
      sccMsg: null,
      sccSnack2: false,
      sccMsg2: null,
      color: "",
      color2: "",
      subtitle: "",
      dSub: "",
      dSub2: ""
    };
  },

  head() {
    return {
      title: "แจ้งโอน",
      link: [{ rel: "favicon", type: "image/x-icon", href: "/favicon.ico" }]
    };
  },

  created() {
    this.loadNewOrderSells();
    this.loadNewOrderBuys();
  },

  methods: {
    onCopySell({ data }) {
      const event = new ClipboardEvent("copy");
      event.clipboardData.setData("text/plain", data);
      event.preventDefault();
      this.sccSnack = true;
      this.sccMsg = "คัดลอกแล้ว!";
    },
    onCopyBuy({ data }) {
      const event = new ClipboardEvent("copy");
      event.clipboardData.setData("text/plain", data);
      event.preventDefault();
      this.sccSnack2 = true;
      this.sccMsg2 = "คัดลอกแล้ว!";
    },
    loadNewOrderSells() {
      this.sItems = [
        {
          id: "s01",
          title: "Paypal",
          accLabel: "ชำระเงินมาที่",
          acc: "ppemail@domail.com",
          nLabel: "ชื่อบัญชี",
          name: "FS-Exchanger",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          dLabel: "ข้อบังคับ",
          detail: "ต้องเลือกส่งแบบชำระสินค้า",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691483328/public/currencies/pp-svg-hd.svg",
          color: "#0072B5",
          classes: "align-center justify-center text-center bd-rb"
        },
        {
          id: "s02",
          title: "Web Money",
          accLabel: "ชำระเงินมาที่",
          acc: "ppemail@domail.com",
          nLabel: "ชื่อบัญชี",
          name: "FS-Exchanger",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          dLabel: "ข้อบังคับ",
          detail: "ต้องเลือกส่งแบบชำระสินค้า",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691483328/public/currencies/wm-svg-hd.svg",
          color: "#34568B",
          classes: "align-center justify-center text-center bd-b"
        },
        {
          id: "s03",
          title: "Perfect Money",
          accLabel: "ชำระเงินมาที่",
          acc: "ppemail@domail.com",
          nLabel: "ชื่อบัญชี",
          name: "FS-Exchanger",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          dLabel: "ข้อบังคับ",
          detail: "ต้องเลือกส่งแบบชำระสินค้า",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691521756/public/currencies/pm-svg-hd.svg",
          color: "#E9897E",
          classes: "align-center justify-center text-center bd-rb"
        },
        {
          id: "s04",
          title: "Neteller",
          accLabel: "ชำระเงินมาที่",
          acc: "ppemail@domail.com",
          nLabel: "ชื่อบัญชี",
          name: "FS-Exchanger",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          dLabel: "ข้อบังคับ",
          detail: "ต้องเลือกส่งแบบชำระสินค้า",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691521756/public/currencies/nt-svg-hd.svg",
          color: "#00A170",
          classes: "align-center justify-center text-center bd-b"
        },
        {
          id: "s05",
          title: "Skrill",
          accLabel: "ชำระเงินมาที่",
          acc: "ppemail@domail.com",
          nLabel: "ชื่อบัญชี",
          name: "FS-Exchanger",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          dLabel: "ข้อบังคับ",
          detail: "ต้องเลือกส่งแบบชำระสินค้า",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691521757/public/currencies/sk-svg-hd.svg",
          color: "#d46187",
          classes: "align-center justify-center text-center bd-r"
        }
      ];
    },
    loadNewOrderBuys() {
      this.bItems = [
        {
          id: "b01",
          title: "ธนาคาร",
          accLabel: "ชื่อธนาคาร",
          acc: "กสิกรไทย",
          nLabel: "เลขที่บัญชี",
          name: "0078750065",
          dLabel: "ชื่อบัญชี",
          detail: "นาง ชลธิ เตชะ",
          dLabel2: "ประเภท",
          detail2: "ออมทรัพย์",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src: "mdi-bank",
          color: "#00A170",
          classes: "align-center justify-center text-center bd-rb"
        },
        {
          id: "b02",
          title: "ทรู วอเลท",
          accLabel: "หมานเลจ",
          acc: "0865001236",
          nLabel: "ชื่อบัญชี",
          name: "นาง ชลธิ เตชะ",
          dLabel: "",
          detail: "",
          dLabel2: "",
          detail2: "",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src:
            "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691522471/public/icons/tmn.svg",
          color: "#00A170",
          classes: "align-center justify-center text-center bd-b"
        },
        {
          id: "b03",
          title: "ดอลฟิน วอเลท",
          accLabel: "โอนเงินมาที่",
          acc: "0865001236",
          nLabel: "ชื่อบัญชี",
          name: "นาง ชลธิ เตชะ",
          dLabel: "",
          detail: "",
          dLabel2: "",
          detail2: "",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src: "#",
          color: "#00A170",
          classes: "align-center justify-center text-center bd-rb"
        },
        {
          id: "b04",
          title: "พร้อมเพย์",
          accLabel: "หมายเลขพร้อมเพย์",
          acc: "0865001236",
          nLabel: "ชื่อบัญชี",
          name: "นาง ชลธิ เตชะ",
          dLabel: "",
          detail: "",
          dLabel2: "",
          detail2: "",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src: "#",
          color: "#00A170",
          classes: "align-center justify-center text-center bd-b"
        },
        {
          id: "b05",
          title: "Facebook Pay",
          accLabel: "ชำระมาที่",
          acc: "@fs-exchanger",
          nLabel: "ชื่อบัญชี",
          name: "นาง ชลธิ เตชะ",
          dLabel: "",
          detail: "",
          dLabel2: "ประเภท",
          detail2: "บุคลล",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src: "mdi-facebook",
          color: "#00A170",
          classes: "align-center justify-center text-center bd-rb"
        },
        {
          id: "b06",
          title: "WeChat Pay",
          accLabel: "ส่งเงินมาที่",
          acc: "fs.wechat@fs-exchange.com",
          nLabel: "",
          name: "",
          dLabel: "ชื่อบัญชี",
          detail: "นาง ชลธิ เตชะ",
          dLabel2: "ประเภท",
          detail2: "personal",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src: "#",
          color: "#00A170",
          classes: "align-center justify-center text-center bd-b"
        },
        {
          id: "b07",
          title: "Line BK",
          accLabel: "ไลน์ไออดี",
          acc: "fs-rate",
          nLabel: "ชื่อโปรไฟล์",
          name: "FS EXCHANGER",
          dLabel: "",
          detail: "",
          dLabel2: "ประเภท",
          detail2: "บุคลล",
          fLabel: "เอกสารที่ต้องใช้",
          file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
          desLabel: "คำเตือน!",
          description: "ต้องชำระแบบ",
          src: "#",
          color: "#00b900",
          classes: "align-center justify-center text-center bd-r"
        }
      ];
    },
    openFlow2(item) {
      this.flow1 = false;
      this.subtitle = item.text2;
      this.flow2 = true;
    },
    openFlow3(item) {
      this.flow1 = false;
      this.subtitle = item.text2;
      this.flow3 = true;
    },
    closeFlow2() {
      this.flow2 = false;
      this.subtitle = "";
      this.flow1 = true;
    },
    closeFlow3() {
      this.flow3 = false;
      this.subtitle = "";
      this.flow1 = true;
    },
    openSDialog(sItem) {
      const sellItems = [
        {
          id: "1",
          data: sItem.accLabel,
          rClass: "transparent",
          cClass:
            "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
        },
        {
          id: "2",
          data: sItem.acc,
          rClass: "transparent",
          cClass:
            "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
        },
        {
          id: "3",
          data: sItem.nLabel,
          rClass: "transparent",
          cClass:
            "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
        },
        {
          id: "4",
          data: sItem.name,
          rClass: "transparent",
          cClass:
            "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
        },
        {
          id: "5",
          data: sItem.dLabel,
          rClass: "transparent",
          cClass:
            "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
        },
        {
          id: "6",
          data: sItem.detail,
          rClass: "transparent",
          cClass:
            "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
        },
        {
          id: "7",
          data: sItem.ffLabel,
          rClass: "transparent",
          cClass:
            "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
        },
        {
          id: "8",
          data: sItem.file,
          rClass: "transparent",
          cClass:
            "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
        },
        {
          id: "9",
          data: sItem.desLabel,
          rClass: "transparent",
          cClass:
            "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
        },
        {
          id: "10",
          data: sItem.description,
          rClass: "transparent",
          cClass:
            "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
        }
      ];
      this.sDialog = true;
      this.color = sItem.color;
      this.dSub = sItem.title;
      this.sellItems = sellItems;
    },
    openBDialog(bItem) {
      let buyItems = [];
      buyItems.push(
        Object.assign(
          {},
          {
            id: "1",
            data: bItem.accLabel,
            rClass: "transparent",
            cClass:
              "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
          }
        )
      );
      buyItems.push(
        Object.assign(
          {},
          {
            id: "2",
            data: bItem.acc,
            rClass: "transparent",
            cClass:
              "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
          }
        )
      );
      if (bItem.nLabel) {
        buyItems.push(
          Object.assign(
            {},
            {
              id: "3",
              data: bItem.nLabel,
              rClass: "transparent",
              cClass:
                "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
            }
          )
        );
      }
      if (bItem.name) {
        buyItems.push(
          Object.assign(
            {},
            {
              id: "4",
              data: bItem.name,
              rClass: "transparent",
              cClass:
                "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
            }
          )
        );
      }
      if (bItem.dLabel) {
        buyItems.push(
          Object.assign(
            {},
            {
              id: "5",
              data: bItem.dLabel,
              rClass: "transparent",
              cClass:
                "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
            }
          )
        );
      }
      if (bItem.detail) {
        buyItems.push(
          Object.assign(
            {},
            {
              id: "6",
              data: bItem.detail,
              rClass: "transparent",
              cClass:
                "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
            }
          )
        );
      }
      if (bItem.dLabel2) {
        buyItems.push(
          Object.assign(
            {},
            {
              id: "7",
              data: bItem.dLabel2,
              rClass: "transparent",
              cClass:
                "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
            }
          )
        );
      }
      if (bItem.detail2) {
        buyItems.push(
          Object.assign(
            {},
            {
              id: "8",
              data: bItem.detail2,
              rClass: "transparent",
              cClass:
                "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
            }
          )
        );
      }
      if (bItem.fLabel) {
        buyItems.push(
          Object.assign(
            {},
            {
              id: "9",
              data: bItem.fLabel,
              rClass: "transparent",
              cClass:
                "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
            }
          )
        );
      }
      if (bItem.file) {
        buyItems.push(
          Object.assign(
            {},
            {
              id: "10",
              data: bItem.file,
              rClass: "transparent",
              cClass:
                "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
            }
          )
        );
      }
      if (bItem.desLabel) {
        buyItems.push(
          Object.assign(
            {},
            {
              id: "11",
              data: bItem.desLabel,
              rClass: "transparent",
              cClass:
                "align-end justify-center text-center px-2 py-2 bd-7 t-white transparent medium"
            }
          )
        );
      }
      if (bItem.description) {
        buyItems.push(
          Object.assign(
            {},
            {
              id: "12",
              data: bItem.description,
              rClass: "transparent",
              cClass:
                "align-center justify-center text-center px-2 py-2 bd-7 t-light bg-white medium"
            }
          )
        );
      }
      this.bDialog = true;
      this.color2 = bItem.color;
      this.dSub2 = bItem.title;
      this.buyItems = buyItems;
    },
    closeSDialog() {
      this.dSub = "";
      this.color = "";
      this.sellItems = [];
      this.$nextTick(() => {
        this.sDialog = false;
      });
    },
    closeBDialog() {
      this.dSub2 = "";
      this.color2 = "";
      this.buyItems = [];
      this.$nextTick(() => {
        this.bDialog = false;
      });
    }
  }
};
</script>
