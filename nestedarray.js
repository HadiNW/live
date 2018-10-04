const createArray = (row, col) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    let result = []
    for (let i = 0; i < row; i++){
        let temp = []
        for (let j = 0; j < col; j++){
            let index = Math.floor(Math.random()* alphabet.length)
            temp.push(alphabet[index])
        }
        result.push(temp)
    }
    return result
}

console.log(createArray(5, 3))
// console.log(createArray(5, 4))