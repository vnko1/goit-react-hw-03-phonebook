import PropTypes from 'prop-types';
export const Filter = ({ onHandleChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="query" onChange={onHandleChange} />
    </>
  );
};

Filter.propTypes = { onHandleChange: PropTypes.func.isRequired };
