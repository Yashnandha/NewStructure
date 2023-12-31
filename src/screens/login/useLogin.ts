import React, {useCallback, useState} from 'react';
import {errorMessage, formDataType, loginHookProps} from './loginProps';
import validationMessage from '@utility/validation/validationMessage';
import {checkEmail, checkPassword} from '@utility/validation/stringValidation';
import {Alert} from 'react-native';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '@navigation/stacks/rootStackParams';

const useLogin = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<errorMessage>({
    email: null,
    password: null,
  });
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const onClickForgotPassword = () => {};
  const onClickSignUp = () => {
    navigation.navigate('signUp');
  };

  const validateAndSubmitForm = useCallback(() => {
    let isValid: boolean = true;
    if (!email) {
      isValid = false;
      errorMessage.email = validationMessage.emptyEmail;
    } else if (!checkEmail(email)) {
      isValid = false;
      errorMessage.email = validationMessage.invalidEmail;
    } else {
      errorMessage.email = null;
    }

    if (!password) {
      isValid = false;
      errorMessage.password = validationMessage.emptyPassword;
    } else if (!checkPassword(password)) {
      isValid = false;
      errorMessage.password = validationMessage.strongPassword;
    } else {
      errorMessage.password = null;
    }

    if (isValid) {
      loginApiCall();
    }

    setErrorMessage({...errorMessage});
  }, [email, password]);

  const loginApiCall = useCallback(() => {
    let formData: formDataType = {
      email: email,
      password: password,
    };
    axiosInstance
      .post(constant.users, formData)
      .then(response => {
        console.log('response::', response.data);
      })
      .catch(e => {
        console.log('error', e);
      });
  }, [email, password]);

  return {
    onClickForgotPassword,
    onClickSignUp,
    secureTextEntry,
    setSecureTextEntry,
    email,
    setEmail,
    password,
    setPassword,
    validateAndSubmitForm,
    errorMessage,
  };
};

export default useLogin;
