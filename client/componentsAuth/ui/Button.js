import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/styles';



function Button({ children, onPress }) {
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

export default Button;

const styles = StyleSheet.create({
  button: {
    height:50,
    width:"70%",
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"gray",
    alignSelf:"center",
    borderColor: 'black',
    borderWidth: 1,


 
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
