//Reverse a String 

// const rev = (string) => {
//   const arr = string.split("");
//   arr.reverse();
//   string = arr.join("");
//   console.log(string);
// }

// (function (string){
//   let reversed = "";
//   for(let character of string){
//     reversed = character + reversed;
//   }
//   console.log({
//     reversed_value:reversed
//   });
// })("Sample!");

//Palindrome 
// Reverse the string
// Check orig string if they are the same
// const Palindrome = (str) => {
//   const isPalindrome = str.split("").reverse().join("");
//   console.log(str === isPalindrome);
// }

// (function (str){
//   let reversed = '';
//   for (let x of str){
//     reversed = x + reversed;
//   }
//   console.log(str===reversed)
// })("Sample")

// var i = 0 
// while (i < 10){
//     i = i + 1
//     if (i % 2 == 0){
//         console.log(i + 1)
//         // 3 5 7 9 11
//     }
// }

// var i = 0 
// while (i < 10){
//     i = i + 1
//     console.log(i)
//     if (2 * i == i + 1){
//     break;
//     }
// }
//1

// var s = "HelloWorld!!!=)"
// var i = 0
// while (i + 1 < s.length){
//     if (s.charAt(i) != s.charAt(i+1)){
//         console.log(s.charAt(i))
//     }
//     i = i+1
// }
//HeloWorld!=

// let n = 5
// let i = 1 
// let j = 1
// let k = 1
// for (i in n){
//     for (j in n-i) {
//         console.log("")
//     }
//     for (k in i) {
//         console.log("X")
//     }
//     console.log("\n")
// }

//Find the character that appears the most and total number of times it appears.
// const maxChar = (str)=> {
//     let obj = {}
//     for (let i of str)
//         (!obj[i]) ? obj[i]=1 : obj[i]++;
// let maxNum = 0;
// let maxCharacter = '';
//     for (let char in obj){
//         if(obj[char] >= maxNum) {
//             maxNum = obj[char];
//             maxCharacter = char;
//         }
//     }
//     console.log(`${maxCharacter} appears ${maxNum} times`)
// }
// maxChar("heLLLoooo$$3p")

//Reverse an integer
// const revInt = (num) =>{
//     if(num <0) {
//         console.log(-1 * (parseInt(num.toString().split('').reverse().join(''))));
//     }else {
//     console.log(parseInt(num.toString().split('').reverse().join('')));
//     }
// }
// revInt(35)

//FIZZBUZZ
// const fizzBuzz = (num)=> {
//     for (let i = 1; i <= 15; i++)
//     {
//         if(i % 3 === 0 && i % 5 === 0)
//         {
//             console.log("FizzBuzz");
//             i++;
//         }
//         if (i % 3 === 0) 
//         {
//             console.log("Fizz");
//             i++;
//         } 
//         else (i % 5 === 0) 
//         {
//             console.log("Buzz");
//             i++;
//         }
//         if (i>num) break;
//         else console.log(i)
//     }
// }

// fizzBuzz(15);

//Chunked Array

const result=(arr,n)=>{
    let currentlength = arr.length;
    let findResult=[];
    
    while( currentlength > n){
      let chunkArr=arr.splice(0,n)
      currentlength= arr.length
      findResult.push(chunkArr)
    }
    findResult.push(arr) // push remaining part if existing 
    console.log(findResult)
    
  }
  result([1,3,5,6,3,7,9],3)
//   result([10,3,15,6,3,7,9,0,2,6,4],4)