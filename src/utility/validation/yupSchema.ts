import * as Yup from 'yup';
import validationMessage from './validationMessage';

const nameSchema =  Yup.string()
.required(validationMessage.emptyLastName)
.test(
  'no-trailing-whitespace',
  validationMessage.emptyLastName,
  value => value?.trim() == value,
),