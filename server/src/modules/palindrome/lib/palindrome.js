/**
 * A palindrome is a word, phrase, number, or another sequence of characters which reads the same backward or forward.
 * This function removes all non letters characters, lower its case and check if the resulted string is a palindrome.
 * @param str   String to be checked
 * @returns {boolean}
 */
const isPalindrome = (str) => {
  if (!str || typeof str !== 'string' || !str.trim().length) return false;
  const _str = str.replace(/[^a-zA-Z]/gi, '').toLowerCase();

  for (let i = 0, n = _str.length; i < n; i += 1) {
    if (_str[i] !== _str[n - i - 1]) return false;
  }
  return true;
};


module.exports = {
  isPalindrome,
};
