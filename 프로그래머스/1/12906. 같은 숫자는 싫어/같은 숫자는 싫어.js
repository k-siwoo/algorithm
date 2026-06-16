function solution(arr){
    let arr2 = [];
    arr2[0] = arr.shift();
    arr.forEach(num => {
        if(arr2[arr2.length - 1] != num){
            arr2.push(num)
        }
    })    
    
    return arr2;
}