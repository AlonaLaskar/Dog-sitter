import { Pressable, View, Text, StyleSheet, Platform, Image } from 'react-native';

function CategoriesGridTile({ title, onPress, imageUrl }) {
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
          <Image style={styles.image} source={{ uri: imageUrl }} />
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
    margin: 25,
    width:"80%",
    height: 190,
    borderRadius: 100,
    flexDirection: 'row',
    fontWeight: 'bold',
    elevation: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 11, height: 20 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  image: {
    width: "50%",
    height: 80,
  },
});
