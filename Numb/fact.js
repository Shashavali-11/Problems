// num = 5;
// f1(num)
// console.log(f2(num))
// function f1(num){ 
//     f = 1;
//     for(i=num; i>=1; i--){
//         f *= i;
//     }
//     console.log(f)
// }

// function f2(num){
//     if(num == 0){
//         return 1;
//     }else {
//         return num * f2(num-1);
//     }
// }


num = 5;
// fun1(num)
console.log(fun2(num))

function fun1(a){
    if(a==0 || a==1){
        console.log(`Factorial of ${a} is 1 `)
    }
    else{
        let digit = 1;
        for(i=1; i<=a; i++){
            digit =  digit * i;
        }   
        console.log(digit)
    }

}

function fun2(a){
    if(a==0 || a==1){
        return 1;
    }else{
        return a * fun2(a-1)
    }
}