import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onHandleChange }) => {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="query"
        onChange={onHandleChange}
      />
    </div>
  );
};

Filter.propTypes = { onHandleChange: PropTypes.func.isRequired };
