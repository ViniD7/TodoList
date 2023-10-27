import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckBoxComponent = ({ isChecked }) => {
    const [check, setCheck] = useState(isChecked);

    return (
        <View style={styles.containerCheckBox}>
            {check ? (
                <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                        setCheck(!check);
                    }}>
                    <MaterialCommunityIcons
                        name="check-bold"
                        size={28}
                        color={'rgb(0, 255, 132)'}
                    />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => {
                        setCheck(!check);
                    }}>
                    <MaterialCommunityIcons
                        name="checkbox-blank-circle-outline"
                        size={28}
                        color={'white'}
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default CheckBoxComponent;
