function exponet(base,exponet){
    let result = 1;
    for(let i=1;i<=exponet;i++){
        console.log(result)
        result = result *base;
    }
    return result;

}
console.log(exponet(2,3));
console.log(exponet(5,4));

