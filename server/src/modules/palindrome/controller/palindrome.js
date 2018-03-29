const Joi = require('joi');

class PalindromeController {
  /**
   * Inject lib
   * @param PalindromeLib
   */
  constructor(PalindromeLib) {
    this.PalindromeLib = PalindromeLib;
  }

  /**
   * Check if provided string is a palindrome
   * @param str    String to be checked
   * @returns {Promise<any>}
   */
  async isPalindrome(str = null) {
    return new Promise(async (resolve, reject) => {
      try {
        await Joi.validate(str, Joi.string());
        if (this.PalindromeLib.isPalindrome(str)) {
          resolve(true);
        } else {
          reject(new Error('Is not a palindrome.'));
        }
      } catch (e) {
        reject({ error: e.message });
      }
    });
  }
}

module.exports = PalindromeLib => new PalindromeController(PalindromeLib);
