// function arraySort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         // Swap arr[i] and arr[j]
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

// // Test the function with the given array
// let dice_numbers = [100, 89, 300, 51, 200, 400, 41, 69, 100];
// let sorted_numbers = arraySort(dice_numbers);
// console.log(sorted_numbers); // [400, 300, 200, 100, 100, 89, 69, 51, 41]

// function compressString(str) {
//   let result = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     // If the current character is the same as the next character, increment count
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       // If the current character is not the same as the next character, append the count and character to the result
//       result += count + str[i];
//       count = 1;
//     }
//   }

//   return result;
// }

// // Example usage
// console.log(compressString("ABBCCC")); // Output: "2A2B3C"

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2);
  let sortedArr = arr.sort();
  if (sortedArr.length % 2 == 1) {
    return sortedArr[1];
  } else {
    let res = (sortedArr[1] + sortedArr[2]) / 2;
    console.log(res.toFixed(5));
    console.log(parseInt(res).toFixed(5));
  }
  console.log(sortedArr);
};

findMedianSortedArrays([1, 2], [3, 4]);
