function miniMaxSum(arr) {
let max = Math.max(...arr),
        min = Math.min(...arr)

    arr.splice(arr.indexOf(max), 1)
    arr.splice(arr.indexOf(min), 1)
    console.log(
        arr.reduce((acc, curr) => acc + curr, 0) + min, 
        arr.reduce((acc, curr) => acc + curr, 0) + max)
}

const arr = [1, 2, 3, 4, 5]
miniMaxSum(arr)