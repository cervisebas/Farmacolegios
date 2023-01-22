import { MaterialTopTabBarProps, createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import TabBar from "../components/TabBar";
import ScheduleExample from "./Schedule/ScheduleExample";

type IProps = {
    navigation: any;
};

const Tab = createMaterialTopTabNavigator();

export default React.memo(function Schedule(props: IProps) {
    function tabBar(tProps: MaterialTopTabBarProps) {
        return(<TabBar {...tProps} />);
    }

    return(<View style={styles.content}>
        <Appbar.Header>
            <Appbar.Action icon={'menu'} onPress={props.navigation.openDrawer} />
            <Appbar.Content title={'Calendario'} />
        </Appbar.Header>
        <View style={styles.content}>
            <Tab.Navigator tabBarPosition={'bottom'} tabBar={tabBar}>
                <Tab.Screen name="Example" children={()=><ScheduleExample expand />} />
                <Tab.Screen name="Example 2" children={()=><ScheduleExample expand />} />
            </Tab.Navigator>
        </View>
    </View>);
});

const styles = StyleSheet.create({
    content: {
        flex: 1
    }
});