import { mobileNumberSchema } from '@utility/validation/formikSchema';
import * as Yup from 'yup';

const initialValues = {
  mobileNumber: '',
};

const formSchema = Yup.object().shape({
  mobileNumber: mobileNumberSchema(),
});

export { formSchema, initialValues };
