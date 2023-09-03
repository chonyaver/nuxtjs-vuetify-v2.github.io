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
      <v-card light elevation="0" color="transparent">
        <v-card-text class="transparent" style="height: 48px"></v-card-text>
        <v-card-text class="transparent">
          <v-container fluid>
            <v-row align="center" justify="center">
              <v-col
                align="center"
                class="col-sm-12 col-md-12 col-lg-6 col-xl-6 pa-1 align-center justify-center"
              >
                <v-card
                  light
                  color="transparent"
                  class="grad7 pa-2 mx-auto"
                  elevation="16"
                  max-width="400px"
                  rounded
                >
                  <v-simple-table :class="sClass" light>
                    <caption class="transparent py-1 align-center text-center justify-center h6 t-white">
                      ราคาที่รับซื้อ
                    </caption>
                    <tr class="transparent">
                      <th
                        v-for="sHeader in sHeaders"
                        :key="sHeader.id"
                        :colspan="sHeader.flex"
                        class="transparent"
                      >
                        <v-btn
                          color="lightgrey"
                          :class="sHeader.class"
                          outlined
                          block
                        >
                          {{ sHeader.text }}
                        </v-btn>
                      </th>
                    </tr>
                    <tr
                      v-for="sellItem in sellItems"
                      :key="sellItem.id"
                      class="transparent"
                    >
                      <td colspan="2" class="transparent">
                        <v-btn
                          color="lightgrey"
                          class="rounded-r-0 py-2 pr-1 my-1 ml-1 text-end bg-white t-table pointer"
                          outlined
                          block
                          @click="openSell(sellItem)"
                        >
                          <v-spacer />
                          &dollar;{{ sellItem.min }} &minus; &dollar;{{ sellItem.max }}
                        </v-btn>
                      </td>
                      <td class="transparent">
                        <v-btn
                          color="lightgrey"
                          class="rounded-0 py-2 px-1 my-1 text-center bg-white t-table"
                          outlined
                          block
                        >
                          &colon;
                        </v-btn>
                      </td>
                      <td class="transparent">
                        <v-btn
                          color="lightgrey"
                          class="rounded-0 py-2 px-1 my-1 text-center bg-white t-table"
                          outlined
                          block
                          @click="openSell(sellItem)"
                        >
                          ฿ {{ getDecimal(sellItem.rate) }}
                        </v-btn>
                      </td>
                      <td class="transparent">
                        <v-btn
                          color="lightgrey"
                          class="rounded-0 py-2 px-1 my-1 text-center bg-white t-table"
                          outlined
                          block
                        >
                          &colon;
                        </v-btn>
                      </td>
                      <td class="transparent">
                        <v-btn
                          color="lightgrey"
                          class="rounded-l-0 py-2 px-1 my-1 mr-1 text-center bg-white t-table"
                          outlined
                          block
                          @click="openSell(sellItem)"
                        >
                          {{ getDecimal(sellItem.tax) }}&percnt;
                        </v-btn>
                      </td>
                    </tr>
                  </v-simple-table>
                  <v-card-actions class="transparent pa-1">
                    <v-spacer />
                    <v-btn
                      title="แจ้งโอน"
                      :class="btnClass"
                      dark
                      rounded
                      nuxt
                      to="/new-order"
                    >
                      แจ้งโอนขาย
                    </v-btn>
                    <v-spacer />
                    <v-btn
                      title="คำณวนอัตราแลกเปลี่ยน"
                      :class="btnClass"
                      dark
                      rounded
                      nuxt
                      to="/calculator"
                    >
                      เครื่องคำณวน
                    </v-btn>
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
                align="center"
                class="col-sm-12 col-md-12 col-lg-6 col-xl-6 pa-1 align-center justify-center"
              >
                <v-card
                  light
                  color="transparent"
                  class="grad7 pa-2 mx-auto mt-sm-3 mmt-md-3"
                  elevation="16"
                  max-width="400px"
                  rounded
                >
                  <v-simple-table :class="sClass" light>
                    <caption class="transparent py-1 align-center text-center justify-center h6 t-white">
                      ราคาขาย
                    </caption>
                    <tr class="transparent">
                      <th
                        v-for="sHeader in sHeaders"
                        :key="sHeader.id"
                        :colspan="sHeader.flex"
                      >
                        <v-btn
                          color="lightgrey"
                          :class="sHeader.class"
                          outlined
                          block
                        >
                          {{ sHeader.text }}
                        </v-btn>
                      </th>
                    </tr>
                    <tr
                      v-for="buyItem in buyItems"
                      :key="buyItem.id"
                      class="transparent"
                    >
                      <td colspan="2">
                        <v-btn
                          color="lightgrey"
                          class="rounded-r-0 py-2 pr-1 my-1 ml-1 text-end bg-white t-table pointer"
                          outlined
                          block
                          @click="openBuy(buyItem)"
                        >
                          <v-spacer />
                          &dollar;{{ buyItem.min }} &minus; &dollar;{{ buyItem.max }}
                        </v-btn>
                      </td>
                      <td>
                        <v-btn
                          color="lightgrey"
                          class="rounded-0 py-2 px-1 my-1 text-center bg-white t-table"
                          outlined
                          block
                        >
                          &colon;
                        </v-btn>
                      </td>
                      <td>
                        <v-btn
                          color="lightgrey"
                          class="rounded-0 py-2 px-1 my-1 text-center bg-white t-table"
                          outlined
                          block
                          @click="openBuy(buyItem)"
                        >
                          ฿ {{ getDecimal(buyItem.rate) }}
                        </v-btn>
                      </td>
                      <td>
                        <v-btn
                          color="lightgrey"
                          class="rounded-0 py-2 px-1 my-1 text-center bg-white t-table"
                          outlined
                          block
                        >
                          &colon;
                        </v-btn>
                      </td>
                      <td>
                        <v-btn
                          color="lightgrey"
                          class="rounded-l-0 py-2 px-1 my-1 mr-1 text-center bg-white t-table"
                          outlined
                          block
                          @click="openBuy(buyItem)"
                        >
                          {{ getDecimal(buyItem.tax) }}&percnt;
                        </v-btn>
                      </td>
                    </tr>
                  </v-simple-table>
                  <v-card-actions class="transparent pa-1">
                    <v-spacer />
                    <v-btn
                      title="แจ้งโอน"
                      color="transparent"
                      :class="btnClass"
                      dark
                      rounded
                      nuxt
                      to="/new-order"
                    >
                      แจ้งโอนซื้อ
                    </v-btn>
                    <v-spacer />
                    <v-btn
                      title="คำณวนอัตราแลกเปลี่ยน"
                      color="transparent"
                      :class="btnClass"
                      dark
                      rounded
                      nuxt
                      to="/calculator"
                    >
                      เครื่องคำณวน
                    </v-btn>
                    <v-spacer />
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-text class="transparent">
          <v-spacer />
          <v-card
            light
            class="grad7 pa-2 mx-auto"
            elevation="16"
            max-width="400px"
          >
            <v-card-text class="bg-white pa-2 justify-center text-center align-baseline medium bd-b">
              <u class="t-pink1 medium">
                หมายเหตุ
              </u>&nbsp;อัตราแลกเปลี่ยนทั้งหมดบนหน้านี้ ใช้เงินบาทเป็นสกุลเงินกลาง ถือเป็นราคาซื้อขายที่ถูกกำหนดเพื่อใช้กับเว็บแอปนี้โดยเฉพาะ และ
              ไม่มีความเกี่ยวข้องใดๆกับอัตราแลกเปลี่ยนของสถาบันการเงินอื่นๆหรือธนาคารใดๆทั้งสิ้น ทางเว็บแอปขอสงวนสิทธิ์ในการเปลี่ยนแปลง
              อัตราแลกเปลี่ยม ภาษีที่หักเก็บ และ ค่าทำเนียม โดยจะแสดงไว้บนหน้านี้เป็นหลัก
            </v-card-text>
            <v-card-text class="bg-white pa-2 justify-center text-center align-baseline">
              <small v-if="path === 'currency01'" class="small t-light2">
                &starf; Paypal คือชื่อแบรนด์ Paypal เป็นลิขสิทธิ์ของ Paypal
              </small>
              <small v-else-if="path === 'currency02'" class="small t-light2">
                &starf; Web Money คือชื่อแบรนด์ Web Money เป็นลิขสิทธิ์ของ Web Money
              </small>
              <small v-else-if="path === 'currency03'" class="small t-light2">
                &starf; Perfect Money คือชื่อแบรนด์ Perfect Money เป็นลิขสิทธิ์ของ Perfect Money
              </small>
              <small v-else-if="path === 'currency04'" class="small t-light2">
                &starf; Neteller คือชื่อแบรนด์ Neteller เป็นลิขสิทธิ์ของ Neteller
              </small>
              <small v-else-if="path === 'currency05'" class="small t-light2">
                &starf; Skrill คือชื่อแบรนด์ Skrill เป็นลิขสิทธิ์ของ Skrill
              </small>
            </v-card-text>
          </v-card>
          <v-spacer />
        </v-card-text>
      </v-card>
      <br><br>
      <custom-header :title="title" />
    </v-col>
  </v-row>
</template>

<script>
import CustomHeader from '../components/CustomHeader.vue';
import { getDecimal } from '../utils/utils';
import { getNtBuys, getNtSells, getPmBuys, getPmSells, getPpBuys, getPpSells, getSkBuys, getSkSells, getWmBuys, getWmSells } from '../utils/currencies';

export default {
  name: 'Currency',

  components: {
    CustomHeader
  },

  layout: 'simple',

  data () {
    return {
      title: '',
      path: '',
      sHeaders: [
        {
          id: '1',
          flex: 2,
          text: 'ดอลลาร์ฯ',
          class: 'rounded-r-0 py-2 pr-1 my-1 ml-1 text-end bg-white medium'
        },
        {
          id: '2',
          flex: 1,
          text: ':',
          class: 'rounded-0 py-2 px-1 my-1 text-center bg-white medium'
        },
        {
          id: '3',
          flex: 1,
          text: 'บาท',
          class: 'rounded-0 py-2 px-1 my-1 text-center bg-white medium'
        },
        {
          id: '4',
          flex: 1,
          text: ':',
          class: 'rounded-0 py-2 px-1 my-1 text-center bg-white medium'
        },
        {
          id: '5',
          flex: 1,
          text: 'ถูกหัก',
          class: 'rounded-l-0 py-2 px-1 my-1 mr-1 text-center bg-white medium'
        }
      ],
      sellItems: [],
      sClass: '',
      buyItems: [],
      btnClass: '',
      goTop: false,
      errSnack: false,
      errMsg: null
    };
  },

  head () {
    return {
      title: 'ดูอัตราแลกเปลี่ยน',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    };
  },

  mounted () {
    const urlencoded = new URLSearchParams(window.location.search);
    const id = urlencoded.get('id');
    this.path = id;
    if (id === 'currency01') {
      this.title = 'ดูอัตราแลกเปลี่ยน Paypal°';
      this.sClass = 'blue-pp pa-1 mx-auto';
      this.btnBClass ='grad-pp t-white medium';
      this.sellItems = getPpSells();
      this.buyItems = getPpBuys();
    } else if (id === 'currency02') {
      this.title = 'ดูอัตราแลกเปลี่ยน Web Money°';
      this.sClass = 'blue-wm pa-1 mx-auto';
      this.btnBClass ='grad-wm t-white medium';
      this.sellItems = getWmSells();
      this.buyItems = getWmBuys();
    } else if (id === 'currency03') {
      this.title = 'ดูอัตราแลกเปลี่ยน Perfect Money°';
        this.sClass = 'red-pm pa-1 mx-auto';
        this.btnBClass ='grad-pm t-white medium';
        this.sellItems = getPmSells();
        this.buyItems = getPmBuys();
    } else if (id === 'currency04') {
      this.title = 'ดูอัตราแลกเปลี่ยน Neteller°';
        this.sClass = 'green-nt pa-1 mx-auto';
        this.btnBClass ='grad-nt t-white medium';
        this.sellItems = getNtSells();
        this.buyItems = getNtBuys();
    } else if (id === 'currency05') {
      this.title = 'ดูอัตราแลกเปลี่ยน Skrill°';
        this.sClass = 'purple-sk pa-1 mx-auto';
        this.btnBClass ='grad-sk t-white medium';
        this.sellItems = getSkSells();
        this.buyItems = getSkBuys();
    }
  },

  methods: {
    getDecimal,
    onScroll (e) {
      this.goTop = e.scrollTarget.scrollTop > 100;
    },
    openSell (sellItem) {
      this.$router.push({
        path: '/new-order/create',
        query: {
          path: this.path,
          type: sellItem.type,
          currencyId: sellItem.id,
          rate: sellItem.rate,
          tax: sellItem.tax,
          fee: sellItem.fee,
          remaining: sellItem.remaining
        }
      });
    },
    openBuy (buyItem) {
      this.$router.push({
        path: '/new-order/create',
        query: {
          path: this.path,
          type: buyItem.type,
          currencyId: buyItem.id,
          rate: buyItem.rate,
          tax: buyItem.tax,
          fee: buyItem.fee,
          remaining: buyItem.remaining
        }
      })
    }
  }
};
</script>
