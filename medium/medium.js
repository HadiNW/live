function snakeLadderSorting(arr) {
    var arrayTemp = [];
    var result = []
    //console.log(arr.length)
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            arrayTemp.push(arr[i][j])
        }
    }
    var sortedArray = sortArray(arrayTemp);

    for (var i = 0; i < arr.length; i++) {
        result.push([])
    }

    var index = sortedArray.length-1
    for (var i = 0; i < sortedArray.length; i++) {
        var temp = [];
        if (arr[1].length % 2 === 0) {
            for (var j = arr.length; j >= 0 ; j--) {
                if (sortedArray[index] !== undefined)  temp.push(sortedArray[index])           
                index --   
            }
        }else {
            for (var j = arr.length-1; j >= 0 ; j--) {
                if (sortedArray[index] !== undefined)  temp.push(sortedArray[index])           
                index --   
            }
        }
        
       if (temp.length !== 0){
           if (arr[1].length % 2 === 1) {
                if (i % 2 === 0) {
                    result[i] = reverse(temp)
                }else{
                    result[i] = temp
                }
           }else {
            if (i % 2 === 0) {
                result[i] = reverse(temp)
            }else{
                result[i] = temp
            }
           }
           
            
       }  
       

       
    }
    return result
   
}

function sortArray(angkaArr){
    for(var i=0; i<angkaArr.length;i++){
        for(var j=0;j<angkaArr.length-1;j++){
          if(angkaArr[j]>=angkaArr[j+1]){
            temp=angkaArr[j];
            angkaArr[j]=angkaArr[j+1]
            angkaArr[j+1]=temp
          }
        }
      }return angkaArr;
    }
    function reverse(array) {
        let output = []
        for (let i = array.length-1; i >=0; i--) {
            output.push(array[i])
        }
      
        return output;
      }

// 4 * 3 
console.log(snakeLadderSorting([
    [6,4,5,12],
    [1,3,8,11],
    [9,2,7,13]
 ]));
 /* [ 
      [ 9, 11, 12, 13 ], 
      [ 8, 7, 6, 5 ], 
      [ 1, 2, 3, 4 ] 
    ] 
 */

console.log(snakeLadderSorting([
    [11,65,88,12,66],
    [18,55,33,24,78],
    [44,58,35,76,19],
    [35,67,90,19,25],
    [97,46,37,17,29],
]));

// /*
// [ [ 76, 78, 88, 90, 97 ],
//   [ 67, 66, 65, 58, 55 ],
//   [ 35, 35, 37, 44, 46 ],
//   [ 33, 29, 25, 24, 19 ],
//   [ 11, 12, 17, 18, 19 ] ]

// */
 