function exponet (base,exponet) {
    let result = 1;
    for(let i=1;i<=exponet;i++){
        result = base * result;
        // console.log(i);
    }
    return result;

}
console.log(exponet(2,4));


//2^4=2X2x2x2=16
//1-->result = 1;
// loop run i =1
// i=1-->1=2*1==>2-(store new result 1 to 2==2)
// i=2-->2*2==>4(base always same 2)
// only update result