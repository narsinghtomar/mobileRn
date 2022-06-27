/**
 *  Validation Schema
 */
import * as yup from 'yup';
import {strings} from '../../i18n';

// loginValidationSchema
export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(strings('validation.validEmail'))
    .required(strings('validation.requiredEmail')),
  password: yup
    .string()
    .min(
      8,
      ({min}) =>
        strings('validation.passwordMinLength') +
        ` ${min} ` +
        strings('validation.characters'),
    )
    .required(strings('validation.requiredPassword')),
});

// signUpValidationSchema
export const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email(strings('validation.validEmail'))
    .required(strings('validation.requiredEmail')),
  password: yup
    .string()
    .min(
      8,
      ({min}) =>
        strings('validation.passwordMinLength') +
        ` ${min} ` +
        strings('validation.characters'),
    )
    .required(strings('validation.requiredPassword')),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], strings('validation.passwordNotMatch'))
    .required(strings('validation.requiredConfPassword')),
});
