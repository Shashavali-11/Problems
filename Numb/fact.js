num = 5;
f1(num)
console.log(f2(num))
function f1(num){ 
    f = 1;
    for(i=num; i>=1; i--){
        f *= i;
    }
    console.log(f)
}

function f2(num){
    if(num == 0){
        return 1;
    }else {
        return num * f2(num-1);
    }
}