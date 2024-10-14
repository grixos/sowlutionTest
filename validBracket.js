function isValidBracketSequence(s) {
    // Counters for each type of bracket
    let round = 0;
    let square = 0;
    let curly = 0;

    // Loop through each character in the string
    for (let char of s) {
        if (char === '(') {
            round++;
        } else if (char === ')') {
            round--;
        } else if (char === '[') {
            square++;
        } else if (char === ']') {
            square--;
        } else if (char === '{') {
            curly++;
        } else if (char === '}') {
            curly--;
        }

        // If any counter goes negative it means there is missing bracket
        if (round < 0 || square < 0 || curly < 0) {
            return false;
        }
    }
    return round === 0 && square === 0 && curly === 0;
}

console.log(isValidBracketSequence("()[]{}")); 
console.log(isValidBracketSequence("([{]})")); 
console.log(isValidBracketSequence("({[]})"));
console.log(isValidBracketSequence("("));      
console.log(isValidBracketSequence("{[}")); 
console.log(isValidBracketSequence("((]}]]"))
