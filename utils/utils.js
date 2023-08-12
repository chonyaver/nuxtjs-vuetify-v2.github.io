import dayjs from "dayjs";

export function getDate(v) {
  return dayjs(v).format("DD/MM/YY HH:mm");
}

export function getFullDate(v) {
  return dayjs(v).format("DD/MM/YYYY HH:mm:ss");
}

export function setDate(v) {
  return dayjs(v).format("DD-MM-YYYY-HH-mm");
}

export function getDecimal(v) {
  return Number(v).toFixed(2);
}

export function multiply(a, b) {
  return a * b;
}

/**
 * แสดงข้อความ 4 ตัวอักษรสุดท้าย
 * @param {String} str
 * */
export function lastFour(str) {
  const pattern = /.(?=.{4})/g;
  return str.replace(pattern, " ");
}

/**
 * @param {String} str
 * */
export function lastPass(str) {
  const pattern = /.(?=.{4})/g;
  return str.replace(pattern, "x");
}

export function getStatus(order) {
  switch (order.status) {
    case "Pending":
      return "รอดำเนินการ";
    case "Processing":
      return "กำลังดำเนินการ";
    case "Success":
      return "สำเร็จ";
    case "Canceled":
      return "ยกเลิกแล้ว";
    case "Returned":
      return "คืนเงินแล้ว";
    case "Failed":
      return "ล้มเหลว";
    default:
      return "";
  }
}

export function getOrderType(order) {
  if (order.type === "sell") {
    return "ขาย";
  } else if (order.type === "buy") {
    return "ซื้อ";
  } else {
    return "";
  }
}

export function getOrderPath(order) {
  switch (order.path) {
    case "currency01":
      return "PP";
    case "currency02":
      return "WM";
    case "currency03":
      return "PP";
    case "currency04":
      return "NT";
    case "currency05":
      return "SK";
    default:
      return "";
  }
}

export function getOrderPathName(order) {
  switch (order.path) {
    case "currency01":
      return "PayPal";
    case "currency02":
      return "Web Money";
    case "currency03":
      return "Perfect Money";
    case "currency04":
      return "Neteller";
    case "currency05":
      return "Skrill";
    default:
      return "";
  }
}

export function getBankName(bank) {
  switch (bank.bankName) {
    case "KBANK":
      return "กสิกรไทย";
    case "BBL":
      return "กรุงเทพฯ";
    case "SCB":
      return "ไทยพานิชย์";
    case "TTB":
      return "ทหารไทยธนชาติ";
    case "BOA":
      return "กรุงศรีอยุธยา";
    case "KTB":
      return "กรุงไทย";
    case "KKP":
      return "เกียรตินาคินภทร";
    case "GSB":
      return "ออมสิน";
    case "CIMB":
      return "ซีไอเอ็มบีไทย";
    case "UOB":
      return "ยูโอบีฯ";
    case "BAAC":
      return "ธ.ก.ส.";
    case "LH":
      return "แลนด์แอนด์เฮ้าส์";
    case "CITY":
      return "ซิตี้แบ้งค์";
    case "other":
      return `${bank.bankName2}`;
    default:
      return "";
  }
}

export function getBankStatus(bank) {
  switch (bank.bankStatus) {
    case "request":
      return "โปรดส่งเอกสารยืนยันตัวตน";
    case "checking":
      return "กำลังตรวจสอบ";
    case "verified":
      return "ยืนยันแล้ว";
    default:
      return "";
  }
}

export function getPhoneStatus(account) {
  switch (account.phoneStatus) {
    case "request":
      return "โปรดยืนยันเบอร์โทรฯ";
    case "checking":
      return "กำลังตรวจสอบ";
    case "verified":
      return "ยืนยันแล้ว";
    default:
      return "";
  }
}

export function getPassStatus(account) {
  switch (account.passportStatus) {
    case "request":
      return "โปรดส่งเอกสารยืนยันตัวตน";
    case "checking":
      return "กำลังตรวจสอบ";
    case "verified":
      return "ยืนยันแล้ว";
    default:
      return "";
  }
}

export function getSocialName(social) {
  switch (social.socialName) {
    case "TMN":
      return "ทรู วอเลท";
    case "FBPAY":
      return "เฟสบุ๊ค เพย์";
    case "WCPAY":
      return "วีแชท เพย์";
    case "DOLPHIN":
      return "ดอลฟิน";
    case "PROMPT":
      return "พรร้อมเพย์";
    default:
      return "";
  }
}

export function getReceiver(order) {
  const pattern = /.(?=.{4})/g;
  const val = String(order.receiver).replace(pattern, " ");
  let text;
  if (order.receiver.startsWith("PROMPT")) {
    text = "PromptPay<" + val + ">";
  } else if (order.receiver.startsWith("TMN")) {
    text = "TrueWallet<" + val + ">";
  } else if (order.receiver.startsWith("FBPAY")) {
    text = "FacebookPay<" + val + ">";
  } else if (order.receiver.startsWith("WCPAY")) {
    text = "WeChatPay<" + val + ">";
  } else if (order.receiver.startsWith("DOLPHIN")) {
    text = "DolphinWallet<" + val + ">";
  } else {
    text = "ธนาคาร<--" + val + ">";
  }
  return text;
}
