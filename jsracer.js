const commads = process.argv;
const main = () => {
    let players = {
        
    }
}

main (commads[2], commads[3])

const createLine = (num) => {
    let line = []
    for (let i = 0; i < num; i++){        
            line.push('|')    
    }
    return line
}

const createBoard = (player) => {
    for (let i = 0; i < player; i++){
        let line = createLine(commads[3])
        line[0] = 'X'
        console.log(line.join(' '))
    }
}

console.log(createBoard(commads[2]))