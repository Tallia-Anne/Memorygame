import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Game from '../screens/Game';


const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
    return (
        <Tab.Navigator>
                 <Tab.Screen
                name="Home"

                component={Home}
                options={
                    {

                        tabBarlabel: "Accueil",
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "Accueil",
                    }
                }
            />
 <Tab.Screen
                name="Game"

                component={Game}
                options={
                    {

                        tabBarlabel: "Jeux",
                        tabBarActibeTinColor: "#333",
                        tabBarInactiveTintColor: "#888",
                        title: "Jeux",
                    }
                }
            />

 
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})

export default NavigationTabs;
