import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

function Input({
  label,
  keyboardType,
  secure,
  iconType,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
   
  <View style={styles.inputContainer}>
    
    <View style={styles.frameView}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color="#666" />
      </View>
     
      {/* <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text> */}
      
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        placeholder={label}
        autoCapitalize={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    
  },
  label: {
    color: 'white',
    marginBottom: 4,
    alignSelf:"center",
    

  },
  labelInvalid: {
    color: Colors.error500,
  },
  input: {
    flex:3,
    alignItems:"center",
    marginTop:1,
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor:'#dcdcdc',

    borderRadius: 30,
  },
  inputView: {
    //backgroundColor:'#dcdcdc',
     borderRadius: 25,
     width: "60%",
     height: 50,
     marginBottom: 20,
     alignItems: "center",
     justifyContent:"center",
     borderColor: 'gray',
     borderWidth: 1,
     
   },
  frameView: {
    backgroundColor:'#dcdcdc',
    borderRadius: 10,
    width: "60%",
    marginBottom: 25,
    alignSelf:"center",
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection:'row-reverse',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingBottom:8,
   

  },
  inputInvalid: {
   //backgroundColor: Colors.error100,
  },
  iconStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
});
