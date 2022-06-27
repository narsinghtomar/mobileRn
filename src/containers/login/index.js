/**
 * Login Page
 */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {ButtonBlock, InputField, Loader, Space} from '../../components';
import {strings} from '../../i18n';
import {useFormik} from 'formik';
import {
  CATEGORIZEDLIST_PAGE_ROUTE,
  SIGNUP_PAGE_ROUTE,
} from '../../navigation/StackNavigator';
import {generateHeaders} from '../../utils/constants/apiHeaders';
import {loginValidationSchema} from '../../utils/vallidator';
import * as loginActions from '../../redux/actions/login';
import {isIOS} from '../../utils/helper';
import {showAlert} from '../../utils';
import styles from './styles';

/**
 *
 * @param {*} props
 * @returns
 */
function LoginPage(props) {
  const {navigation, loginUser, isFatching, loginInfo, loginErrorData} =
    props || {};

  const [isSignInCalled, setIsSignInCalled] = useState(false);

  /**
   * UseFormik for the Validation
   */
  const {handleChange, handleSubmit, setFieldTouched, values, errors, touched} =
    useFormik({
      validationSchema: loginValidationSchema,
      initialValues: {email: '', password: ''},
      onSubmit: userValues => {
        signIn(userValues?.email ?? '', userValues?.password ?? '');
      },
    });

  /**
   *  SignInUser : API Calls by Action
   * @param {*} email
   * @param {*} password
   */
  const signIn = (email, password) => {
    const loginData = {
      username: email,
      password: password,
    };
    const headers = generateHeaders();
    loginUser && loginUser({headers, loginData});
    navigation.navigate(CATEGORIZEDLIST_PAGE_ROUTE);
    setIsSignInCalled(true);
  };

  /**
   * API Response handler
   * API SUCEESS & ERROR
   */
  useEffect(() => {
    if (isSignInCalled && loginInfo) {
      navigation.navigate(CATEGORIZEDLIST_PAGE_ROUTE);
    } else if (isSignInCalled && loginErrorData) {
      showAlert(strings('app.error'), strings('app.error'));
    }
  }, [loginErrorData, loginInfo, isSignInCalled, navigation]);

  /**
   * signInButtonProps
   */
  const signInButtonProps = () => {
    return {
      text: strings('login.singIn'),
      onPress: handleSubmit,
    };
  };

  /**
   * emailProps
   */
  const emailProps = () => {
    return {
      labelText: strings('login.email'),
      textInputName: 'email',
      keyboardType: 'email-address',
      onChangeText: text => {
        handleChange('email')(text);
      },
      onBlur: () => setFieldTouched('email'),
      value: values.email,
      errorMessage: errors.email,
      isErrorMsgRequired: touched.email && errors.email,
    };
  };

  /**
   * passwordProps
   */
  const passwordProps = () => {
    return {
      labelText: strings('login.password'),
      textInputName: 'password',
      onChangeText: text => {
        handleChange('password')(text);
      },
      onBlur: () => setFieldTouched('password'),
      secureTextEntry: true,
      value: values.password,
      errorMessage: errors.password,
      isErrorMsgRequired: touched.password && errors.password,
    };
  };

  /**
   * creatAccountView
   */
  const creatAccountView = () => {
    return (
      <View style={styles.signUpView}>
        <Text style={styles.noAccountText}>{strings('login.noAccount')}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={onSignUpPress}>
          <Text style={styles.noAccountTextTap}>
            {strings('login.noAccountSignUp')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  /**
   * onSignUpPress
   */
  const onSignUpPress = () => {
    navigation.navigate(SIGNUP_PAGE_ROUTE);
  };

  /**
   *  Return
   */
  return (
    <View style={styles.mainContainer}>
      <Loader isLoading={isFatching} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          style={styles.avoidingView}
          behavior={isIOS() ? 'padding' : null}
          keyboardVerticalOffset={10}>
          <View style={styles.container}>
            <Text style={styles.signInText}>{strings('login.singIn')}</Text>
            <View>
              {InputField(emailProps())}
              <Space height={10} />
              {InputField(passwordProps())}
            </View>
            <View>
              {ButtonBlock(signInButtonProps())}
              {creatAccountView()}
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

/**
 *
 * @param {*} dispatch
 * @returns
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(Object.assign({}, loginActions), dispatch);
};

/**
 *
 * @param {*} state
 * @returns
 */
const mapStateToProps = state => ({
  isFatching: state.loginReducer.isFatching,
  loginInfo: state.loginReducer.loginInfo,
  loginErrorData: state.loginReducer.loginErrorData,
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
