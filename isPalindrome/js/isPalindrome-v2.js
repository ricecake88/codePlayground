function isPalindrome(phrase) {
    phrase = phrase.replace(/[^\w]/g, "").toLowerCase();
    let isPalindrome = true;
    let j = phrase.length - 1;    
    for (let i = 0; i <= Math.floor(phrase.length / 2); i++) {
        if (phrase[i] !== phrase[j]) {
            isPalindrome = false;
            break;
        } else {
            j--;
        }
    }
    return isPalindrome;
}
