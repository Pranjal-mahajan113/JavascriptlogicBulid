function maxnumber(arrayinputnum) {
  console.log(arrayinputnum);
  let biggestnumber = arrayinputnum[0];
  for (let i = 1; i < arrayinputnum.length; i++) {
    if(arrayinputnum[i] > biggestnumber){
        biggestnumber = arrayinputnum[i];
    }
    console.log(arrayinputnum[i]);
  }
  return biggestnumber;
}
console.log(maxnumber([4, 5, 6, 11, 9]));
