import { useState,useContext } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../componentsAuth/Auth/AuthContent';
import LoadingOverlay from '../componentsAuth/ui/LoadingOverlay';
import {createUser} from '../util/Auth';
import { AuthContext } from '../store/auth-context';

function SingupScreen() {
  const [isAuthentication,setIsAuthentication]=useState(false);
   
  const authCtx = useContext(AuthContext);

  async function signupHandler({email,password}){
      setIsAuthentication(true);
      try{
        const token = await createUser(email,password);
        authCtx.authenticate(token);
      }catch(error){
        Alert.alert("החשבון לא נוצר,אנא בדוק את הפרטים שהוזנו ונסה שוב מאוחר יותר");
        setIsAuthentication(false);
      }
    }

  if(isAuthentication){
    return<LoadingOverlay message="יוצר משתמש,אנא המתן"/>;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SingupScreen;
