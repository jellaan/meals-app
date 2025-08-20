import { View, Text, Image } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} />
            <Title>{selectedMeal.title}</Title>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}/>
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
            ))}
            <Text>Steps</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={step}>{step}</Text>
            ))}
        </View>
    );
}

export default MealDetailScreen;