import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import ReactDatePicker, { setDefaultLocale } from 'react-datepicker';
import MaskedInput from 'react-text-mask';

import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt';

import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles';

setDefaultLocale(pt);

export default function DatePicker({ className, name, label, ...rest }) {
  const { defaultValue, registerField, fieldName, error } = useField(name);

  const [selected, setSelected] = useState(defaultValue);

  const ref = useRef();

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.selected',
        clearValue: pickerRef => {
          pickerRef.clear();
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <Container className={className}>
      {label && <span>{label}</span>}
      <ReactDatePicker
        customInput={
          <MaskedInput
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          />
        }
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        autoComplete="off"
        dateFormat="P"
        maxDate={new Date()}
        {...rest}
      />
      {error && <p>{error}</p>}
    </Container>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
};

DatePicker.defaultProps = {
  className: null,
  label: null,
};
