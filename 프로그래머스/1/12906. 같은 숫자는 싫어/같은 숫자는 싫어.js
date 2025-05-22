function solution(arr){
    let arr2 = [];
    arr2[0] = arr.shift();
    arr.forEach(num => {
        let a = arr2[arr2.length - 1];
        if(a != num){
            arr2.push(num)
        }
    })    
    
    return arr2;
}