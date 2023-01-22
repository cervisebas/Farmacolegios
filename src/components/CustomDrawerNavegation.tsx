import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { CommonActions, DrawerActions } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Drawer, Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Theme } from "../scripts/Theme";

interface IProps extends DrawerContentComponentProps {
    
};

export default React.memo(function CustomDrawerNavegation(props: IProps) {
    function renderItem({ key, name }: typeof props.state.routes[0], index: number) {
        const { title, drawerLabel, drawerIcon } = props.descriptors[key].options;
        return(<Drawer.Item
            key={`drawer-${index}`}
            label={(drawerLabel !== undefined)? drawerLabel as string: (title !== undefined)? title: name}
            icon={drawerIcon as any}
            active={index == props.state.index}
            style={styles.item}
            onPress={()=>props.navigation.dispatch({ ...(index == props.state.index)? DrawerActions.closeDrawer(): CommonActions.navigate(name), target: props.state.key })}
        />);
    }
    
    return(<View style={styles.content}>
        <View style={styles.header}>
            <Icon name={'medical-bag'} size={48} color={Theme.colors.tertiary} allowFontScaling={false} />
            <Text style={[styles.headerTitle, { color: Theme.colors.tertiary }]} allowFontScaling={false}>ADMINISTRACIÓN</Text>
        </View>
        <ScrollView style={styles.content} contentContainerStyle={styles.scrollView}>
            {props.state.routes.map(renderItem)}
        </ScrollView>
    </View>);
});

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    scrollView: {
        paddingTop: 8
    },
    header: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        marginLeft: 8
    },
    item: {
        marginBottom: 4
    }
});