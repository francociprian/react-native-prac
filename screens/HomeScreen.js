import { View } from "native-base";
import Inbox from '../components/Inbox';

export default function HomeScreen({ navigation }) {
  
  return (
      <View>
        <View 
          // justifyContent='center'
        >
          <Inbox/>
        </View>
      </View>
  );
}