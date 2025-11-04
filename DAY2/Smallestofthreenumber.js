function smallestofthree(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else if (c < a && c < b) {
    return c;
  }
  return a;
}

console.log("Smallest of(12,13,56)",smallestofthree(12,13,56));
console.log("Smallest of(1,1,-6)",smallestofthree(1,1,-6));
console.log("Smallest of(6,6,6)",smallestofthree(6,6,6));