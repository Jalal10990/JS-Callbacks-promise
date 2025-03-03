// alert('jalal');
console.log("thiss is promise");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("no random number was not supprting you");
  } else {
    setTimeout(() => {
      console.log("yes i am done");
      resolve("Ali");
    }, 3000);
  }
});
// then and catch function 
// prom1.then((a) => {
//   console.log(a);
// }).catch((err)  =>{
//     console.log(err)
// });

// Promises chaning 
// Promise API 
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("no random number was not supprting you again");
    } else {
        setTimeout(() => {
            console.log("yes i am done again");
            resolve("Jalal");
        }, 1000);
    }
});
// Promise.all 
let p3 = Promise.allSettled([prom1, prom2])
p3.then((a) => {
    console.log(a)
}).catch((err)  =>{
     console.log(err)
 });

//  Promise.allSettled 
//promise.race
//promise.any
//promise.resolve
//promise.reject

// JS .json
	// Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	// "Print to console": {
	// 	"prefix": "clog",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// },
	// "alert" : {
	// 	"prefix": "alt",
	// 	"body" :[
	// 		"alert('$1');",
	// 		"$2"
	// 	],
	// }
	// }