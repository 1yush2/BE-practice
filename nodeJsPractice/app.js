// ******The VERY BASICS******* //

// const amount = 12;

// if (amount < 10) {
//   console.log("smol");
// } else {
//   console.log("biggi");
// }

// console.log("node APP? lel");
// console.log(__dirname);

//********Under standing modules*******//

// const data = require("./understandModule/names");
// const displayData = require("./understandModule/namefunction");

// displayData(data);
// // mind grenades

// require("./understandModule/mindgrenade");

//********OS MODULE*******//

// const os = require("os");

// const user = os.userInfo();
// console.log(user);

// // returnign system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);
// console.log(os.type());

//********PATH MODULE*******//

// const path = require("path");

// const absolutePath = path.resolve(__dirname, "app.js");
// //gets absolute path
// console.log(absolutePath);

//********FILE MODULE*******//

// const { readFileSync, writeFileSync } = require("fs");

// const fileModule = readFileSync("./understandModule/fileModule.txt", "utf8");

// // reads contents inside the file lol
// console.log(fileModule);

// //creates a new file if does not exist and enters the data from 2nd param
// writeFileSync(
//   "./understandModule/fileModuleSecond.txt",
//   `The result looks like this: ${fileModule}`
// );

// // **********call stack understandings **********//
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 0);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// console.log(1);

// Promise.resolve().then(function boo() {
//   console.log("ehe");
// });

// Promise.resolve().then(function boo() {
//   console.log("hehe");
// });

// // micro taskes are pushed first on call stack then macro, example of micro promises & example of macro settimout

//******** http  RUNNING SERVER MODULE*******//

// const http = require("http");

// http
//   .createServer((req, res) => {
//     if (req.url === "/") {
//       return res.end("The node app works on homePage my bros");
//     }
//     if (req.url === "/about") {
//       return res.end("The node app works on aboutPage my bros");
//     }
//     return res.end(
//       `<h1>Sorry does not exist</h1> <a href="/"> go back home lol</a>`
//     );
//   })
//   .listen(4000, "localhost", () => {
//     console.log("It's running on http://localhost:4000 xd");
//   });

function hehe(someValue, aFunctionOnly) {
  console.log("doSomething and call function");
  aFunctionOnly();
}

hehe(undefined, () => console.log("maybe did the callback bro"));

