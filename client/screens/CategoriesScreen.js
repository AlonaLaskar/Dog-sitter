import{CATEGORIES}from '../Data/dummy-data';
import {FlatList}from 'react-native';
import CategoriesGridTile from '../components/CategoriesGridTile';



function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('dogSiter',{
                categoryId:itemData.item.id,
                
            });
        }
        return (
            <CategoriesGridTile 
            title = {itemData.item.title} 
            imageUrl={itemData.item.imageUrl} // Pass imageUrl as a prop 
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