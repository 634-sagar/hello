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

SearchFood("Momo")
.then(function data1(item){
    
    console.log("Food found:", item);
   return  orderFood(item);
}).then(function data2(orderData){
        console.log("Order created sucessfully:", orderData.id);
        return payment(orderData.item, orderData.id); 
})
.then(function data3(status){
            
                console.log("Payment sucessfully completed");
            })
    .catch(function error(error){
                console.log(error);
            
        });
    

