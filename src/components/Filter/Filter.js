import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    return (
        <label>
        Find contacts by name:
        <input type="text" value={value} onChange={onChange}/>
    </label>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
}

export default Filter;