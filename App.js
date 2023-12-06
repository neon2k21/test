import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const showconsole = ()=>{
  console.log('privetsdfgh')
}

export default function App() {
var text1 ='demo'
  return (
    <View className="bg-[#1b81c1] w-full"
    style={{height:hp(50),padding:wp(10)}}>
      <TouchableOpacity
      onPress={()=>{showconsole()}}
      className="w-full h-full bg-white">
        <Text className="uppercase" style={{fontSize:wp(10)}} onPress={()=>{showconsole}} >
       TEXT
        </Text>
      </TouchableOpacity>
        <Text className="uppercase" style={{fontSize:wp(10)}} >
        {text1}
        </Text>
        
    </View>
  );
}

