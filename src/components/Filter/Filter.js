import PropTypes from 'prop-types';

import { InputWrapper, Input } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <InputWrapper>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </InputWrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
