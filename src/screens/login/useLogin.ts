import {
  useFormikError,
  useFormikUpdater,
  useFormikValues,
} from '@hooks/useAppFormik';
import useAppState from '@hooks/useAppState';
import { useFormik } from 'formik';
import { formSchema, initialValues } from './login.formik';

const useLogin = () => {
  const [details, setDetails] = useAppState({})
  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: data => uploadData(data),
  });

  const setFormikValue = useFormikUpdater(formik);
  const formikError = useFormikError(formik);
  const formikValues = useFormikValues(formik);

  const onPresSubmit = () => {
    formik.handleSubmit();
  };

  const uploadData = (data: typeof initialValues) => {
  };

  return {
    onPresSubmit,
    formikError,
    formikValues,
    setFormikValue,
  };
};

export default useLogin;
