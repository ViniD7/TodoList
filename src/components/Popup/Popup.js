import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Popup = ({ visible, message, onClose }) => {
    if (!visible) return null;

    return (
        <View style={styles.popupContainer}>
            <View style={styles.popupContent}>
                <Text style={styles.popupText}>{message}</Text>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Popup;
