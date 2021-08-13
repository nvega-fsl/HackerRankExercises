function timeConversion(s) {
    const m = s.substring(s.length - 2, s.length)
    let hour = parseInt(s.substring(0, 2))
    
    if (m === 'PM' && hour !== 12){
        hour += 12
    }else if(m === 'AM' && hour === 12){
        hour = 0
    }

    let leadZero = hour < 10 ? '0' : '' 
    return leadZero + hour + s.substring(2, s.length - 2)
}

const time = '12:40:22AM'
console.log(timeConversion(time))