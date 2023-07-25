<template>
  <v-row align="start" justify="center">
    <v-col
      cols="12"
      sm="12"
      md="8"
      lg="6"
      xl="5"
      class="px-3 py-2"
      align="center"
    >
      <v-card light class="transparent bd-7" elevation="18">
        <v-card-text class="transparent" style="height: 48px;"></v-card-text>
        <v-card-text class="bg-white bd-7 align-center">
          <v-spacer />
          <v-card
            light
            class="pa-2 mx-auto my-2 bd-7"
            max-width="600px"
            elevation="18"
            outlined
          >
            <v-list light elevation="0" class="mx-1" fill-width>
              <v-subheader align="center">
                <v-spacer />
                <v-btn
                  color="#0072B5"
                  class="bg-white t-blue-pp medium mx-auto my-1"
                  dark
                  link
                  outlined
                  rounded
                  small
                  @click="refresh()"
                >
                  <v-icon v-if="$vuetify.breakpoint.mdAndDown" class="t-blue-pp">
                    mdi-refresh
                  </v-icon>
                  <span v-if="$vuetify.breakpoint.lgAndUp" class="medium t-blue-pp">
                    ดึงข้อมูล
                  </span>
                </v-btn>
                <v-spacer />
              </v-subheader>
              <v-list-item
                v-for="item in items"
                :key="item.id"
                dense
              >
                <v-list-item-content style="width: 50%">
                  <v-list-item-title align="end" class="pr-1 medium t-light">
                    {{ item.value }} &colon;
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content style="width: 50%">
                  <v-list-item-title v-if="item.id === '1'" align="start" class="pl-1 medium t-light">
                    {{ order.tag }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '2'" align="start" class="pl-1 medium t-light">
                    {{ getOrderType(order) }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '3'" align="start" class="pl-1 medium t-light">
                    {{ getOrderPathName(order) }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '4'" align="start" class="pl-1 medium t-light">
                    {{ getStatus(order) }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '5'" align="start" class="pl-1 medium t-light">
                    $ {{ getDecimal(order.amount) }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '6'" align="start" class="pl-1 medium t-light">
                    {{ getDecimal(order.rate) }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '7'" align="start" class="pl-1 medium t-light">
                    ฿ {{ getDecimal(order.total) }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '8'" align="start" class="pl-1 medium t-light">
                    {{ getDate(order.date) }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '9'" align="start" class="pl-1 medium t-light">
                    {{ order.done }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '10'" align="start" class="pl-1 medium t-light">
                    {{ order.receiver }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '11'" align="start" class="pl-1 medium t-light">
                    {{ order.failure }}
                  </v-list-item-title>
                  <v-list-item-title v-if="item.id === '12'" align="start" class="pointer pl-1 medium t-blue-pp" @click.stop="dialog = true">
                    ดูภาพที่อับโหลด
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-spacer />
        </v-card-text>
      </v-card>
      <custom-header :title="title" />
      <v-dialog
        v-model="dialog"
        color="white"
        light
        max-width="400"
      >
        <v-card light color="white" elevation="0" class="pa-2">
          <v-img
            :src="order.orderURL"
            class="ma-1"
            max-width="100%"
            height="auto"
          ></v-img>
          <v-card-actions class="bg-white pa-1">
            <v-spacer />
            <v-btn
              color="black"
              class="medium t-pink2 mb-2 mt-1"
              dark
              rounded
              @click="dialog = false"
            >
              ปิด
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import CustomHeader from "~/components/CustomHeader.vue";
import {
  getStatus,
  getDate,
  getOrderType,
  getOrderPathName,
  getDecimal
} from "~/utils/utils";

export default {
  components: {
    CustomHeader
  },

  layout: "simple",

  data() {
    return {
      title: "รายละเอียดธุรกรรม",
      order: {
        tag: "orderId0001",
        type: "sell",
        path: "currency02",
        amount: 1305.6,
        rate: 32.45,
        total: 100000.66,
        status: "Processing",
        date: Date.now(),
        done: "ไม่ระบุ",
        failure: "NA",
        receiver: "TrueWallet4824",
        orderURL:
          "https://res.cloudinary.com/dzre5cq2d/image/upload/v1659704392/public/bg011_yashbj.jpg"
      },
      dialog: false,
      items: [
        { id: "1", value: "รหัสธุรกรรม" },
        { id: "2", value: "ประเภท" },
        { id: "3", value: "ช่องทาง" },
        { id: "4", value: "สถานะ" },
        { id: "5", value: "จำนวน(USD)" },
        { id: "6", value: "อัตราแลกเปลี่ยน" },
        { id: "7", value: "ยอดสุทธิ(THB)" },
        { id: "8", value: "แจ้งโอนเมื่อ" },
        { id: "9", value: "เสร็จสิ้นเมื่อ" },
        { id: "10", value: "บัญชีรับ" },
        { id: "11", value: "หมายเหตุ" },
        { id: "12", value: "หลักฐานการโอน" }
      ]
    };
  },

  methods: {
    getStatus,
    getDate,
    getOrderType,
    getOrderPathName,
    getDecimal,
    refresh() {
      this.$nuxt.refresh();
    }
  }
};
</script>
