console.log("Jalal uni ma ha")
console.log("ALI uni ma ha")

setTimeout(() =>{
    console.log("I am inside settimeout")
}, 2000);

setTimeout(() =>{
    console.log("I am inside settimeout 3")
}, 2000);


console.log("The End");

// callback function 

const fn = () => {
    console.log("Nothing")
}
 
// const callback = 


const loadScript = (src, callback) => {
   let sc = document.createElement("script");
   sc.src = src;
   sc.onload = callback("jalal", fn);
   document.head.append(sc) 
     
}
// prism 
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg, fn)=>{
    console.log(arg)
    fn("firstarg", ()=>{
       ddg("secondarg", ()=>{  //  id dificult to understand callbaks to inner callbacks 

        })
    })
} )