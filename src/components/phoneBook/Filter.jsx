import { Component } from 'react';

export const Filter = ({ onHandleChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="query" onChange={onHandleChange} />
    </>
  );
};
