import React, { useRef, useEffect } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function ReactSelect({ name, label, options, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.state.value;
    return selectValue ? selectValue.id : '';
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function getDefaultValue() {
    if (!defaultValue) return null;
    return options.find(option => option.id === defaultValue);
  }

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Select
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={false}
        defaultValue={getDefaultValue()}
        ref={ref}
        getOptionValue={option => option.id}
        getOptionLabel={option => option.title}
        {...rest}
      />

      {error && <span>{error}</span>}
    </Container>
  );
}

ReactSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  multiple: PropTypes.bool,
};

ReactSelect.defaultProps = {
  label: null,
  options: [],
  multiple: false,
};
