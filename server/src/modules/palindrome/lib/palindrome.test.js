/* eslint-disable */
const chai = require('chai');
const expect = chai.expect;
const PalindromeLib = require('./palindrome');

describe('PALINDROME - LIBS', () => {
  describe('Palindrome', () => {
    it('"ana" should be a palindrome', () => {
      expect(PalindromeLib.isPalindrome('ana')).to.be.true;
    });

    it('"macaco" should not be a palindrome', () => {
      expect(PalindromeLib.isPalindrome('macaco')).to.be.false;
    });

    it('"A MAN A PLAN A CANAL PANAMA" should be a palindrome', () => {
      expect(PalindromeLib.isPalindrome('A MAN A PLAN A CANAL PANAMA')).to.be.true;
    });
  });
});
