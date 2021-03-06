import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';

import styles from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => dispatch(changeFilter(event.target.value));

  return (
    <label className={styles.filter__label}>
      Find contact by name
      <input
        placeholder="Enter name..."
        className={styles.filter__input}
        type="text"
        value={value}
        name="filter"
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;

// ===============  Step 1  ===============

// import { connect } from 'react-redux';

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(changeFilter(event.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
