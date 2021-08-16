function caesarCipher(s, k) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const mayusAlph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    if (k >= alphabet.length)
        k = k % alphabet.length
    console.log(k, alphabet.length)

    const code = alphabet.slice(k) + alphabet.slice(0, k)
    const mayusCode = mayusAlph.slice(k) + mayusAlph.slice(0, k)

    let arr = s.split('')
    for(let i = 0; i < arr.length; i++){
        let index = alphabet.indexOf(arr[i])
        if (index > -1){
            arr[i] = code[index]
        }else {
            index = mayusAlph.indexOf(arr[i])
            if (index > -1){
                arr[i] = mayusCode[index]
            }
        }
    }
    return arr.join('')
}

console.log(caesarCipher('www.abc.xyz', 87))