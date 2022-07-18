import React from "react";
import { View, ImageBackground } from "react-native";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { HStack, Text, useColorMode, Button, SunIcon, MoonIcon, Avatar, Box } from "native-base";

export function DrawerContent (props){
  const { colorMode, toggleColorMode } = useColorMode();

    return(
      <View style={{flex:1}}>
        <DrawerContentScrollView>
          <ImageBackground  source={require('../assets/backgroundImage.jpg')}>
            <Box paddingY='10' pl='4'>
              <Avatar 
                size='xl' 
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
                }
              }/>
              <Text fontSize='2xl' color='blueGray.100'>John Doe</Text>
            </Box>
          </ImageBackground>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View>
          <HStack 
            justifyContent='space-between' 
            p='3' 
            borderTopWidth='1' 
            borderColor='gray.400'
            >
            <Text fontSize='lg' p='4' color='gray.700'>
              DarkMode
            </Text>
            <Button 
              onPress={() => toggleColorMode()}
              variant="unstyled"
              rounded="full"
            >
              {colorMode === "dark" ? <SunIcon size='lg'/> : <MoonIcon size='lg' />}
            </Button>
          </HStack>
        </View>
      </View>
    )
}
