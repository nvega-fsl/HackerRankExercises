function lonelyinteger(a) {
    for(let i = 0; i < a.length; i++){
        if (a.indexOf(a[i]) === a.lastIndexOf(a[i]))
            return a[i]
    }
}

const arr = [1,1,2,4,2,3,3]
console.log(lonelyinteger(arr))