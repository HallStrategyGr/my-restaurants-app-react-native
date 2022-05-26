import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, View, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './src/styles';

const bgImage = { uri: 'https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg' };

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' source={bgImage} style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
    </NavigationContainer>
  );
}