import { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import { firebaseConfig } from './firebaseConfig';
import { Colors } from './constants/styles';
import WelcomeScreen from './screens/WelcomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import DogSitterScreen from './screens/DogSitterScreen';
import DogSitDatilScreen from './screens/DogSitDatilScreen';
import SingupScreen from './screens/SingupScreen';
import LoginScreen from './screens/LoginScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SingupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen
        name="category"
        component={CategoriesScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <Ionicons name="exit-outline" color={tintColor} size={24} onPress={authCtx.logout} />
          ),
          headerLeft: ({tintColor})=>(
            <Ionicons name="home" color={tintColor} size={24} onPress={authCtx.logout} />
          ),
        }}
      />
      <Stack.Screen
        name="dogSiter"
        component={DogSitterScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <Ionicons name="exit-outline" color={tintColor} size={24} onPress={authCtx.logout} />
          ),
          headerLeft: ({tintColor})=>(
            < Ionicons name="home" color={tintColor} size={24}  />
          ),
        }}
      />
         <Stack.Screen
        name="dogWalker"
        component={DogSitDatilScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <Ionicons name="exit-outline" color={tintColor} size={24} onPress={authCtx.logout} />
          ),
          headerLeft: ({tintColor})=>(
            < Ionicons name="home" color={tintColor} size={24}  />
          ),
        }}
      />
    </Stack.Navigator>
  );
}


function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return null;
  }

  return <Navigation />;
}

export default function App() {
  return (
  <SafeAreaView style={{flex: 1}}>
    <ImageBackground
    source={require('./pic/backup2.jpg')}
    resizeMode="cover"
    style={styles.image}
    >
        <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>

    </ImageBackground>
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  }
});
