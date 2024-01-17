function simplePair(arr , element) {
    for (let index = 0; index < arr.length - 1; index++) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[index] * arr[i] == element) {
                
                return [arr[index], arr[i]]
            }
        }
        
    }
    return null;
    
}


console.log(simplePair([1, 2, 3] ,3));
console.log(simplePair([1, 2, 3] ,6));
console.log(simplePair([1, 2, 3] ,9));