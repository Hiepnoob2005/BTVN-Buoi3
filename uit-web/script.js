// // // alert("Hello world from js")
// // //var namevar sẽ dc hoilsting và nằm đây
// // namevar = "abc"
// // console.log(namevar);
// // var namevar

// // let namelet
// // namelet = "abcd"
// // console.log(namelet);

// // const nameconst = "abcde"
// // console.log(nameconst);

// // var name = "MHX2025"
// // var name = "mxh2023" //tái khai báo
// // console.log(name)

// // let name2 = "uit2025"
// // name2 = "uit2024"
// // console.log(name2) //gán lại

// // // const là luôn k đổi

// // function test(){
// //     var nameVar = "namev"
// //     let nameLet = "let" //block là chỉ in dc trong {}
// //     const nameConst = "const" //block
// //     console.log(nameVar)
// //     console.log(nameLet)
// //     console.log(nameConst)

// // }
// let name = "abcd";
// name = 123; //auto cast
// name = true;
// console.log(typeof name);

// let arr = [1, 2, 3, 3, 4];
// let obj = {
//   nameobj: "abc",
//   age: 23,
// };
// let objb = obj;
// objb.nameobj = "thay doi";
// console.log(objb);
// // function test2 (){
// //     console.log(obj)
// // }
// let a = 3;
// let b = 6;
// console.log(a + b);
// console.log(a ** b); // lũy thừa
// let score = 70;
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 70) {
//   console.log("B");
// } else console.log("C");
// let score2;
// switch (score2) {
//   case 90:
//     console.log("A");
//     break;
//   case 70:
//     console.log("b");
//     break;
//   case 60:
//     console.log("C");
//     break;
//   default:
//     console.log("D");
// }
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// let person = {
//     name: "john",
//     age: 23,
//     hobby: "soccer"
// }
// for (let a in person){
//     console.log(`Prop: ${person[a]}`);

// }
// let arr = [1,2,3,4,4]
// for (let i of arr){
//     console.log(i);
// }
// for (let i in arr){
//     console.log(i);
// }
// function sayhello(){
//     console.log("Hello");
// }
// function sayhello2 (name){
//     console.log(`Hello ${name}`);
// }
// sayhello2("alice")
// const greet = (name2) => {
//     console.log(`Hello ${name2}`);
//     //hàm mũi tên
// }
// greet("Grooy")
// //hàm ẩn danh
// setTimeout(function() {
//     console.log("Delayed");
// },1000)
// //hàm chạy ngay
// (function() {
//     console.log("Chay ngay khi dinh nghia");
// })();
let arr = [1, 2, 3, 4, 5];
let newarr = arr.map((x) => x * 2);
let newarr2 = arr.filter((x) => x % 2 == 0);
let sumarr = arr.reduce((acc, val) => acc + val, 0);
