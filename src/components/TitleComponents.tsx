import React from 'react'
import { StyleSheet, Text, useWindowDimensions } from 'react-native'
import { SECUNDARY_COLOR } from '../commons/constants';

//Componente reutiliable (recibe dinamicamente de un componente padre)
interface Props { //proiedades (valores desde otros componentes --desde otro lugar)
    title: string;
}

export const TitleComponents = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={{ ...styles.title, height: height * 0.12 }}>{title}</Text>
    )
}

export const styles = StyleSheet.create({
    title: {
        color: SECUNDARY_COLOR,
        fontSize: 35,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 27,
        alignSelf:'center'
    },
});