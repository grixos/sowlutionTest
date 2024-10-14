function validateEmail(email) {
    // Check if the email is empty or is too long
    if (email.length === 0 || email.length > 256) return false;
    
    let countOfAt = 0;
    let dotAfterAt = false;
    
    let positionOfAt = -1;
    let positionOfDot = -1;

    //constraints
    for (let i = 0; i < email.length; i++) {
        const char = email[i];

        if (char === '@') {
            //more than 1 @ detected
            if (countOfAt > 1) return false;

            // @ should not be the first or last char of the email
            if (i === 0 || i === email.length - 1) return false;

            countOfAt++;
            positionOfAt = i;
        }

        if (char === '.') {
            // . comes after @ and not right next to it
            if (positionOfAt !== -1 && i > positionOfAt + 1) {
                dotAfterAt = true;
                positionOfDot = i;
            }
        }

        // Check for invalid characters
        if (char === ' ') return false;
    }

    //ensure that there is only 1 @ and at least 1 dot after it
    if (countOfAt !== 1 || !dotAfterAt || positionOfDot === email.length - 1) return false;

    return true;
}
console.log(validateEmail("john.doe@gmail.com"))
console.log(validateEmail("john@doe@gmail.com"))
console.log(validateEmail("john@gmail.c"))
console.log(validateEmail("john@.com"))
console.log(validateEmail("John.doe@@gmail..com"))