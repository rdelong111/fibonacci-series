function fibonacci(num) {
  let fibList = [0, 1];
  if (num < 2) {
    return fibList[num];
  }

  for (let i = 2; i <= num; i++) {
    fibList.push(fibList[i - 2] + fibList[i - 1]);
  }

  return fibList[fibList.length - 1];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

/*
Initialize and set the first two elements of the fibonacci sequence
If num is less than 2:
  return the 'num' element of the fibList

Iterate through a loop that completes num - 2 times:
  Push to fibList the sum of the previous two iteration of fibList

return the last element of fibList
*/

/*
Set the first two elements of the fibonacci sequence in array called fibList.
If num is less than 2, then return fibList[num].
If num is greater than 2, then set a for loop to iterate until the current wanted 'num' element.
In the for loop, the current iteration of the fibList is equal to the sum of the previous 2 iterations.
Once the for loop is complete, return the last element of the fibList.
*/