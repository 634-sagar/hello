// WAP to simulate an online food ordering system using callback functions.
// Implement the following operations in sequence:
// Search Food
// Order Food
// Payment
// use setTimeout() to simulate delays and callback functions to maintain the execution order.

function SearchFood(item, order){
    console.log("Searching Food...", item);
    setTimeout(()=>{
        order(item);
    }, 2000);
}
function orderFood(item, order){
    console.log("Ordering...");
    setTimeout(()=>{
        let id = Math.floor(Math,random() *9999);
        order(id);
    }, 3000);
}
function payment(item, id, cb3) {
    console.log(`Processing payment for ${item} with id no: ${id}`);
    setTimeout(()=>{
        let status = !true;
        cb3(status);
    }, 6000);
}
SearchFood("Momo", function (item){
    console.log("Food found:", item);
    orderFood(item, function (orderData){
        console.log("Order created sucessfully:", orderData);
        payment(item,orderData, function (status) {
            if (status) {
                console.log("Payment sucessfully completed");
            } else {
                console.log("Payment sucessfully not completed");
            }
        });
    });
});
