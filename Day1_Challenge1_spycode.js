let s = "sister out of territory"

let w1 = s.split(" ")[0];
let w2 = s.split(" ")[s.split(" ").length - 1];

let ans = "";


for(let i = 0; i < w1.length; i++){
    
    let tmp = "";
    if(w2.includes(w1[i])){

        tmp = w1[i];
        let bool =  true;
        let j = i + 1;
        while((bool)&&(i < w1.length - 1)&&(j< w1.length)){
            if(w2.includes(tmp + w1[j])){
                tmp = tmp + w1[j];
                j++;
            }else{
                bool = false;
            }
        }
        if(tmp.length > ans.length){
            ans = tmp;
        }
    }

}

ans = w1.replace(ans,"");
console.log(ans);