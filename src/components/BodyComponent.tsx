import React, { ReactNode } from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { SECUNDARY_COLOR } from '../commons/constants';

//Componentes Reutilizables 
interface Props{
    children: ReactNode; //ReactNode: 
}

export const BodyComponent = ({children}: Props) => {

    //hook useWindowDimensions permite obtener las dimensiones de la pantalla
    const { height } = useWindowDimensions();
    return (
        <View style={{ ...styles.container, height: height * 0.88 }}>
            {children}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 50,
        paddingHorizontal: 40,
        paddingTop: 30
    }
});