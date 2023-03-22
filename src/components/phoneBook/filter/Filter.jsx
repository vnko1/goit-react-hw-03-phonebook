import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export const Filter = ({ onHandleChange, filter = '' }) => {
  const id = nanoid();

  return (
    <label className={css.container} htmlFor={id}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={onHandleChange}
        value={filter}
        id={id}
      />
    </label>
  );
};

Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
