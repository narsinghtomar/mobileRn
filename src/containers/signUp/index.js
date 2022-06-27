/**
 * SignUp Page
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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ButtonBlock, InputField, Loader, Space} from '../../components';
import {
  CATEGORIZEDLIST_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
} from '../../navigation/StackNavigator';
import {generateHeaders} from '../../utils/constants/apiHeaders';
import {signUpValidationSchema} from '../../utils/vallidator';
import * as signUpActions from '../../redux/actions/signUp';
import {isIOS} from '../../utils/helper';
import {showAlert} from '../../utils';
import {strings} from '../../i18n';
import {useFormik} from 'formik';
import styles from './styles';

/**
 *
 * @param {*} props
 * @returns
 */
function SignUpPage(props) {
  const {navigation, signUpUser, signUpInfo, isFatching, signUpErrorData} =
    props || {};
  const [isSignUpCalled, setIsSignUpCalled] = useState(false);

  console.log('signUpInfo', signUpInfo);
  /**
   * UseFormik for the Validation
   */
  const {handleChange, handleSubmit, setFieldTouched, values, errors, touched} =
    useFormik({
      validationSchema: signUpValidationSchema,
      initialValues: {email: '', password: '', confirmPassword: ''},
      onSubmit: userValues => {
        signIn(
          userValues?.email ?? '',
          userValues?.password ?? '',
          userValues?.confirmPassword ?? '',
        );
      },
    });

  /**
   * SignUpUser : API Calls by Action
   * @param {*} email
   * @param {*} password
   * @param {*} confirmPassword
   */
  const signIn = (email, password, confirmPassword) => {
    const signUpData = {
      username: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    const headers = generateHeaders();
    navigation.navigate(CATEGORIZEDLIST_PAGE_ROUTE);
    signUpUser && signUpUser({headers, signUpData});
    setIsSignUpCalled(true);
  };

  /**
   * API Response handler
   * API SUCEESS & ERROR
   */
  useEffect(() => {
    if (isSignUpCalled && signUpInfo) {
      navigation.navigate(CATEGORIZEDLIST_PAGE_ROUTE);
    } else if (isSignUpCalled && signUpErrorData) {
      showAlert(strings('app.error'), strings('app.error'));
    }
  }, [signUpErrorData, signUpInfo, isSignUpCalled, navigation]);

  /**
   * singUpButtonProps
   */
  const singUpButtonProps = () => {
    return {
      text: strings('login.singUp'),
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
   * confirmPasswordProps
   */
  const confirmPasswordProps = () => {
    return {
      labelText: strings('login.confirmPassword'),
      textInputName: 'confirmPassword',
      onChangeText: text => {
        handleChange('confirmPassword')(text);
      },
      onBlur: () => setFieldTouched('confirmPassword'),
      secureTextEntry: true,
      value: values.confirmPassword,
      errorMessage: errors.confirmPassword,
      isErrorMsgRequired: touched.confirmPassword && errors.confirmPassword,
    };
  };

  /**
   * existingAccountView
   */
  const existingAccountView = () => {
    return (
      <View style={styles.signUpView}>
        <Text style={styles.noAccountText}>
          {strings('login.existingAccount')}
        </Text>
        <TouchableOpacity activeOpacity={0.5} onPress={onLoginPress}>
          <Text style={styles.noAccountTextTap}>{strings('login.singIn')}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  /**
   * onLoginPress
   */
  const onLoginPress = () => {
    navigation.navigate(LOGIN_PAGE_ROUTE);
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
            <Text style={styles.signInText}>{strings('login.singUp')}</Text>
            <View>
              {InputField(emailProps())}
              <Space height={10} />
              {InputField(passwordProps())}
              <Space height={10} />
              {InputField(confirmPasswordProps())}
            </View>
            <View>
              {ButtonBlock(singUpButtonProps())}
              {existingAccountView()}
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
  return bindActionCreators(Object.assign({}, signUpActions), dispatch);
};

/**
 *
 * @param {*} state
 * @returns
 */
const mapStateToProps = state => ({
  isFatching: state.signUpReducer.isFatching,
  signUpInfo: state.signUpReducer.signUpInfo,
  signUpErrorData: state.signUpReducer.signUpErrorData,
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
