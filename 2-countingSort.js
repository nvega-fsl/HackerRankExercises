function countingSort(arr) {
    let countArr = Array.from({length:100}, () => 0)
    for(let i = 0; i < arr.length; i++){
        ++countArr[arr[i]]
    }
    return countArr
}


countingSort([1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,7,7,9,9,11,11])