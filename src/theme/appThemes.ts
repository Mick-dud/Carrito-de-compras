import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    titleWelcome: {
        fontSize: 27,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    textDescription: {
        fontSize: 15,
        color: PRIMARY_COLOR,
        paddingVertical: 10
    },
    containerForm: {
        marginVertical: 10
    }
});
