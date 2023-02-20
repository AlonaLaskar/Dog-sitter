import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/styles';


function FlatButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width:"50%",
   
    textAlign:"center",
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
    backgroundColor:"white",
    borderColor: 'black',
    borderWidth: 1,

  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,

    color: Colors.primary100,
  },
});
