export function userData() {
  return {
    uid: "$uid",
    userId: "user_id",
    tags: "verified",
    group: "member",
    date: Date.now(),
    linkLine: true,
    createdFrom: "email",
    account: {
      email: "youremail@domain.com",
      emailVerified: true,
      fullName: "Chonthic Waverer",
      phoneNumber: "+66865001236",
      phoneVerified: true,
      phoneStatus: "verified",
      passport: "4570400004422",
      passportVerified: true,
      passportStatus: "verified",
      passportURL:
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1690787997/public/sample/LINE_P20181129_171247_vxmvfy.jpg",
      storageURL: "#",
      lastUpdatePhoto: Date.now(),
      line: "FS EXCHANGER",
      linkSocial: true,
      socials: [
        {
          id: "so01",
          socialName: "PromptPay",
          social: "0865001236"
        },
        {
          id: "so02",
          socialName: "FacebookPay",
          social: "chonthicha.noon@gmail.com"
        }
      ]
    },
    bank: {
      bankName: "other",
      bankName2: "สแตนดารท ชาเตอร์",
      bankNumber: "0078750065",
      bankVerified: true,
      bankStatus: "checking",
      bankURL:
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1690787996/public/sample/LINE_P20180815_184118051_urcdta.jpg",
      storageURL: "#",
      lastUpdatePhoto: Date.now()
    }
  };
}

export const messages = () => {
  return {
    m01: {
      id: "m01",
      title: "แจ้งโอนสำเร็จ",
      message: "ระบบได้ดำเนินการตามคำสั่งแจ้งโอนของท่านเรียบร้อยแล้ว",
      status: "unread",
      date: Date.now()
    },
    m02: {
      id: "m02",
      title: "อัพเเดต สำเร็จ",
      message: "ระบบได้ดำเนินการตามคำสั่งแจ้งโอนของท่านเรียบร้อยแล้ว",
      status: "unread",
      date: Date.now()
    },
    m03: {
      id: "m03",
      title: "Welcome",
      message: "This is welcome message",
      status: "read",
      date: Date.now()
    },
    m04: {
      id: "m04",
      title: "แจ้งโอนสำเร็จ",
      message: "ระบบได้ดำเนินการตามคำสั่งแจ้งโอนของท่านเรียบร้อยแล้ว",
      status: "read",
      date: Date.now()
    },
    m05: {
      id: "m05",
      title: "แจ้งโอนสำเร็จ",
      message: "ระบบได้ดำเนินการตามคำสั่งแจ้งโอนของท่านเรียบร้อยแล้ว",
      status: "read",
      date: Date.now()
    }
  };
};

export function newOrderSells() {
  return [
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
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/pp_jwyiyn.svg",
      color: "#0072B5",
      classes: "transparent bd-4 bd-pp pointer"
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
      color: "#34568B",
      src:
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/wm_psbngh.svg",
      classes: "pa-1 bd-4 bd-wm pointer"
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
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/pm_swnyoo.svg",
      color: "#E9897E",
      classes: "pa-1 bd-4 bd-pm pointer"
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
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/nt_oqoe3g.svg",
      color: "#00A170",
      classes: "pa-1 bd-4 bd-nt pointer"
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
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691752040/public/currencies/sk_dkxisv.svg",
      color: "#d46187",
      classes: "pa-1 bd-4 bd-sk pointer"
    }
  ];
}

export function newOrderBuys() {
  return [
    {
      id: "b01",
      title: "ธนาคาร",
      accLabel: "ชื่อธนาคาร",
      acc: "กสิกรไทย",
      nLabel: "เลขที่บัญชี",
      name: "0078750065",
      dLabel: "ชื่อบัญชี",
      detail: "นาง ชลธิ เตชะ",
      fLabel: "เอกสารที่ต้องใช้",
      file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
      dLabel2: "ประเภท",
      detail2: "ออมทรัพย์",
      desLabel: "คำเตือน!",
      description: "ต้องชำระแบบ",
      src: "mdi-bank",
      color: "#004c75",
      classes: "pa-1 bd-4 bd-pp pointer"
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
      desLabel: "คำเตือน!",
      description: "ต้องชำระแบบ",
      src:
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691811791/public/banks/tmn.svg",
      color: "orange",
      classes: "pa-1 bd-4 bd-tmn pointer"
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
      desLabel: "คำเตือน!",
      description: "ต้องชำระแบบ",
      src: "#",
      color: "red",
      classes: "pa-1 bd-4 bd-pm pointer"
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
      desLabel: "คำเตือน!",
      description: "ต้องชำระแบบ",
      src:
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691811791/public/banks/prompt.svg",
      color: "#05a1fd",
      classes: "pa-1 bd-4 bd-pp pointer"
    },
    {
      id: "b05",
      title: "Facebook Pay",
      accLabel: "ชื่อธนาคาร",
      acc: "กสิกรไทย",
      nLabel: "เลขที่บัญชี",
      name: "0078750065",
      dLabel: "ชื่อบัญชี",
      detail: "นาง ชลธิ เตชะ",
      dLabel2: "ประเภท",
      detail2: "ออมทรัพย์",
      desLabel: "คำเตือน!",
      description: "ต้องชำระแบบ",
      src: "mdi-facebook",
      color: "#00A170",
      classes: "pa-1 bd-4 bd-wm pointer"
    },
    {
      id: "b06",
      title: "WeChat Pay",
      accLabel: "ชื่อธนาคาร",
      acc: "กสิกรไทย",
      nLabel: "เลขที่บัญชี",
      name: "0078750065",
      dLabel: "ชื่อบัญชี",
      detail: "นาง ชลธิ เตชะ",
      dLabel2: "ประเภท",
      detail2: "ออมทรัพย์",
      desLabel: "คำเตือน!",
      description: "ต้องชำระแบบ",
      src: "mdi-wechat",
      color: "#00A170",
      classes: "pa-1 bd-4 bd-nt pointer"
    },
    {
      id: "b07",
      title: "ไลน์ บีเค",
      accLabel: "ไลน์ไอดี",
      acc: "fs-rate",
      nLabel: "ชื่อโปรไฟล์",
      name: "FS EXCHANGER",
      dLabel: "",
      detail: "",
      fLabel: "หลักฐานการโอน",
      file: "แคปภาพใบเสร็จ/ภาพสลิปโอน",
      dLabel2: "",
      detail2: "",
      desLabel: "ข้อบังคับ!",
      description: "ต้องลงข้อความในบีนทึกเพิ่มเติิมว่า ค่าสินค้้าและบริการ",
      src:
        "https://res.cloudinary.com/dckrvb0rw/image/upload/v1691811790/public/banks/linebk.svg",
      color: "#00b900",
      classes: "pa-1 bd-4 bd-line pointer"
    }
  ];
}

export function ordersData() {
  return [
    {
      tag: "o01",
      path: "currency01",
      type: "sell",
      amount: 100,
      rate: 30,
      total: 3000,
      status: "Failed",
      date: Date.now(),
      currencyId: "pp02",
      ordeerURL: "",
      sstorageURL: "",
      providerId: "email",
      uid: "$uid",
      userId: "$userId",
      phoneNumber: "+66865001236",
      failure: "",
      receiver: "TMN"
    },
    {
      tag: "o02",
      path: "currency01",
      type: "sell",
      amount: 100,
      rate: 30,
      total: 3000,
      status: "Success",
      date: Date.now(),
      currencyId: "pp02",
      ordeerURL: "",
      sstorageURL: "",
      providerId: "email",
      uid: "$uid",
      userId: "$userId",
      phoneNumber: "+66865001236",
      failure: "",
      receiver: "TMN"
    },
    {
      tag: "o03",
      path: "currency03",
      type: "buy",
      amount: 100,
      rate: 30,
      total: 3000,
      status: "Success",
      date: Date.now(),
      currencyId: "pp02",
      ordeerURL: "",
      sstorageURL: "",
      providerId: "email",
      uid: "$uid",
      userId: "$userId",
      phoneNumber: "+66865001236",
      failure: "",
      receiver: "TMN"
    }
  ];
}
