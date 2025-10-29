import {
  emailRegex,
  gstinRegex,
  mobileRegex,
  otpRegex,
  stringRegex,
  urlRegex,
  usernameRegex,
} from '@utility/validation/stringValidation';
import validationMessage from '@utility/validation/validationMessage';
import { addMonths, startOfToday } from 'date-fns';
import dayjs from 'dayjs';
import * as Yup from 'yup';

const selctionSchema = (name: string) =>
  Yup.object().required(`${name} is required`);

const emailSchema = Yup.string()
  .required(validationMessage.emptyEmail)
  .matches(emailRegex, validationMessage.invalidEmail);

const nameSchema = (name: string) =>
  Yup.string()
    .required(`${name} is required`)
    .test(
      'not-only-spaces',
      `${name} cannot have only spaces`,
      value => !!value && value.trim().length > 0,
    )
    .test(
      'no-special-chars',
      `${name} can only contain letters and spaces`,
      value => !!value && /^[A-Za-z ]+$/.test(value),
    );

const educationFieldSchema = (fieldName: string) =>
  Yup.string()
    .required(`${fieldName} is required`)
    .test(
      'not-only-spaces',
      `${fieldName} cannot be only spaces`,
      value => !!value && value.trim().length > 0,
    )
    .matches(
      /^[A-Za-z0-9\s.,()\-&']+$/,
      `${fieldName} can only contain letters, numbers, spaces, and . , ( ) - & '`,
    );

const mobileNumberSchema = (label: string = 'mobile number') =>
  Yup.string()
    .required(`${label} is required`)
    .matches(mobileRegex, `Enter a valid 10-digit  ${label.toLowerCase()}`);

const optionString = (label: string = 'String') =>
  Yup.string()
    .optional()
    .test(
      'not-only-spaces',
      `${label} cannot be only spaces`,
      value => value === undefined || value === '' || value.trim().length > 0,
    )
    .test(
      'no-leading-trailing-spaces',
      `${label} cannot have leading or trailing spaces`,
      value => value === undefined || value === '' || value.trim() === value,
    );

const otpSchema = Yup.string()
  .required(validationMessage.emptyOTP)
  .matches(otpRegex, validationMessage.invalidOTP);

const dropdownOptionSchema = (fieldName: string) =>
  Yup.object({
    label: Yup.string().required(`${fieldName} is required`),
    value: Yup.string()
      .required(`${fieldName} is required`)
      .notOneOf([''], `${fieldName} is required`),
  });

const dobSchema = (fieldName: string) =>
  Yup.date()
    .required(`${fieldName} is required`)
    .typeError(`Please enter a valid ${fieldName}`)
    .max(
      dayjs().subtract(18, 'years').toDate(),
      `You must be at least 18 years old`,
    )
    .min(
      dayjs().subtract(200, 'years').toDate(),
      `Age must be less than 200 years`,
    );

const gstSchema = (fieldName: string) =>
  Yup.string()
    .optional()
    .matches(gstinRegex, `Please enter a valid ${fieldName}`);

const numberSchema = (fieldName: string) =>
  Yup.string()
    .required(`${fieldName} is required`)
    .test(
      'not-negative',
      `${fieldName} cannot be negative`,
      value => !value || parseFloat(value) >= 0,
    )
    .test(
      'not-all-zeros',
      `${fieldName} cannot be all zeros`,
      value => !/^0+$/.test(value || ''),
    )
    .test('in-range', `${fieldName} must be between 0 and 100`, value => {
      const num = parseFloat(value || '');
      return !isNaN(num) && num >= 0 && num <= 100;
    });

const priceSchema = (fieldName: string) =>
  Yup.string()
    .required(`${fieldName} is required`)
    .test(
      'is-valid-number',
      `${fieldName} must be a valid number`,
      value => !value || !isNaN(parseFloat(value)),
    )
    .test(
      'not-negative',
      `${fieldName} cannot be negative`,
      value => !value || parseFloat(value) >= 0,
    )
    .test(
      'valid-format',
      `${fieldName} must be a valid price (up to 2 decimals)`,
      value => !value || /^\d+(\.\d{1,2})?$/.test(value),
    );

const stringSchema = (name: string) =>
  Yup.string()
    .required(`${name} is required`)
    .test(
      'not-only-spaces',
      `${name} cannot have only spaces`,
      value => !!value && value.trim().length > 0,
    )
    .test(
      'no-special-chars',
      `${name} can only contain letters and spaces`,
      value => !!value && /^[A-Za-z ]+$/.test(value),
    );

const customUrlSchema = (fieldName: string) =>
  Yup.string()
    .required(`${fieldName} is required`)
    .matches(urlRegex, `Please enter a valid ${fieldName}`);

const arrayWithObjectSchema = (fieldName: string, itemLabel: string) =>
  Yup.object().shape({
    [fieldName]: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required(`${itemLabel} is required`),
        }),
      )
      .min(1, `At least one ${itemLabel.toLowerCase()} is required`)
      .required(`${itemLabel} list is required`),
  });

const arraySchema = (fieldName: string) =>
  Yup.array()
    .min(1, `${fieldName.toLowerCase()} is required`)
    .required(`${fieldName}  is required`);

const descriptionSchema = (fieldName: string) =>
  Yup.string()
    .required(`${fieldName} is required`)
    .min(20, `${fieldName} must be at least 20 characters long`)
    .test(
      'not-only-spaces',
      `${fieldName} cannot contain only spaces`,
      value => typeof value === 'string' && value.trim().length > 0,
    );

const dateSchema = (fieldName: string) =>
  Yup.date()
    .required(`${fieldName} is required`)
    .typeError(`Please enter a valid ${fieldName}`)
    .min(startOfToday(), `${fieldName} cannot be in the past`)
    .max(
      addMonths(startOfToday(), 3),
      `${fieldName} cannot be more than 3 months in the future`,
    );

const selectionSchema = (name: string) =>
  Yup.object().required(`${name} is required`);

const requiredString = (name: string) =>
  Yup.string()
    .required(`${name} is required`)
    .test(
      'not-only-spaces',
      `${name} cannot be only spaces`,
      value => value === undefined || value === '' || value.trim().length > 0,
    )
    .matches(stringRegex, `Please enter valid ${name}`);

const dateTimeSchema = (fieldName: string) =>
  Yup.date()
    .required(`${fieldName} is required`)
    .typeError(`Please enter a valid ${fieldName}`)
    .max(dayjs().subtract(1, 'day').toDate(), `You must be at least 1 day old`)
    .min(
      dayjs().subtract(200, 'years').toDate(),
      `Age must be less than 200 years`,
    );

const timeSchema = (fieldName: string) =>
  Yup.date()
    .required(`${fieldName} is required`)
    .typeError(`Please enter a valid ${fieldName}`);

const usernameSchema = (fieldName: string) =>
  Yup.string()
    .trim()
    .required(`${fieldName} is required`)
    .min(2, `${fieldName} must be at least 2 characters`)
    .max(50, `${fieldName} must be at most 50 characters`)
    .matches(
      usernameRegex,
      `Please enter a valid ${fieldName} (only letters, numbers, dot and underscore)`,
    )
    .test(
      'not-start-or-end-dot',
      `${fieldName} cannot start or end with a dot`,
      value => (value ? !(value.startsWith('.') || value.endsWith('.')) : true),
    )
    .test(
      'not-only-underscores',
      `${fieldName} cannot be only underscores`,
      value => (value ? !/^_+$/.test(value) : true),
    );

const accountNumberSchema = (fieldName: string = 'Account Number') =>
  Yup.string()
    .required(`${fieldName} is required`)
    .matches(/^\d+$/, `${fieldName} must contain only digits`)
    .min(9, `${fieldName} must be at least 9 digits`)
    .max(18, `${fieldName} must be at most 18 digits`);

const ifscSchema = (fieldName: string = 'IFSC Code') =>
  Yup.string()
    .required(`${fieldName} is required`)
    .matches(/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/, `${fieldName} is invalid`);

export {
  accountNumberSchema,
  arraySchema,
  arrayWithObjectSchema,
  customUrlSchema,
  dateSchema,
  dateTimeSchema,
  descriptionSchema,
  dobSchema,
  dropdownOptionSchema,
  educationFieldSchema,
  emailSchema,
  gstSchema,
  ifscSchema,
  mobileNumberSchema,
  nameSchema,
  numberSchema,
  optionString,
  otpSchema,
  priceSchema,
  requiredString,
  selctionSchema,
  selectionSchema,
  stringSchema,
  timeSchema,
  usernameSchema,
};
