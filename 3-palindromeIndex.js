function palindromeIndex(s){
    const isPalindrome = (s) => s === s.split('').reverse().join('')
    const removeAtIndex = (s, i) => s.split('').filter((val, index) => i !== index).join('')
    
    if (isPalindrome(s))
        return -1
        
    for(let i = 0; i < s.length; i++){
        if (isPalindrome(removeAtIndex(s, i))){
            return i   
        }
    }
    
    return -1
}

console.log(palindromeIndex('almostsomlax'))
