import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import Home from './Screens/Home'; // Pantalla Home para el Stack
import DetailHome from './Screens/DetailHome';
import AnotherDetailHome from './Screens/AnotherDetailHome';
import Settings from './Screens/Settings';
import Users from './Screens/Users';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator para la pantalla Home y sus detalles
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailHome" component={DetailHome} />
      <Stack.Screen name="AnotherDetailHome" component={AnotherDetailHome} />
    </Stack.Navigator>
  );
}

// Configuración del Bottom Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'setting';
          } else if (route.name === 'Users') {
            iconName = 'user';
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      {/* Aquí uso el HomeStack y no la pantalla Home directamente */}
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ title: '' }} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Users" component={Users} />
    </Tab.Navigator>
  );
}

// Navegación principal
export default function Navegacion() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
