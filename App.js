import { View, Text, Image, ScrollView } from 'react-native';
import Targeta from "./Targeta";

export default function App() {
  return (
    <View style={{backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView>
      <Targeta></Targeta>
      <Targeta></Targeta>
      <Targeta></Targeta>
      <Targeta></Targeta>
      <Text style={{color: 'black'}}> hola mundo</Text>
      <Image source={require('./assets/imagenes/gatitos.jpg')} style = {{width: 400, height:300}}></Image>
      <Image source={require('./assets/imagenes/gatitos.jpg')} style = {{width: 400, height:300}}></Image>
      <Image source={require('./assets/imagenes/gatitos.jpg')} style = {{width: 400, height:300}}></Image>
      </ScrollView>
    </View>
  );
}

