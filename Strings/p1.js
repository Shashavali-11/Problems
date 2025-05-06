ip = "aabccca"    // => op = "a2b1c3a1"

console.log(fun(ip))

function fun(str){

    result = "";
    count = 1

    for(i=0; i<str.length; i++){
        if(str[i] == str[i+1]){
            count++
        }
        else {
            result += str[i] + count;
            count = 1
        }

    }
    return result


}



