import {View, Image, Text} from  "react-native";

const Targeta = () => {
    return (
        <View style= {{backgroundColor: 'blue', padding: 50, width:300, alignSelf: 'center', marginBottom: 20}}>
            <Image source={require('./assets/imagenes/ficha.png')} style={{alignSelf: 'center', marginBottom:10}}></Image>
                <Text>Nombre: Alejandro</Text>
                <Text>Apellido:Gonzalez</Text>
                <Text>Edad: 35</Text>
        </View>
    );
}

export default Targeta;