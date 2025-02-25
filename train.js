// console.log("Jack Ma maslahatlari");
// const List = [
// "yahshi talaba boling" // 20 Yoshgach
// "To'g'ri boshliq tanlang va koproq hato qiling" //30dan 40 yoshgacha
// "O'zingizga ishlshni boshlang" //30dan 40yoshgacha
// "Siz kuchli bo'lgan narsalarni qiling" // 40dan 50 yoshgach
// "Yoshlarga invistitsiya kiriting" // 50dan 60yoshgacha
// "Endi dam oling , foydasi yo'q" //60yoshdan kegin

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

//Task A
function sozlar(e, soz) {
  const result = [];
  soz.split("").map((harf) => {
    if (harf === e) {
      return result.push(harf);
    }
  });
  return result.length;
}

console.log(sozlar("e", "ele"));

//Task B
function countDigits(a) {
  const result = [];
  a.split("").map((element) => {
    if (element >= 0 && element <= 9) {
      return result.push(element);
    }
  });
  return result.length;
}
console.log(countDigits("ad2a54y79wet0sfgb9"));
