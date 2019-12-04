import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';

import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function ReactSelect({
  name,
  label,
  loadFunction,
  onChange,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [defaultValue]);

  function parseSelectValue(selectRef) {
    const selectValue = selectRef.props.value;
    return selectValue ? selectValue.id : '';
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <AsyncSelect
        name={fieldName}
        aria-label={fieldName}
        loadOptions={loadFunction}
        isMulti={false}
        cacheOptions
        value={selectedValue}
        onChange={updatedValue => {
          setSelectedValue(updatedValue);
          onChange(updatedValue);
        }}
        defaultOptions
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
  loadFunction: PropTypes.func,
  onChange: PropTypes.func,
};

ReactSelect.defaultProps = {
  label: null,
  options: [],
  multiple: false,
  loadFunction: null,
  onChange: () => {},
};
