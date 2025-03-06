// console.log("Jack Ma maslahatlari");
// const List = [
// "yahshi talaba boling" // 20 Yoshgach
// "To'g'ri boshliq tanlang va koproq hato qiling" //30dan 40 yoshgacha
// "O'zingizga ishlshni boshlang" //30dan 40yoshgacha
// "Siz kuchli bo'lgan narsalarni qiling" // 40dan 50 yoshgach
// "Yoshlarga invistitsiya kiriting" // 50dan 60yoshgacha
// "Endi dam oling , foydasi yo'q" //60yoshdan kegin

const { Route } = require("express");

// ];

//
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if (a <= 20) callback(null, List[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//     setTimeout(function() {
//         callback(null, list[5])
//     },5000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, date) => {
//     if (err) console.log("ERROR:", err);
// else {
//     console.log("javob:", data);
// }
// });
// console.log("passed here 1");

// maslahatBering(55, (err, data) => {
// if( err) console.log('ERROR:', err);
// console.log("javob:", data);
// });

//Asynchronous functionlar

// console.log("Jack Ma maslahatlari");
// const List = [
// "yahshi talaba boling" // 20 Yoshgach
// "To'g'ri boshliq tanlang va koproq hato qiling" //30dan 40 yoshgacha
// "O'zingizga ishlshni boshlang" //30dan 40yoshgacha
// "Siz kuchli bo'lgan narsalarni qiling" // 40dan 50 yoshgach
// "Yoshlarga invistitsiya kiriting" // 50dan 60yoshgacha
// "Endi dam oling , foydasi yo'q" //60yoshdan kegin

// ];

// async function maslahatBering(a) {
//     if(typeof a !== 'number') throw new Error("insert a number",);
//     else if (a <= 20)  return List[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//       return new Promise((resolve, rejact) => {
//        setInterval(() => {
//          resolve(list[5]);
//        }, 1000);
//     });
//   }
// }

// //then/catch...
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     // javob = await maslahatBering(70);
//     // console.log(javob);
//     // javob = await maslahatBering(41);
//     // console.log(javob);
// }
// run();

// colbek functionlar
// console.log("Jack Ma maslahatlari");
// const List = [
//   "yahshi talaba boling", // 20 Yoshgach
//   "To'g'ri boshliq tanlang va koproq hato qiling", //30dan 40 yoshgacha
//   "O'zingizga ishlshni boshlang", //30dan 40yoshgacha
//   "Siz kuchli bo'lgan narsalarni qiling", // 40dan 50 yoshgach
//   "Yoshlarga invistitsiya kiriting", // 50dan 60yoshgacha
//   "Endi dam oling , foydasi yo'q", //60yoshdan kegin
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, List[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, date) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// maslahatBering(55, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });

// // //Task A
// function sozlar(e, soz) {
//   const result = [];
//   soz.split("").map((harf) => {
//     if (harf === e) {
//       return result.push(harf);
//     }
//   });
//   return result.length;
// }

// console.log(sozlar("e", "ele"));

// //Task B
// function countDigits(a) {
//   const result = [];
//   a.split("").map((element) => {
//     if (element >= 0 && element <= 9) {
//       return result.push(element);
//     }
//   });
//   return result.length;
// }
// console.log(countDigits("ad2a54y79wet0sfgb9"));

// // MITASK-C

// // Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// // MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// // @MITASK

// const moment = require("moment");
// class Shop {
//   mahsulot_1;
//   soni_1;
//   mahsulot_2;
//   soni_2;
//   mahsulot_3;
//   soni_3;
//   constructor(mahsulot_1, soni_1, mahsulot_2, soni_2, mahsulot_3, soni_3) {
//     this.mahsulot_1 = mahsulot_1;
//     this.soni_1 = soni_1;

//     this.mahsulot_2 = mahsulot_2;
//     this.soni_2 = soni_2;

//     this.mahsulot_3 = mahsulot_3;
//     this.soni_3 = soni_3;
//   }
//   qabul(mahsulotnomi, soni) {
//     if (mahsulotnomi === this.mahsulot_1) {
//       this.soni_1 = this.soni_1 + soni;
//       return `${moment().format(
//         "HH:mm"
//       )}da ${mahsulotnomi} ${soni} ta Qo'shildi`;
//     } else if (mahsulotnomi === this.mahsulot_2) {
//       this.soni_2 = this.soni_2 + soni;
//       return `${moment().format(
//         "HH:mm"
//       )}da ${mahsulotnomi} ${soni} ta Qo'shildi`;
//     } else if (mahsulotnomi === this.mahsulot_3) {
//       this.soni_3 = this.soni_3 + soni;
//       return `${moment().format(
//         "HH:mm"
//       )}da ${mahsulotnomi} ${soni} ta Qo'shildi`;
//     } else {
//       return `Bizda bunday mahsulot yo'q`;
//     }
//   }
//   sotish(mahsulotnomi, soni) {
//     if (mahsulotnomi === this.mahsulot_1) {
//       if (soni <= this.soni_1) {
//         this.soni_1 = this.soni_1 - soni;
//         return `${moment().format(
//           "HH:mm"
//         )}da ${mahsulotnomi} ${soni} ta sotildi`;
//       } else {
//         return "Bizda uncha mahsulot mavjud emas";
//       }
//     } else if (mahsulotnomi === this.mahsulot_2) {
//       if (soni <= this.soni_2) {
//         this.soni_2 = this.soni_2 - soni;
//         return `${moment().format(
//           "HH:mm"
//         )}da ${mahsulotnomi} ${soni} ta sotildi`;
//       } else {
//         return "Bizda uncha mahsulot mavjud emas";
//       }
//     } else if (mahsulotnomi === this.mahsulot_3) {
//       if (soni <= this.soni_3) {
//         this.soni_3 = this.soni_3 - soni;
//         return `${moment().format(
//           "HH:mm"
//         )}da ${mahsulotnomi} ${soni} ta sotildi`;
//       } else {
//         return "Bizda uncha mahsulot mavjud emas";
//       }
//     } else {
//       return `Bizda bunday mahsulot yo'q`;
//     }
//   }
//   qoldiq() {
//     return `hozir ${moment().format("HH:mm")}da ${this.soni_1} ta ${
//       this.mahsulot_1
//     } ${this.soni_2} ta ${this.mahsulot_2} va ${this.soni_3} ta ${
//       this.mahsulot_3
//     } mavjud!`;
//   }
// }

// const shop = new Shop("non", 4, "lag'mon", 5, "cola", 2);
// console.log(shop.qoldiq());
// console.log(shop.sotish("non", 2));
// console.log(shop.qoldiq());
// console.log(shop.qabul("non", 6));
// console.log(shop.qoldiq());

class dokon {
  mahsulot_1;
  mahsulotsoni_1;
}

// D-TASK:

// // Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// // MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

function checkContent(a, b) {
  const bir = a.split("").sort().join("");
  const ikki = b.split("").sort().join("");
  if (bir === ikki) {
    return true;
  } else {
    return false;
  }
}

console.log(checkContent("mitgroup", "gmtiprou"));

function checkContent(a, b) {
  const bir = a.split("").sort().join("");
  const ikki = b.split("").sort().join("");
  if (bir === ikki) {
    return true;
  } else {
    return false;
  }
}

console.log(checkContent("mitgroup", "gmtiprou"));
