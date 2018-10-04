const tictacToe = () => {
    let result = []
    let char = 'XO'
    let chars = ''
    let chars2 =''
    let num = Math.floor(Math.random()*2)
    let loop;
   
        for (let i = 0; i < 4; i++){
            chars += char[num]
        }
        if (chars[0] === 'X'){
            for (let i = 0; i < 5; i++){
                chars2 += 'O'
            }
        }else{
            for (let i = 0; i < 5; i++){
                chars2 += 'X'
            }
        }        
        joinChar = chars + chars2
        let numChar = []
        while (numChar.length < 8){
            let num = Math.floor(Math.random() * 8)
            if (search(num, numChar) > 1){
                
            }else{
                numChar.push(num)
            }
        }
        console.log(numChar)
        let index = 0
        for (let i = 0; i < 3; i++){
            let temp = []
            for (let i = 0; i < 3; i++){
                temp.push(joinChar[index])
                index++
            }
            result.push(temp)
        }
        return result
}

function search (search, array) {
    let low = 0;   
    let high = array.length-1
    for (let i = 0; i < array.length; i++){
       let mid = Math.floor((low + high)/ 2)
        if (array[mid] === search){      
          return mid
        }
        else if (array[mid] < search){
          low = mid + 1
        }else{
          high = mid - 1
        }
    }
    return -1
  }

console.log(tictacToe())