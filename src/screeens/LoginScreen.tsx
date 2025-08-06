import React, { useState } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponents } from '../components/TitleComponents'
import { TERIARY_COLOR } from '../commons/constants'
import { BodyComponent } from '../components/BodyComponent'
import { styles } from '../theme/appThemes';
import { ImputComponent } from '../commons/ImputComponent'
import { ButtonComponent } from '../components/ButtonComponent'

//interface para el objeto del formulario
interface Formlogin {
    username: string,
    password: string,
}

export const LoginScreen = () => {
    //hook useState para manejar el estado del formulario
    const [formLogin, setFormLogin] = useState({
        username: '',
        password: '',
    });

//Funcion para modificar el estado del formulario
const changeForm = (property: string, value:string): void => {
    //console.log(property + ':' + value);
    setFormLogin({...formLogin, [property]:value });
}
//funcion permitir iniciar sesion
const handleLogin =() => {
    console.log(formLogin);
}

    return (
        <View>
            <StatusBar backgroundColor={TERIARY_COLOR} />
            <TitleComponents title='Inicia Sesión' />
            <BodyComponent>
                <Text style={styles.titleWelcome}>Bienvenido de Nuevo!</Text>
                <Text style={styles.textDescription}>Realiza tus compras de manera rapida y segura</Text>
                <View style={styles.containerForm}>
                    <ImputComponent placeholder='Usuario' keyboardType='default' changeForm = {changeForm} property='username' />
                    <ImputComponent placeholder='Contraseña' keyboardType='default' changeForm = {changeForm} property='password' isPassword={true} />
                </View >
                <ButtonComponent textButton='Enviar' handleLogin={handleLogin}/>
            </BodyComponent>
        </View>
    )
}
