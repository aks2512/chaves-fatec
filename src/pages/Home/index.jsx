import React from 'react';
import { Text, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { CharContext } from '../../contexts/charContext';

import styles from './styles';

const Home = () => {
    const { searchCard, search, filteredCharacters, removeCard } = React.useContext(CharContext);

    return(
        <View style={styles.container}>
            <Input
                onChangeText={searchCard}
                value={search}
                placeholder="Pesquisar personagem"
                rightIcon={{type:'font-awesome', name:'search'}}
            />
            {filteredCharacters.length !== 0 && (
                <View style={styles.cards}>
                    {filteredCharacters.map((character, key) => {
                        return (
                            <View style={styles.card} key={key}>
                                <Image 
                                    style={styles.cardImage}
                                    resizeMode="cover"
                                    source={character.image}
                                />
                                <Text>{character.name}</Text>
                                <Text>{character.phone}</Text>
                                <Button 
                                    style={styles.cardButton}
                                    onPress={() => removeCard(character.id)}
                                    icon={
                                        <Icon
                                            name="close"
                                            size={15}
                                            color="red"
                                        />
                                    }
                                    type="clear"
                                />
                            </View>
                        );
                    })}
                </View>
            )}

        </View>
    );
}

export default Home;