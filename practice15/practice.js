// function numeric_toggles(num){
//     let result = [];
//     let num1 = 2;
//     let addingNum = 2;
//     while(result.length < 8){
//         let j = 0;
//         while(j < 2){
//             if(addingNum % 2 === 0){
//                 result.push(num1 + addingNum)
//             }else{
//                 result.push(-(num1 + addingNum))
//             }
//             addingNum++;
//         }
//         console.log(result)
//     }
// }

function numeric_toggles(num){
    let result = [];
    let addingNum = 2;
    while (result.length < addingNum) {
        let j = 0;
        for(let j = i; j < i+2; j++){
            if(addingNum % 2 === 0){
                result.push(num1 + addingNum)
            }else{
                result.push(-(num1 + addingNum))
            }
            addingNum++;
        }
        console.log(result);
    }
}

numeric_toggles(2);
// [4,6,-9,-12,16,20,-25,-30,36,42,-49,-56,64,72]
