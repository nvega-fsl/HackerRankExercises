function gridChallenge(grid){
    grid = grid.map(x => x.split('').sort().join(''))
    for(let i = 0; i < grid[0].length; i++){
        let column = grid.map(s => s[i]).join('')
        console.log(column)
        if (column !== column.split('').sort().join('')){
            return 'NO'
        }
    }
    return 'YES'
}

const grid = [ 'ebacd', 'fghji', 'olmkn', 'trpqs', 'xywuv' ]
console.log(gridChallenge(grid))