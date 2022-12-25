import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

function CategoriesGridTile({ title,onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoriesGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 70,
    borderRadius: 8,
    flexDirection: 'row',
    fontWeight:'bold',
    elevation: 4,
    backgroundColor:'transparent',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 11, height: 20 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity:0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight:'bold',
    fontSize: 20,
  },
});