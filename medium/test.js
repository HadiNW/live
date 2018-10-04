 var index = 0
    for (var i = 0; i < sortedArray.length; i++) {
        var temp = [];
        for (var j = arr.length; j >= 0 ; j--) {
            if (sortedArray[index] !== undefined)  temp.push(sortedArray[index])           
            index ++   
        }
       if (temp.length !== 0){
            result.push(temp)
       }  
       

       
    }
    return result