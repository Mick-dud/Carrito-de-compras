import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native'

import { INPUT_COLOR } from './constants';

interface Props { //propiedades
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    changeForm: (property: string, value: string) => void; //Funcion modificar el estado del formulario
    property: string //propiedades del objeto del formimulario 
    isPassword?: boolean; // propidad opcional - indica el campo de contraseña                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}

export const ImputComponent = ({ placeholder, keyboardType, changeForm, property, isPassword }: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType} //keyboardTypeOptions
            onChangeText={(value) => changeForm(property, value)}
            secureTextEntry={isPassword} //oculta la comtraseña
            style={styles.inputText}
        />
    )
}


const styles = StyleSheet.create({
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        borderRadius: 20,
        margin: 7,
    }
})