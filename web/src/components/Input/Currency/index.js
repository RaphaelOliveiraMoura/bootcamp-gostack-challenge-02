import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useField } from '@rocketseat/unform';
import CurrencyInput from 'react-currency-input';
import PropTypes from 'prop-types';

import { Container } from './styles';

import { getCurrencySymbol } from '~/util/format';

export default function DatePicker({
  className,
  name,
  label,
  onChange,
  ...rest
}) {
  const { defaultValue, registerField, fieldName, error } = useField(name);

  const [value, setValue] = useState(defaultValue);

  const ref = useRef();

  const currencySymbol = useMemo(() => {
    return getCurrencySymbol();
  }, []);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'state.value',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <Container className={className}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <CurrencyInput
        name={fieldName}
        value={value}
        prefix={currencySymbol}
        onChangeEvent={(event, maskedValue, rawValue) => {
          setValue(maskedValue);
          onChange(rawValue);
        }}
        ref={ref}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

DatePicker.defaultProps = {
  className: null,
  label: null,
  onChange: () => {},
};
