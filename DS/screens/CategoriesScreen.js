import{CATEGORIES}from '../Data/dummy-data';
import {FlatList}from 'react-native';
import CategoriesGridTile from '../components/CategoriesGridTile';



function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){
        
        function pressHandler(){
            navigation.navigate('DogSit',{
                categoryId:itemData.item.id,
            });
        }
        return (
            <CategoriesGridTile 
            title = {itemData.item.title} 
            color={itemData.item.color} 
            onPress={pressHandler}/>
        );
    }
    return (
    <FlatList 
    data={CATEGORIES}
    keyExtractor = {(item)=>item.id} 
    renderItem={renderCategoryItem}
    />
    );
}


export default CategoriesScreen;