import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import images from '../../constants/images';

const Header = () => {

    return (
        <View style={styles.headerContainer}>
            <Image source={images.userPicture} style={styles.profilePicture} />
            <View>
                <Text style={styles.userName}>Vinicius Delfino</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.userDescription}>Desenvolvedor Mobile / Front-end</Text>
                    <MaterialIcons name='computer' size={20} color='white' />
                </View>
            </View>
        </View>
    );
};

export default Header;
