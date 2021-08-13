function diagonalDifference(arr) {
    let diag1 = 0,
        diag2 = 0
    for(let i = 0; i < arr.length; i++){
        diag1 += arr[i][i]
        diag2 += arr[arr.length - 1 - i][i]
    }
    return Math.abs(diag1 - diag2)
}

const arr = [
    [1, 2, 1],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(diagonalDifference(arr))