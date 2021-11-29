import React from 'react';
import { Text, View, Platform, ActivityIndicator } from "react-native";
import { Input, Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import { CharContext } from '../../contexts/charContext';

import styles from './styles';

const Form = () => {
    const { addCard } = React.useContext(CharContext);
    const [name, setName] = React.useState('');
    const [image, setImage] = React.useState('');
    const [phone, setPhone] = React.useState('');

    React.useEffect( async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission denied!')
            }
        }
    }, []);

    function register() {
        addCard(name, image, phone); 
        setName(''); 
        setImage(''); 
        setPhone('');
    }

    async function handleChoosePhoto() {
        let result = await ImagePicker.launchImageLibraryAsync({ 
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowEditiong:true,
            aspect:[4,3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar Novo Personagem</Text>
            <Input
                placeholder="Insira o nome do personagem"
                onChangeText={setName}
                value={name}
            />
            <Input
                placeholder="Insira o telefone do personagem"
                onChangeText={setPhone}
                value={phone}
            />
            <Button
                title="Selecione a Imagem"
                icon={{
                    name: "camera",
                    size: 15,
                    color: "white"
                }}
                onPress={handleChoosePhoto}
                buttonStyle={{
                    backgroundColor: '#ab0535',
                    marginBottom: 10,
                }}
            />
            <Button
                title="Cadastrar"
                onPress={() => register()}
            />
        </View>
    );
}

export default Form;