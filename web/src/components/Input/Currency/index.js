import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useField } from '@rocketseat/unform';
import NumberFormat from 'react-number-format';
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
        path: 'state.numAsString',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <Container className={className}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <NumberFormat
        name={fieldName}
        value={value}
        thousandSeparator
        prefix={currencySymbol}
        onValueChange={({ floatValue, formattedValue }) => {
          setValue(formattedValue);
          onChange(floatValue);
        }}
        decimalScale="2"
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
