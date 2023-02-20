
import { View,Text,Pressable,Image,StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function DogSitterItem({id, title,imageUrl,name,age,location}){
const navigation=useNavigation();

function selectDogSitItemHendler(){
        navigation.navigate("dogSiter",{
      dogSitterId: id,
    });  
}

return( 
    <View style={styles.dogSitterItem}>
       <Pressable
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            onPress={selectDogSitItemHendler}
            >
          <View style={styles.innerContainer}>
            <View>
            <Text style={styles.title} >{title} </Text>
            <Image source={{uri:imageUrl}} style={styles.image}/>
            <Text style={styles.littleDetails}> {name},</Text>
            <Text style={styles.littleDetails}> {location}</Text>
            <Text style={styles.littleDetails}> {age}</Text>
  
            </View>
          </View>
      </Pressable>
    </View>
);}
export default DogSitterItem;

const styles=StyleSheet.create({
    image:{
      flex:1,
      resizeMode: "contain",
      resizeMode:'repeat',
      height: 250,
      width: 250,
    },
    title :{
        fontWeight:'bold',
        textAlign:'center',
        fontSize :18,
        margin:6
    },
    buttonPressed: {
        opacity:0.5,
      },
    dogSitterItem:{
        margin:40,
        borderRadius:20,
        overflow:Platform.OS=='android'?'hidden':'visible',
        elevation:4,
        backgroundColor:'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
       

    },
    innerContainer: {
      flex: 1,
      padding: 0,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'transparency'
    },
    littleDetails:{
        fontSize :14,
        padding:1,
        fontWeight:'bold',
        justifyContent:'flex-end',
        textAlign:'right',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'

    }
});