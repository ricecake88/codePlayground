function isPalindrome(phrase) {
  phrase = phrase.replace(/[^\w]/g, "").toLowerCase();
  return (phrase === phrase.split("").reverse().join("")) ? true : false
}
