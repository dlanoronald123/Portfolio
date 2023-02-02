function arraySort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          // Swap arr[i] and arr[j]
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  
  // Test the function with the given array
  let dice_numbers = [100,89,300,51,200,400,41,69,100];
  let sorted_numbers = arraySort(dice_numbers);
  console.log(sorted_numbers); // [400, 300, 200, 100, 100, 89, 69, 51, 41]
  