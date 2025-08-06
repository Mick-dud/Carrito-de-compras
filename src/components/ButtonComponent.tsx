import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { PRIMARY_COLOR, SECUNDARY_COLOR, TERIARY_COLOR } from '../commons/constants';

interface Props {
    textButton: string;
    handleLogin: () => void;
}

export const ButtonComponent = ({ textButton, handleLogin }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: TERIARY_COLOR,
        paddingVertical: 15,
        width: 120,
        borderRadius: 10,
        alignSelf: 'center',
        boxShadow: '3px 5px 12px rgba(0, 0, 0, 0.6)'
    },
    buttonText: {
        color: PRIMARY_COLOR,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})