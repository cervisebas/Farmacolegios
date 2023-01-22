import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";

type IProps = {
    navigation: any;
};

export default React.memo(function General(props: IProps) {
    return(<View style={styles.content}>
        <Appbar.Header>
            <Appbar.Action icon={'menu'} onPress={props.navigation.openDrawer} />
            <Appbar.Content title={'Vision General'} />
        </Appbar.Header>
    </View>);
});

const styles = StyleSheet.create({
    content: {
        flex: 1
    }
});