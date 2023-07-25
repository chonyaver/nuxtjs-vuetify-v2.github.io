export const user = () => {
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
};

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
