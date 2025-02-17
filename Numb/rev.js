str = "12345";
// console.log(typeof str)
num = Number(str)
const a = num;
rev = 0;
while(num){
    digit = num%10;
    rev = rev*10 + digit;
    num = Math.floor(num/10);
}

if(a == rev){
    console.log(`${num} is a palindrome number.`)
}else{
    console.log(`${num} is not a palindrome number.`)
}
console.log(num)
console.log(rev)