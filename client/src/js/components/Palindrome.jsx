import React, { Component } from 'react';
import { get } from 'lodash';

import PalindromeForm from './PalindromeForm';
import css from './Palindrome.css';

class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = { result: null, error: null };
  }

  handleResult() {
    this.setState({ result: 'Is a palindrome.', error: null });
  }

  handleError(err) {
    const error = get(err, ['response', 'data', 'error'], 'There was an error communicating with server.');
    this.setState({ error, result: null, });
  }

  renderError() {
    const { error } = this.state;
    if (!error) return null;

    return (
      <p>{error}</p>
    );
  }

  renderResult() {
    const { result } = this.state;
    if (!result) return null;

    return (
      <p>{result}</p>
    );
  }


  render() {
    return (
      <div>
        <PalindromeForm
          onResult={(result) => this.handleResult(result)}
          onError={(error) => this.handleError(error)}
        />
        <div className={css.resultBox}>
          {this.renderError()}
          {this.renderResult()}
        </div>
      </div>
    );
  }
}

Palindrome.propTypes = {};
Palindrome.defaultProps = {};

export default Palindrome;
