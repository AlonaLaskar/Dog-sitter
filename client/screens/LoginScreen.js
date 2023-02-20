import { View,Image,StyleSheet,Alert} from "react-native";
import { useState,useContext } from 'react';

import AuthContent from '../componentsAuth/Auth/AuthContent';


import { login } from '../util/Auth';
import { AuthContext } from "../store/auth-context";

import LoadingOverlay from '../componentsAuth/ui/LoadingOverlay';

function LoginScreen() {
  const [isAuthentication,setIsAuthentication]=useState(false);
  
  const authCtx = useContext(AuthContext);
  async function loginHandler({email,password}){
      setIsAuthentication(true);
      try{
        const token = await login(email,password);
        authCtx.authenticate(token);
      }catch(error){
        Alert.alert(
         'האימות נכשל',
          'אנא בדוק את הסיסמא והמייל ונסה שוב'
          );
          setIsAuthentication(false);
      };
    }

  if(isAuthentication){
    return<LoadingOverlay message="מתחבר..."/>;
  }


  
  return(
    <View style={styles.viwe}>
        <Image style={styles.image} source={require('../pic/unnamed.png')}/>
      <AuthContent isLogin  onAuthenticate={loginHandler}/>

    </View>
  ) ;
}

export default LoginScreen;



const styles=StyleSheet.create({
viwe:{
backgroundColor:'white',
flex:1,
},
 image: {
      width:165,
      height:165,
      position :"relative",
      top:70,
      marginBottom: 100,
      justifyContent:"space-around",
      alignSelf:"center",
      },
  
})

