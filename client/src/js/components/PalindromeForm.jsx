import React, { Component } from 'react';
import PropTypes from 'prop-types';

import checkPalindromeHOC from './HOC/checkPalindromeHOC';
import css from './PalindromeForm.css';

class PalindromeForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { checkPalindrome, onError, onResult } = this.props;

    checkPalindrome(this.state.value)
      .then(result => onResult(result))
      .catch(err => onError(err));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <fieldset disabled={this.props.isLoading} className={css.form__fieldset}>
            <label htmlFor="value" className={css.form__label}>Type a word to check if it's a palindrome:</label>
            <input
              type="text"
              name="value"
              onChange={this.handleChange} id="value" className={css.form__input}
              placeholder="Ana"
            />
            <button type="submit" className={css.form__submitBtn}>Check</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

PalindromeForm.propTypes = {
  onResult: PropTypes.func,
  onError: PropTypes.func,
  checkPalindrome: PropTypes.func,
  isLoading: PropTypes.bool,
};
PalindromeForm.defaultProps = {
  onResult: f => f,
  onError: f => f,
};

export default checkPalindromeHOC(PalindromeForm);
