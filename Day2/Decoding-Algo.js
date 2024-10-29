function Fibonacii(n){
    if(n<=1){
        return n;
    }
    return Fibonacii(n-1) + Fibonacii(n-2);
}

function Decode(str){
    let ans = "";
    for(let i = 0; i < str.length; i++){

        if(str[i] == " "){
            ans = ans + " ";
            continue;
        }
        if(str.charCodeAt(i) - Fibonacii(i) < 'A'.charCodeAt(0)){
            ans = ans + String.fromCharCode('Z'.charCodeAt(0) - (Fibonacii(i) - (str[i].charCodeAt(0) - 'A'.charCodeAt(0)+1)) % 26);
        }
        else{
            ans = ans + String.fromCharCode(str.charCodeAt(i)  - Fibonacii(i));
        }
    }
    return ans;
}

let a = Decode("PSFUHSB YIB DQREDYD YIRJ") //PRESENT DAY PRESENT TIME
document.write(a)


