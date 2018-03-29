const PalindromeController = require('../../palindrome/controller/palindrome');
const PalindromeLib = require('../../palindrome/lib/palindrome');

class ControllerFactory {
  /**
   * Returns provided controller
   * @param controller
   * @returns {*}
   */
  static getController(controller) {
    const _controller = `_${controller}`;
    if (!ControllerFactory[_controller]) {
      throw new Error('Invalid controller.');
    }
    return ControllerFactory[_controller]();
  }

  /**
   * Creates an instance of a Palindrome Controller, injecting PalindromeLib which handles palindrome strings check
   * @returns {*}
   * @private
   */
  static _palindrome() {
    return PalindromeController(PalindromeLib);
  }
}

module.exports = ControllerFactory;
