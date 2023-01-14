import _ from 'lodash';
import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import StyledInputFieldContainer from './index.styled';

const TextField = ({
  name,
  label,
  register,
  required,
  maxLength,
  minLength,
  pattern,
  error,
  ...restProps
}) => {

  const maxLengthConstraint = maxLength && {
    value: maxLength, message: `${name} must contain maximum ${maxLength} characters`,
  };
  const minLengthConstraint = minLength && {
    value: minLength, message: `${name} must contain at least ${minLength} characters`,
  };

  return (
    <StyledInputFieldContainer data-testid="textfield">
      <div className="label">{label}</div>
      <div className="input-field-container">
        <input
          className={!(_.isEmpty(error)) ? "input-field error-input" : "input-field"}
          {...restProps}
          {...register(
            name,
            {
              required,
              maxLength: maxLengthConstraint,
              pattern: pattern,
              minLength: minLengthConstraint,
            },
          )}
        />
        {!(_.isEmpty(error)) && <ErrorIcon data-testid="error-icon" className="error-icon" />}
      </div>
      {!(_.isEmpty(error)) && <div className="error-text">{`${error && error.message}`}</div>}
    </StyledInputFieldContainer>
  );
};

export { TextField };
