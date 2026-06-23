function SearchFood(item){
   return new Promise(function fun1(res, rej) {
 
   console.log("Searching Food...", item);
    setTimeout(()=>{
        rej(item);
    }, 2000);
});
}

function orderFood(item){
    return new Promise(function fun2(res, rej) {

    console.log("Ordering...");
    setTimeout(()=>{
        let id = Math.floor(Math,random() *9999);
        console.log(`Order created sucessfully with id no: ${id}`);
        res({ item, id});
    }, 3000);
});
}

function payment(item, id) {
    return new Promise(function fun3(res, rej){
    console.log(`Processing payment for ${item} with id no: ${id}`);
    setTimeout(()=>{
        let status = !true;
        res(status);
    }, 6000);
});
}
async function foodOrder(item){
let res1 = await SearchFood(item);
let res2 = await orderFood(res1);
let res3 = await payment(res2.item, res2.id);
return res3;
}

SearchFood("Momo")
.then((status) =>{
    console.log("Payment sucessfully completed");
})
    
    .catch(function error(error){
console.log(error)
    })
    .finally(() => {
        console.log("always execute");
    });
   