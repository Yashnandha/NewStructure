/**
 * @function useFormikUpdater
 * Used for set and update values from formik
 *
 * @function useFormikError
 * Used for get touched error values
 */

// import {useCallback} from 'react';
// import {FormikErrors, FormikHelpers, FormikTouched} from 'formik';

// const useFormikUpdater = <T extends Record<string, any>>(
//   formik: Pick<FormikHelpers<T>, 'setValues'> & {values: T},
// ) => {
//   const updateValues = useCallback(
//     (key: keyof T, value: T[keyof T]) => {
//       formik.setValues(prevValues => ({
//         ...prevValues,
//         [key]: value,
//       }));
//     },
//     [formik],
//   );

//   return updateValues;
// };

// const useFormikError = <T extends Record<string, any>>(
//   formik: Pick<FormikHelpers<T>, 'setFieldTouched' | 'validateField'> & {
//     touched: FormikTouched<T>;
//     errors: FormikErrors<T>;
//   },
// ) => {
//   const getFieldError = useCallback(
//     (key: keyof T) => {
//       if (formik.touched[key] && formik.errors[key]) {
//         return formik.errors[key];
//       }
//       return '';
//     },
//     [formik.touched, formik.errors],
//   );
//   return getFieldError;
// };

// export {useFormikUpdater, useFormikError};
