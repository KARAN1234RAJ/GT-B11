let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = arr1.map((value) => value * 2);
console.log(arr1);
console.log(arr2);

arr3 = arr1.filter((i) => {
  return i >= 5;
});
console.log(arr3 );
