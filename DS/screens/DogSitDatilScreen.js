import ReactNative from "react-native";
import { DOGSITTER } from "../Data/dummy-data";
import DogSitterItem from "../components/DogSitterItem";
import DogSitDatil from "../components/DogSitDatil";


const { Text, View, Image,StyleSheet } = ReactNative;

function DogSitDatilScreen({ route }) {
  const dogSitterId = route.params.dogSitterId;

  const selectDogSitter = DOGSITTER.find(
    (dogsiter) => dogsiter.id == dogSitterId
  );
  return (
    <View style={styles.innerContainer}>
      <Image style={styles.image} source={{ uri: selectDogSitter.imageUrl }} />
      <Text style={styles.title}>{selectDogSitter.title}</Text>
      <DogSitDatil
        name={selectDogSitter.name}
        age={selectDogSitter.age}
        location={selectDogSitter.location}
      />
      <Text style={styles.text}>קצת עלי:</Text>
      {selectDogSitter.aboutMe.map((aboutMe) => (
        <Text  style={styles.text} key={aboutMe}>{aboutMe}</Text>
      ))}
    </View>
  );
}

export default DogSitDatilScreen;
const styles=StyleSheet.create({
    image:{
        width :250,
        height:250,
        backgroundColor:'white'
    },
    title:{
        fontWeight :'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
       

    },
    text:{
        fontWeight :'bold',
        flexDirection:'row',
        fontSize:18,
        margin:8,
        textAlign:'right',
        backgroundColor:'pink',
    },
    innerContainer: {
      flex: 1,
      padding: 16,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    
    }
});
