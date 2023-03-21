import { Component } from 'react';

export class Filter extends Component {
  handleChange(e) {}
  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" name="query" />
      </>
    );
  }
}
