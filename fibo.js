// function fibonnacci(n){
//   let arr = [0,1]
//   for (let i=2; i<n; i++){
//     arr.push(arr[i-1] + arr[i-2])
//   }
//   console.log(arr[n-1])
// }
// fibonnacci(6)

// function fibo(n){
//   if (n < 3) {
//     return n - 1
//   } else {
//     return fibo(n - 1) + fibo(n - 2)
//   }
// }
// console.log(fibo(8))


// const init = {
//   1:0,
//   2:1
// }

// function fib(num, hash = init){
//   if (hash[num] === undefined) {
//     hash[num] = fib(num - 1, hash) + fib(num -2)
//   }
//   return hash[num]
// }
// console.log(fib(8))

// function fibo(n){
//     let a = 0;
//     let b = 1;
//     while (n > 1){
//       [a,b] = [b, a + b];
//       n -= 1;
//     }
//     return a;
//   }
  
//   console.log(fibo(8))

const Fibo = (num) => {
    const arr = [0,1]
    let a,b
    for (let i = 2; i < num; i++){
        a = arr[i-1]
        b = arr[i-2]
        arr.push(a + b)
    }
    return arr.toString().split(' ').join()
}

console.log(Fibo(20))
  

const Evens = (arr) => {
    let sum = 0;
    arr.forEach(elem => {
        if (elem % 2 === 0){
            sum += elem
        }
    })
    return sum
}

const arr = [2,2,2,1]
console.log(Evens(arr))