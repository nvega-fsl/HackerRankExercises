function superDigit(n, k) {
    // let x = parseInt(n.toString()) 
    // while (x > 9){
    //     x = x.toString().split('').map(x => parseInt(x)).reduce((a,b) => a+b)
    // }
    // x = x * k
    // while (x > 9){
    //     x = x.toString().split('').map(x => parseInt(x)).reduce((a,b) => a+b)
    // }
    // return x

    // n = n.toString().repeat(k).split('')
    // let x = 0
    // while (n.length > 0){
    //     x += parseInt(n.shift())
    //     if (n.length === 0){
    //         if (x > 9){
    //             n = x.toString().split('')
    //             x = 0
    //         }
    //     }
    // }
    // return x

    const helper = (n, sum, k) => {
        if (n.length === 0 && sum < 10){
            return sum
        }else if(n.length === 0){
            return helper(sum.toString().split(''), 0)
        }
        sum += parseInt(n.shift())
        return helper(n, sum)
    }

    n = n.toString().split('')
    return helper(n, 0, k)
}

console.log(superDigit(4757362, 10000))
