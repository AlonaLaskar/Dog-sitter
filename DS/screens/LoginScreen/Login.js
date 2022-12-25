import { View,Text,TextInput,Image,StyleSheet,TouchableOpacity} from "react-native";
import React, {useState} from 'react';



function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
  
    const handleLogin = () => {
      // בדוק תקינות שם משתמש וסיסמה
      if (email === 'admin' && password === 'password') {
        alert('התחברות מוצלחת!');
      } else {
        alert('שם משתמש או סיסמה לא נכונים');
      }
    };
  
    const handleResetPassword = () => {
      //move no forget password screen
      alert('נשלח קישור לאיפוס הסיסמה לכתובת הדוא"ל שלך');
    };
    const handelSingin=(navigation)=>{
    //  navigation.navigat('Register');
      //move on to Singin screen
      alert("אתה מועבר לדף התחברות");
    };
  
    return(
        <View >
        <Image style={styles.image} source={require('/Users/ALONA LASKAR/AwesomeProject/DS/pic/unnamed.png')}/>
        
        <View style={styles.inputView}>
          <TextInput
          style={styles.TextInput}
          placeholder= "אימייל"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(email) => setEmail(email)}
         />
         </View>

         <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="סיסמה"
          placeholderTextColor="#003f5c"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        </View>

        <TouchableOpacity style={styles.inputB}>
        <Text 
        style={styles.forgot_button}
        onPress={handleResetPassword}
        >שכחת את הסיסמא?
        </Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.inputB}>
     
      <Text 
        style={styles.Singin_button}
        onPress={handelSingin}
        
        >להרשמה 
        </Text> 
      
      </TouchableOpacity>

      <TouchableOpacity style={styles. login_button}>
        <Text
         style={styles.loginText}
         onPress={handleLogin}
         >התחברות
         </Text> 
      </TouchableOpacity>


 
      </View>

    );}


export default  Login;



const styles=StyleSheet.create({
viwe:{
backgroundColor:'white',
},
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 25,
        width: "60%",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        alignSelf:"center",
        justifyContent:"center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        alignSelf:"center",
        alignItems: "center",
        justifyContent:"center",

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
      forgot_button: {
        height: 30,
        width:"100%",
        top:25,
        marginBottom: 40,
        textAlign:"center",
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",


      },
      login_button:
      {
        height:50,
        width:"70%",
        borderRadius:25,
        alignItems:"center",
        justifyContent:"center",
        marginTop:70,
        backgroundColor:"#a9a9a9",
        alignSelf:"center",

      },
      Singin_button:{
        height: 40,
        top:30,
        marginBottom: 30,
        textAlign:"center",
        

      },
      inputB: {
        backgroundColor: "white",
        borderRadius: 60,
        width: "40%",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
        alignSelf:"center",
        justifyContent:"center",
      }
})