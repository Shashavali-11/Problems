// Prime Number
let str = "29";
console.log(typeof str)
let num = Number(str)
console.log(typeof num)




prime(num)
// nxtprime(num)
// befprime(num)

function prime(num){    
    if(num < 0){
        console.log(`${num} is negative.`);
    }
    if(num == 0 || num == 1){
        console.log(`${num} is not a prime number.`);
    }
    fact = 0;
    if(num > 1){
        for(i=2; i<num; i++){
            if(num % i == 0){
                fact++;
                break;
            }
        }
        if(fact == 0){
            console.log(`${num} is a Prime Number.`);
        }else {
            console.log(`${num} is not a Prime Number.`);
        }
    }


}

function nxtprime(num){
    count = 0;
    while(num){
        num++;
        fact = 0;
        for(i=2; i<num; i++){
            if(num % i == 0){
                fact++;
                break;
            }
        }
        if(fact == 0){
            console.log(`${num} is next Prime Number.`);
            break;
            count++;
        }
    }


}

function befprime(num){
    count = 0;
    while(num){
        num--;
        fact = 0;
        for(i=2; i<num; i++){
            if(num % i == 0){
                fact++;
                break;
            }
        }
        if(fact == 0){
            console.log(`${num} is before Prime Number.`);
            break;
            count++;
        }
    }


}


