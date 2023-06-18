/**
 * @param {number} n
 * @return {string[]}
 */



// Runtime => 74 ms, Memory => 44.2 MB
// var fizzBuzz = function(n) {
//     result = [];
//     for (let i = 1; i <= n; i++) {
//         tmp = "";
//         if (i % 3 === 0) {
//             tmp += "Fizz";
//         }
        
//         if (i % 5 === 0) {
//             tmp += "Buzz";
//         }

//         result.push(!tmp ? `${i}` : tmp);
//     }

//     return result;
// };

// Runtime => 64 ms, Memory => 45 MB
var fizzBuzz = function(n) {
    let fizzIndex = 3;
    let buzzIndex = 5;
    result = [];
    for (let i = 1; i <= n; i++) {
        tmp = "";
        if (i === fizzIndex) {
            tmp += "Fizz";
            fizzIndex += 3;
        }
        
        if (i === buzzIndex) {
            tmp += "Buzz";
            buzzIndex += 5;
        }

        result.push(!tmp ? `${i}` : tmp);
    }

    return result;
};
