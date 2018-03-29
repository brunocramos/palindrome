import React, { Component } from 'react';
import axios from 'axios';


export default (WrappedComponent) => {
  class checkPalindromeHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: false,
      };

      this.checkPalindrome = this.checkPalindrome.bind(this);
    }
    checkPalindrome(value) {
      this.setState({ isLoading: true });
      return axios
        .post('http://localhost:3000/palindrome', { value })
        .then((res) => {
          this.setState({ isLoading: false });
          return res.data;
        })
        .catch((err) => {
          this.setState({ isLoading: false });
          return Promise.reject(err);
        })
    }

    render() {
      return (
        <WrappedComponent
          checkPalindrome={this.checkPalindrome}
          {...this.props}
          isLoading={this.state.isLoading}
        />
      );
    }
  }

  checkPalindromeHOC.propTypes = {};
  checkPalindromeHOC.defaultProps = {};

  return checkPalindromeHOC;
}
