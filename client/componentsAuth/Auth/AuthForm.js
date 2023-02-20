import { useState } from 'react';
import { StyleSheet, View,Text } from 'react-native';

import Button from '../ui/Button';
import Input from './Input';
//import AntDesign from 'react-native-vector-icons/AntDesign';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="כתובת אימייל"
          keyboardType="email-address"
          iconType="user"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          isInvalid={emailIsInvalid}
        />
        {!isLogin && (
          <Input
            label="אימות אימייל"
            keyboardType="email-address"
            iconType="user"
            onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
            value={enteredConfirmEmail}
            isInvalid={emailsDontMatch}
          />
        )}
        <Input
          label="סיסמה"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          iconType="lock"
          secure
          value={enteredPassword}
          isInvalid={passwordIsInvalid}
        />
        {!isLogin && (
          <Input
            label="אימות סיסמה"
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword'
            )}
            iconType="lock"
            secure
            value={enteredConfirmPassword}
            isInvalid={passwordsDontMatch}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'התחברות' : 'הרשמה'}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  form:{
    marginTop:40,
  },
});
