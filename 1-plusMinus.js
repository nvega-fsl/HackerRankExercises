function plusMinus(arr) {
    let p = 0, 
        n = 0, 
        z = 0
    arr.forEach(x => {
        if (x > 0){
            p++
        }else if (x < 0){
            n++
        }else{
            z++
        }
    })
    console.log((p / arr.length).toFixed(4))
    console.log((n / arr.length).toFixed(4))
    console.log((z / arr.length).toFixed(4))
}