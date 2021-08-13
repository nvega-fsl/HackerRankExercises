function sumUpperLeft(matrix){
    return matrix.slice(0, matrix.length / 2)
        .map(arr => arr.slice(0, arr.length / 2).reduce((ac, cu) => ac + cu))
        .reduce((ac, cu) => ac + cu)
}

function reverseColumn(i, matrix) {
    const column = matrix.map(arr => arr[i]).reverse()
    return matrix.map((arr, index) => 
        arr.slice(0, i).concat(column[index]).concat(arr.slice(i + 1)))
}

function reverseRow(i, matrix) {
    return matrix.slice(0, i).concat(matrix[i].reverse()).concat(matrix.slice(i + 1))
}

const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

console.log(sumUpperLeft(matrix))
console.log(reverseColumn(1, matrix))
console.log(reverseRow(1, matrix))