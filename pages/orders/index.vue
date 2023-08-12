<template>
  <v-row id="top" align="center" justify="center">
    <v-col
      cols="12"
      sm="12"
      md="8"
      lg="6"
      xl="5"
      align="center"
      class="px-2 py-2"
    >
      <v-card id="target" light elevation="0" color="transparent">
        <v-card-text class="transparent" style="height: 46px"></v-card-text>
        <v-card-title class="large t-light">
          <v-spacer />
          ประวัติ
          <v-spacer />
        </v-card-title>
        <v-card-text class="transparent py-2 px-1" align="center" v-scroll.#target="onScroll">
          <v-spacer />
          <v-card light elevation="12" class="bg10-2 bd-7 mx-auto mt-2" width="auto">
            <v-simple-table
              light
              class="transparent pa-2 align-center justify-center text-center bd-7"
              style="width: 100%; max-width: 500px"
            >
              <thead class="grad8 bd-7">
              <tr class="transparent">
                <th
                  v-for="(header, i) in headers"
                  :key="i"
                  :colspan="header.flex"
                  class="align-center justify-center text-center pa-1 transparent"
                  style="width: auto"
                >
                  <span class="mx-auto t-text t-white">
                    {{ header.name }}
                  </span>
                </th>
              </tr>
              </thead>
              <tbody class="transparent">
              <tr
                v-for="order in orders"
                :key="order.tag"
                class="transparent bd-inline"
              >
                <td
                  v-if="order.date"
                  colspan="3"
                  class="transparent align-center justify-center text-sm-start text-md-start text-lg-center text-xl-center pa-1"
                  style="width: auto;"
                >
                <span class="ml-auto mr-auto t-text t-light">
                  {{ getDate(order.date) }}
                </span>
                </td>
                <td
                  v-if="order.amount"
                  colspan="4"
                  class="transparent align-center justify-center text-sm-start text-md-start text-lg-center text-xl-center pa-1"
                  style="width: auto;"
                >
                <span class="ml-auto mr-auto t-text t-light">
                  {{ getOrderType(order) }} {{ getOrderPath(order) }} &dollar;{{ getDecimal(order.amount) }}
                </span>
                </td>
                <td
                  v-if="order.status"
                  colspan="3"
                  class="transparent align-center justify-center text-sm-start text-md-start text-lg-center text-xl-center pa-1"
                  style="width: auto;"
                >
                <span class="ml-auto mr-auto t-text">
                  {{ getStatus(order) }}
                </span>
                </td>
                <td
                  v-if="order.currencyId"
                  colspan="2"
                  class="transparent align-center justify-center text-sm-start text-md-start text-lg-center text-xl-center pa-1"
                  style="width: auto;"
                >
                  <v-btn
                    color="#0072B5"
                    class="ml-auto mr-auto t-text pointer"
                    dark
                    x-small
                    nuxt
                    :to="{ name: 'orders-id', params: { id: order.tag } }"
                  >
                    ดู
                  </v-btn>
                </td>
              </tr>
              </tbody>
            </v-simple-table>
          </v-card>
          <v-spacer />
        </v-card-text>
        <v-card-text>
          <custom-footer />
        </v-card-text>
      </v-card>
      <br /><br />
      <v-btn
        v-if="goTop === true"
        class="grad5"
        dark
        fab
        small
        absolute
        fixed
        bottom
        right
        link
        href="#top"
      >
        <v-icon class="t-white">
          mdi-chevron-up
        </v-icon>
      </v-btn>
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
import CustomFooter from '../../components/CustomFooter.vue';
import { ordersData } from '../../utils/datas';
import { getDate, getStatus, getDecimal, getOrderType, getOrderPath } from '../../utils/utils';

export default {
  name: 'Orders',

  components: {
    CustomFooter
  },

  data () {
    return {
      orders: [],
      errSnack: false,
      errMsg: null,
      headers: [
        { name: 'วัน/เวลา', flex: 3 },
        { name: 'รายการ', flex: 4 },
        { name: 'สถานะ', flex: 3 },
        { name: 'เพิ่มเติม', flex: 2 }
      ],
      goTop: false
    };
  },

  head () {
    return {
      title: 'ประวัติ',
      link: [
        { rel: 'favicon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    };
  },

  computed: {
    uid () {
      return this.$store.state.uid;
    }
  },

  created () {
    this.loadOrders();
  },

  methods: {
    loadOrders () {
      const orders = ordersData();
      this.orders = orders
    },
    getClass (order) {
      if (!order.status) {
        return;
      }

      switch (order.status) {
        case 'Pending':
          return 'ml-auto mr-auto t-text teal--text';
        case 'Processing':
          return 'ml-auto mr-auto t-text teal--text';
        case 'Success':
          return 'ml-auto mr-auto t-text green--text';
        case 'Canceled':
          return 'ml-auto mr-auto t-text red--text';
        case 'Returned':
          return 'ml-auto mr-auto t-text green--text';
        case 'Failed':
          return 'ml-auto mr-auto t-text red--text';
        default:
          return '';
      }
    },
    refresh () {
      this.$nuxt.refresh();
    },
    onScroll (event) {
      const scrollTop = event.target.scrollTarget.scrollTop;
      if (scrollTop > 200) {
        this.goTop = true;
      } else {
        this.goTop = false;
      }
    },
    getStatus,
    getOrderPath,
    getDecimal,
    getDate,
    getOrderType
  }
};
</script>
