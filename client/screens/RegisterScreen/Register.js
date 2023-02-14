
import React, { useState } from 'react';
import { View, Text,TextInput, Button, StyleSheet,TouchableWithoutFeedback,Keyboard,Image } from 'react-native';
import userIcon from '../../assets/user.png';
import passwordIcom from'../../assets/password.png';
import emailIcom from'../../assets/email.png';
import phoneIcom from'../../assets/phone.png';
import addressIcom from'../../assets/address.png';
import calenderIcom from'../../assets/calendar.png';




const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userStreet,setUserStreet]=useState('');

  const handleSignUp = () => {
    // send a request to the server with the new user data
  }
  

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      
    <View style={styles.frameView}>
      <Image source={userIcon} style={styles.logo}/>
      <TextInput
        placeholder="שם משתמש"
        placeholderTextColor="#003f5c"
        textAlign='right'
        onChangeUserName={(username)=>setUsername(username)}
        onChangeText={(email) => setEmail(email)}
        value={username}
      />
      </View>

    <View style={styles.frameView}>
      <Image source={passwordIcom} style={styles.logo}/>
      <TextInput
        placeholder="סיסמה"
        placeholderTextColor="#003f5c"
        textAlign='right'
        onChangeText={(password)=>setPassword(password)}
        value={password}
        secureTextEntry={true}
      
      />
      </View>

      
    <View style={styles.frameView}>
      <Image source={passwordIcom} style={styles.logo}/>
      <TextInput
        placeholder="אימות סיסמה"
        placeholderTextColor="#003f5c"
        textAlign='right'
        onChangeText={(confirmPassword)=>setConfirmPassword(confirmPassword)}
        value={confirmPassword}
        secureTextEntry={true}
      
      />
      </View>

    <View style={styles.frameView}>
      <Image source={emailIcom} style={styles.logo}/>
      <TextInput
        placeholder="אימייל"
        placeholderTextColor="#003f5c"
        textAlign='right'
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
     </View>

    <View style={styles.frameView}>
      <Image source={phoneIcom} style={styles.logo}/>
      <TextInput
        placeholder="נייד"
        placeholderTextColor="#003f5c"
        textAlign='right'
        onChangeText={setUserPhone}
        value={userPhone}
      />
     </View>

     <View style={styles.frameView}>
      <Image source={addressIcom} style={styles.logo}/>
        <TextInput
        placeholder="עיר מגורים"
        placeholderTextColor="#003f5c"
        textAlign='right'
        onChangeText={setUserCity}
        value={userCity}
        textContentType={userCity}
      />
      </View>

    <View style={styles.frameView}>
      <Image source={addressIcom} style={styles.logo}/>
      <TextInput
        placeholder="רחוב"
        placeholderTextColor="#003f5c"
        textAlign='right'
        onChangeText={setUserStreet}
        value={userStreet}
      />
    </View>
    
    <View style={styles.frameView}>
      <Image source={calenderIcom} style={styles.logo}/>
      <TextInput
        placeholder=" (DD/MM/YYYY)"
        placeholderTextColor="#003f5c"
        textAlign='right'
        onChangeText={setDOB}
        value={dob}
      />
      </View>

      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    fontWeight:'bold',
    backgroundColor:'white',
    textAlign:'center',
    
  },
  logoStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  logo :{
    width:25,
    height:25,
    justifyContent:"space-around",
   
    
  },
  frameView: {
    //backgroundColor: "#FFC0CB",
    backgroundColor:'#dcdcdc',
    borderRadius: 10,
    width: "60%",
   // height:50,
    marginBottom: 25,
    alignItems: "center",
    //justifyContent:"center",
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection:'row-reverse',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingBottom:8,
  },
  buttom:{

  }
});

export default Register;