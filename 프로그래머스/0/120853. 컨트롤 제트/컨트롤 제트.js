function solution(s) {
    let arr = s.split(" ");
    let a = 0;
    let pre = 0;
    arr.forEach((x) => {
        if(x == 'Z') {
            a -= pre;
        } else {
            pre = parseInt(x);
            a += pre;
        }
    })
    return a;
}