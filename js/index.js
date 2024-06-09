// if
// 1-masala
// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");
// let c = +prompt("3-sonni kiriting");
// let res ="";

// if (a<b || b>c && c>0){
//     res ="shart bajarildi";
// }else{
//     res="shart bajarilmadi"
// }
// console.log(res);

// 3-masala
// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");
// let c = +prompt("3-sonni kiriting");
// let d = +prompt("4-sonni kiriting");

// let res ="";
// if ((a+b+c+d>50 && a>10 || b>10 || c>10 || d>10)){
//     res ="Yig'indi katta va hech bo'lmaganda biri katta"
// }else{
//     res ="eror"
// }
// console.log(res);

// 4-masala
// let a = +prompt("1-sonni kiriting");
// let b = +prompt("2-sonni kiriting");

// let res ="";
// if (a*b<100 && a+b>20 && a %2==0){
//     res ="shart bajarildi"
// }else{
//     res ="eror"
// }
// console.log(res);

// 6-masala
// let a = +prompt("1-sonni kiritng");
// let b = +prompt("2-sonni kiritng");
// let res =""

// if((a%b==0)&& (b>0 || b%5==0 )){
//     res ="shart bajarildi"
// }else{
//     res ="xato"
// }
// console.log(res);

// 7-masala
// let a = +prompt("1-sonni kiritng");
// let b = +prompt("2-sonni kiritng");
// let c = +prompt("3-sonni kiritng");
// let res =""
// if ((a>0 && b>0 && c>0) && a**2>b || c %2==1){
//     res ="shart bajarildi"
// }else{
//     res="eror"
// }
// console.log(res);

// 8-masala
// let a = +prompt("sonni kiriting");
// let b = prompt("1-suzni kiritng");
// let d = prompt("2-suzni kiritng");
// let c = (b.length)
// let res =""
// if ((c>a && d=="hello") || a%2==0){
//     res = "shart bajarildi";
// }else{
//     res ="erorr"
// }
// console.log(res);
 
// 9-masala
// let a = +prompt("1-sonni kiritng");
// let b = +prompt("2-sonni kiritng");
// let c = +prompt("3-sonni kiritng");
// let res =""
// if (((a+b+c)/3>10) && a>b || c<15){
//     res ="shart bajarildi"
// }else{
//     res="eror"
// }
// console.log(res);

// ternary operatori
// 1-masala
// let a = +prompt("sonni kiritng")
// a>0 ?  console.log("musbat"): console.log("manfiy");

// 2-masala
// let a = +prompt("1-sonni kiritng");
// let b = +prompt("2-sonni kiritng");
// a>b ? console.log("birinchisi katta"): console.log("2-son katta");

// 3-masala
// let a = prompt("suzni kiritng") ;
// let b = (a.length );
// b>5 ?  console.log("uzun string"): console.log("qisqa string");

// // 4-masala
// let a = +prompt("1-sonni kiritng");
// a%2==0 ? console.log("juft"): console.log("toq");

// 5-masala
// let a = +prompt("1-sonni kiritng");
// a>0 ? console.log("musbat son"): console.log("manfiy son");

// swich case

// // 1-masala
// let a = +prompt("sonni kiritng");
// switch (a) {
//   case 1:
//     console.log("Duyshanba");
//     break;
//   case 2:
//     console.log("Seyshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;

//   default:
//     console.log("bunday hafta kuni yuq");
//     break;
// }

// // 2-masala
// let a = +prompt("sonni kiritng");
// switch (a) {
//   case 1:
//     console.log("Yanvar");
//     break;
//   case 2:
//     console.log("Fevral");
//     break;
//   case 3:
//     console.log("Mart");
//     break;
//   case 4:
//     console.log("Aprel");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("Iyun");
//     break;
//   case 7:
//     console.log("Iyul");
//     break;
//   case 8:
//     console.log("Avgust");
//     break;
//   case 9:
//     console.log("Sentyabr");
//     break;
//   case 10:
//     console.log("Oktyabr");
//     break;
//   case 11:
//     console.log("Noyabr");
//     break;
//   case 12:
//     console.log("Dekabr");
//     break;

//   default:
//     console.log("bunday oy  yuq");
//     break;
// }

// // 3-masala
// let a = prompt("(A,B,D,E,F) baxoingizni kiriting");
// switch (a) {
//   case "A":
//     console.log("Alo");
//     break;
//   case "B":
//     console.log("Yaxshi");
//     break;
//   case "D":
//     console.log("Qoniqarli");
//     break;
//   case "E":
//     console.log("qoniqarsz");
//     break;
//   case "F":
//     console.log("yomon");
//     break;

//   default:
//     console.log("bunday baxo mezoni  yuq");
//     break;
// }

// 4-masala
// let a = +prompt(" sonni kiriting");
// switch (a) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("baxor");
//     break;
//   case 7:
//   case 1:
//   case 8:
//     console.log("yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("kuz");
//     break;

//   default:
//     console.log("bunday oy nomi  yuq");
//     break;
// }

// 5-masala
// let a = +prompt("sonni kiritng");
// switch (a) {
//   case 1:
//     console.log("birinchi");
//     break;
//   case 2:
//     console.log("ikkinchi");
//     break;
//   case 3:
//     console.log("uchinchi");
//     break;
//   case 4:
//     console.log("turtinchi");
//     break;
//   case 5:
//     console.log("beshinchi");
//     break;
//   case 6:
//     console.log("oltinchi");
//     break;
//   default:
//     console.log("Nomalum qiymat");
//     break;
// }




// for
// // 1-masala
// let res =""
// for (let i = 1; i <=10; i++) {
//     res =i**2
//     console.log(res);
// }



// 2-masala

// for (let i = 10; i>=1; i--) {
//     console.log(i);
// }

// 4-masala
// let res =""
// for (let i =2; i<=20; i+=2) {
//     console.log(i);
// }