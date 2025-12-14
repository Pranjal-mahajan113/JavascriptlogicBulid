// function averagenumber(inputarr) {
//   let sumofelem = 0;
//   for (let i = 0; i < inputarr.length; i++) {
//     // console.log(inputarr[i]);
//     sumofelem += inputarr[i];
//     console.log("Elements sums", sumofelem);
//   }
//   let result = sumofelem / inputarr.length;
//   return result;
// }
// console.log(averagenumber([1, 2, 4]));

function averagenumber(inputarr) {
  let sumofelem = 0;

  for (let i = 0; i < inputarr.length; i++) {
    // console.log(inputarr[i]);
    sumofelem = sumofelem + inputarr[i];
  }
  let result = sumofelem/inputarr.length;
  return result;
}

console.log(averagenumber([1, 2, 3]));
