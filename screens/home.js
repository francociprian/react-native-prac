import react from "react";
import { StyleSheet, Text ,View, TouchableOpacity, ScrollView, Image, ImageBackground } from "react-native";
import { FontAwesome5, MaterialCommunityIcons, SimpleLineIcons, Ionicons, MaterialIcons  } from '@expo/vector-icons';

export default function App() {
  const image = { uri: 'https://picsum.photos/id/1011/1242/2436' };

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <SimpleLineIcons name="user" size={24} color="black" />
        <View style={styles.userMenu}>
          <MaterialCommunityIcons name="line-scan" size={24} color="black" />
          <MaterialIcons name="menu" size={29} color="black" />
        </View>
      </View>

      <View>
        <ImageBackground 
          source={image}
          style={{ width: '100%', height: 450 }}
        ></ImageBackground>
      </View>
      <View><Text>Images</Text></View>
      <ScrollView horizontal style={styles.scrollView}>
        <Image source={{ uri: 'https://picsum.photos/200/300?grayscale'}} style={styles.image}/>
        <Image source={{ uri: 'https://picsum.photos/200/300?grayscale'}} style={styles.image}/>
        <Image source={{ uri: 'https://picsum.photos/200/300?grayscale'}} style={styles.image}/>
        <Image source={{ uri: 'https://picsum.photos/200/300?grayscale'}} style={styles.image}/>
      </ScrollView>
      <View style={styles.viewStatusBar}>
        <TouchableOpacity>
          <FontAwesome5 style={styles.fontAwesome} name="home" size={26} color="#696969" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 style={styles.fontAwesome} name="search" size={26} color="#696969" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 style={styles.fontAwesome} name="shopping-bag" size={26} color="#696969" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "space-between",
    height: "100%",
    paddingTop: 35,
  },
  imageMain:{
    width: "100%",
    height: 200,
  },
  // scrollView
  scrollView: {
    paddingVertical: 30,
  },
  image:{
    width: 140,
    height: 140,
    margin: 10,
    borderRadius: 10,
  },
  viewStatusBar:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#101010",
    paddingTop: 30,
    paddingBottom: 40,
  },
  fontAwesome:{
    paddingHorizontal: 10,
  },
  user: {
    width: "100%",
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userMenu: {
    flexDirection: "row",
  },
});