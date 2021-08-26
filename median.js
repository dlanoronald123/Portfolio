

const str = '2 5 7 9 10 1 4 8 3'

const compose = (a,b,c,d) => (data) => a(b(c(d(data))))

const makeArr = (str) => {
    return str.split(' ')
}

const cleanData = (arr) => {
    return arr.map(elem => parseInt(elem))
}

//Bubble Sort
const sort = (arr) =>{
    let temp 
    for (let i = arr.length; i > 0; i--){
        for (let j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]){
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

const getMedian = (arr) => {
    const isEven = arr.length % 2 === 0
    return isEven ? arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)]
}

const composedGetNum = compose(getMedian, sort, cleanData, makeArr)
console.log(composedGetNum(str))