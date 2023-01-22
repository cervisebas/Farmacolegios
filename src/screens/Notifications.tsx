import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";

type IProps = {
    navigation: any;
};

export default React.memo(function Notifications(props: IProps) {
    return(<View style={styles.content}>
        <Appbar.Header>
            <Appbar.Action icon={'menu'} onPress={props.navigation.openDrawer} />
            <Appbar.Content title={'Notificaciones'} />
        </Appbar.Header>
    </View>);
});

const styles = StyleSheet.create({
    content: {
        flex: 1
    }
});