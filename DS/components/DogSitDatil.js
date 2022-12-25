import { View,Text,StyleSheet } from "react-native";

function DogSitDatil({name,age,location}){
    return(
        <View >
             <Text style={styles.littleDetails} >{name},</Text>
             <Text style={styles.littleDetails}>{age}{location}.</Text>
        </View>
    );
}
const styles=StyleSheet.create({
littleDetails:{
fontWeight:'bold',
fontSize :20,
margin:8,
textAlign:'right',
backgroundColor:'pink',
textAlign:'right',
justifyContent: 'center',
alignItems:'flex-end',
},

})
export default DogSitDatil;