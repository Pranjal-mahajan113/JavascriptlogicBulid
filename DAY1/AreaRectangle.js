function area(length, widhth) {
  try {
    if (length <= 0 || widhth <= 0) {
      throw new Error("Invalid input ");
    }
    return length * widhth;
  } catch (error) {
    console.log("Error", error.message);
    return null;
  }
}

console.log(area(5, 5));
console.log(area(-5, 0));
