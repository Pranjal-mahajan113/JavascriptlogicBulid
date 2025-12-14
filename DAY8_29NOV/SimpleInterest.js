// function simpleInterest (principalAmount,interstRateyearly,durationInyears){
//     let multiplicationResult = principalAmount * interstRateyearly * durationInyears;
//     let simpleInterest = multiplicationResult / 100;
// // console.log(principalAmount,interstRateyearly,durationInyears,multiplicationResult,simpleInterest);

// return simpleInterest;
// }
// console.log(simpleInterest(1000,5,1));


function simpleInterest ( principalAmount,interstRateyearly,durationInyears) {
    let multiplicationResult = principalAmount * interstRateyearly*durationInyears;
    let simpleInterestfind = multiplicationResult/100;
    simpleInterestfind = simpleInterestfind.toFixed(2)
    return simpleInterestfind;

}
console.log(simpleInterest(1000,5,10));
console.log(simpleInterest(20000,8.755,5));