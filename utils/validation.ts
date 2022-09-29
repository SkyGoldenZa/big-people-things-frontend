import * as yup from 'yup';
import {
  includesLowerCaseLetter,
  includesNumber,
  includesSpecialCharacter,
  includesUpperCaseLetter,
} from 'helpers/validation';

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email required'),
  password: yup
    .string()
    .min(8, 'Must be at least 8 characters')
    .max(128, 'Must be at most 128 characters')
    .test(
      'password',
      'Must have a number, a lowercase letter, an uppercase letter, and a special character',
      value => {
        return (
          includesNumber(value || '') &&
          includesLowerCaseLetter(value || '') &&
          includesUpperCaseLetter(value || '') &&
          includesSpecialCharacter(value || '')
        );
      }
    ),
  confirmPassword: yup
    .string()
    .test('confirmPassword', 'Passwords must match', function(value) {
      return this.parent.password === value;
    }),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
