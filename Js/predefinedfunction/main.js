setInterval(()=>{
    console.log("setInterval");
}, 3000);
setTimeout(()=>{
    console.log("first");
}, 0);
console.log("second");
setTimeout(()=>{
    console.log("third");
}, 0);
setTimeout(()=>{
    console.log("3");
}, 2000);