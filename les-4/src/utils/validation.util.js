// All the validate methods are returning either an empty string or an error message.

export const validateText = (params, value) => {
  const min = params.min || 2;
  const max = params.max || 60;
  const allowEmpty = params.allowEmpty || false;

  const trimmedValue = value.toString().trim();

  if (!allowEmpty && trimmedValue === '') {
    return 'Value may not remain empty.';
  }

  if (allowEmpty && trimmedValue === '') {
    return '';
  }

  if (trimmedValue.length < min || trimmedValue.length > max) {
    return 'Value does not match the criteria.';
  }

  return '';
};

export const validateEmail = (params, value) => {
  const allowEmpty = params.allowEmpty || false;

  const trimmedValue = value.toString().trim();

  if (!allowEmpty && trimmedValue === '') {
    return 'Value may not remain empty.';
  }

  if (allowEmpty && trimmedValue === '') {
    return '';
  }

  const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;

  if (!emailRegex.test(value)) {
    return 'Value is not a valid email address.';
  }

  return '';
};
