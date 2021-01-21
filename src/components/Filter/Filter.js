// import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.filter__label}>
      Find contact by name
      <input
        placeholder="Enter name..."
        className={s.filter__input}
        type="text"
        value={value}
        name="filter"
        onChange={onChange}
      />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
