import {View, Text,StyleSheet } from "react-native";
function AbuotMe({data}){
    return selectDogSitter.aboutMe.map((dataPoint) => (
     <View style={styles.aboutMeItem} key={dataPoint}>
        <Text style={styles.itemText}>{dataPoint}</Text>

     </View>
    ));
}
export default AbuotMe;
const styles=StyleSheet.create({
    itemText:{
        fontWeight :'bold',
        fontSize:18,
        margin:8,
        textAlign:'right',
        color: '#351401'
    },
    aboutMeItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical4,
        marginVertical:4,
        marginHorizontal12,
        backgroundColor:'#e2b497'
    }
});