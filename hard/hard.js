function oneRowKeys(arr) {
    var keyboards = [
        ['Q','W','E','R','T','Y','U','I','O','P'],//0
        ['A','S','D','F','G','H','J','K','L'], //1
        ['Z','X','C','V','B','N','M'] //2
    ];

    var hasiliIndex = [];
    
   // for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < keyboards.length; j++) { // k lvl 0
            for (var k = 0; k < keyboards[j].length; j++) { // lvl 1
            //     for (var i = 0; i < arr.length; i++) {
            //         for (var l = 0; l < arr[i].length; l++) {
            //             if (arr[k][k] === keyboards[j]){
            //                 hasiliIndex.push(j)
            //             }
            //         }
            //     }
            }
            console.log(keyboards[j].length)
        }
   // }
    return hasiliIndex
}

console.log(oneRowKeys(['Roti', 'Gelas', 'Perut', 'Potong']));
// [ 'Roti', 'Perut' ]

// console.log(oneRowKeys(['Kakak', 'Adik', 'Bunda']));
// // []

// console.log(oneRowKeys(['Kopi', 'Topi']));
// // [ 'Topi' ]