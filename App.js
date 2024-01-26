import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Game } from './screens';
import { Tabs } from './navigation';


const Stack = createStackNavigator();

export default function App() {
  

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
         <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false, }}
           />
        <Stack.Screen
          name="Home"
          component={Home} />
        <Stack.Screen
          name="Game"
          component={Game} />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}


