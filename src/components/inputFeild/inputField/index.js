/**
 * Input Field Component with Validation.
 */
import React from 'react';
import {TextInput, Text, View, Image} from 'react-native';
import styles from './style';

const InputField = props => {
  const {
    placeholder,
    textInputName,
    placeholderTextColor,
    inputBoxStyle,
    customStyle = false,
    onChangeText,
    onBlur,
    secureTextEntry,
    validationErrorStyle,
    value,
    showIcon = false,
    inputIcon,
    info = false,
    infoMessage,
    isEditable,
    editable,
    numberOfRow,
    onContentSizeChange,
    labelText,
    keyboardType,
    errorMessage,
    isErrorMsgRequired,
  } = props || {};

  const inputIconStyle = showIcon ? {paddingStart: 0} : {};
  const inputFieldStyle = customStyle ? inputBoxStyle : styles.commonInputBox;
  const editableProps = isEditable ? editable : true;
  const multiline = numberOfRow ? true : false;

  return (
    <View>
      {showIcon && (
        <Image
          source={{uri: inputIcon || 'ic_email'}}
          style={styles.inputIcon}
          resizeMode="contain"
        />
      )}
      {labelText && <Text style={styles.inputLabel}>{labelText}</Text>}
      <TextInput
        name={textInputName}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[inputFieldStyle, inputIconStyle]}
        secureTextEntry={secureTextEntry}
        onChangeText={text => {
          onChangeText(text);
        }}
        onBlur={text => onBlur(text)}
        value={value}
        editable={editableProps}
        multiline={multiline}
        onContentSizeChange={onContentSizeChange}
        keyboardType={keyboardType}
      />
      {info && <Text style={styles.info}>{infoMessage}</Text>}
      {isErrorMsgRequired && (
        <Text style={[styles.error, validationErrorStyle]}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default InputField;
