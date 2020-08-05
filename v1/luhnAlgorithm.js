/*
Favour is a smart and knowledge savvy dude. He overheard some people talking about an algorithm used to validate a variety of identification numbers, 
such as credit card numbers, IMEI numbers, Canadian Social Insurance Numbers. They called it Luhn's algorithm. He did a quick search online and saw 
the steps to implementing the algorithm on wikipedia. He started coding it out but he got frustrated at some point then he came to you for help. 
At that point, you saw that he missed out some things logic-wise and you would just code it out from scratch showing him some concepts and 
learning along the way too. Kindly send a solution to your own version of the solution to the problem.

*/

function luhnAlgorithm(cardNumber) {
    if (typeof(cardNumber) === 'number') cardNumber = cardNumber.toString();
    sum = 0;
    for (let i = 0; i < cardNumber.length; i++) {
        let digit = parseInt(cardNumber[i]);
        if (i % 2 == 0) {
            digit = digit * 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
    }
    return sum % 10 == 0;
}