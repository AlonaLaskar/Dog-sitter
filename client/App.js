import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import DogSitterScreen from './screens/DogSitterScreen';
import DogSitDatilScreen from './screens/DogSitDatilScreen';
import Login from './screens/LoginScreen/Login';
import Register from './screens/RegisterScreen/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <SafeAreaView style={{flex: 1}}>
    <ImageBackground
    source={require('./pic/backup2.jpg')}
    resizeMode="cover"
    style={styles.image}
    >
    
      <StatusBar style={{backgroundColor: 'light'}} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle:{backgroundColor:'grey'},
            headerTintColor: 'white',
            contentStyle:{backgroundColor:'transparent'}
          }}
        > 
         
          <Stack.Screen
            name='Login'
            component={Login}
         />
           <Stack.Screen 
          name ='Register'
          component={Register}
          /> 
       
          <Stack.Screen 
            name=" All Category"
            component={CategoriesScreen} 
            options={
              {
                title:'כל האפשרויות',
              }
            } 
          />
        
          <Stack.Screen 
            name="DogSit" 
            component={DogSitterScreen}
          />
          <Stack.Screen 
            name="DogDatil" 
            component={DogSitDatilScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </ImageBackground>
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {

  },
  image: {
    flex: 1,
    justifyContent: "center",
  }
});
