import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import { View, Text , TextInput, Image, TouchableOpacity} from 'react-native';
import { styles } from './style';

const Login = () => {
    const [meuTexto,setMeuTexto] = useState('Tere');
    const navigation = useNavigation<HomePros>();
    return(
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.topo}>
                    <Image 
                        style={styles.Image} 
                        source={require('../../assets/facebook.png')} 
                    />
                    <Text style={styles.titulo}>Facebook</Text>
                </View>
                

                <TextInput style={styles.textInput} 
                    onChangeText={(text)=>{setMeuTexto(text);console.log(meuTexto)}}
                    placeholder="Email"
                />

                <TextInput style={styles.textInput} 
                    onChangeText={(password)=>{setMeuTexto(password);console.log(meuTexto)}}
                    placeholder="Senha"
                />

                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button} onPress={navigation=> (navigation.navigate('Home'))}>
                        <Text style={styles.viewButtonText}>Log in</Text>
                        
                    </TouchableOpacity>
                </View>
                <View style={styles.link}>
                    <Text style={styles.linker}>Sign Up for Facebook</Text>
                </View>
            </View>
        </View>
    );

}

export default Login;