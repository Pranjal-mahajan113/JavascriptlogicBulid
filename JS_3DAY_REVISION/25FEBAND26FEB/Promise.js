// const USERS_API = "https://jsonplaceholder.typicode.com/users";

// const user = fetch(USERS_API);
// console.log(user)
const cart = ["shoes","kurta","pants"];
const promise = createOrder(cart);
promise.then(function(){
    proceedTopayment(orderID);
})
//
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){

    })
    return pr;
}