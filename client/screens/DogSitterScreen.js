import {View ,StyleSheet,FlatList}from 'react-native';
import {DOGSITTER,CATEGORIES} from '../Data/dummy-data';
import DogSitterItem from '../components/DogSitterItem';
import { useLayoutEffect } from 'react';

function DogSitterScreen({route,navigation}){
    const catId=route.params.categoryId;

    const displayeDoogSitter=DOGSITTER.filter((dogItem)=>{
        return dogItem.categoryIds.indexOf(catId)>=0;
 });

 
function renderDogSitterItem(itemData){
    const item=itemData.item;
    const dogSitPrors={
        id:item.id,
        title:item.title,
        imageUrl:item.imageUrl,
        name:item.name,
        age:item.age,
        location:item.location,
    };
    return <DogSitterItem {...dogSitPrors}/>;
}


 useLayoutEffect(()=>{//Adjusts headers to pages
    const categoryTitle=CATEGORIES.find(
        (Category)=>Category.id==catId
        ).title;
     navigation.setOptions({
        title:categoryTitle,
     });
    },[catId,navigation]);

    return(
        <View style={styles.continer}>
         <FlatList
         data={displayeDoogSitter}
         keyExtractor = {(item)=>item.id} 
         renderItem={renderDogSitterItem}
         />
        </View>
    );

}

const styles =StyleSheet.create({
    continer:{
        flex: 1,
        padding: 16,
    },
})

export default DogSitterScreen;
