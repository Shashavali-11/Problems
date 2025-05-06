arr = [[1,2,3], [4,5,6], [7,8,9]]  // op => [1,2,3,4,5,6,7,8,9]
console.log(arr.flat(Infinity))


arr = [1,2,3,4,5,[6, [7,[8,9]], [10]],11,12]
// console.log(method2(arr))

// function method2(arr){

//     let out = [];
//     for(i of arr){
//         if(Array.isArray(i)){
//             out = out.concat(method2(i))
//         }else{
//             out.push(i);
//         }

//     }
//     return out;

// }



