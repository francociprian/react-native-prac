import React from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './components/DrawerContent';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/Notifications';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NativeBaseProvider>
      {/* <StatusBar> */}
        <NavigationContainer >
          <Drawer.Navigator 
            initialRouteName="Home" 
            drawerContent={(props) => <DrawerContent {...props}/>}
            contentContainerStyle={{
              backgroundColor:'#262626',
            }}
            screenOptions={{
              // drawerStyle: {
              //   // backgroundColor: '#ffead3',
              //   // backgroundColor: `${colorMode === "dark" ? "#ffead3" : "#262626" }`,
              // },
              drawerActiveTintColor: '#000000',
              // drawerInactiveTintColor: '#8f8f8f',
            }}
          >
            <Drawer.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                // headerStyle: {
                //   // backgroundColor: '#DAF7A6',
                //   backgroundColor: '#262626',
                // },
                // headerTintColor: '#262626',
                headerTintColor: '#8f8f8f',
                drawerIcon: ({color}) =>(
                  <Ionicons name="home" size={24} color={color} />
                )
              }}
            />
            <Drawer.Screen 
              name="Notifications" 
              component={NotificationsScreen} 
              options={{
                // headerStyle:{
                //   backgroundColor: '#FFEAD3'
                // },
                headerTintColor: '#262626',
                drawerIcon: ({color}) =>(
                  <Ionicons name="notifications" size={24} color={color} />
                )
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      {/* </StatusBar> */}
    </NativeBaseProvider>
  );
}