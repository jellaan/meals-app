import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

// screen component 이 아니기 때문에 navigation 이나 route props 를 받을 수 없어서 useNavigation 사용
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();
    
    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }
 
    return (
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{ color: '#ccc' }}
                style={({pressed}) => 
                    pressed ? styles.buttonPressed : null
                }
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        // overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible' //ripple
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8 
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
});