import React, { useEffect } from "react";
import { Provider } from "react-native-paper";
import { Theme, ThemeNavigation } from "./scripts/Theme";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { DrawerContentComponentProps, createDrawerNavigator } from "@react-navigation/drawer";
import Schedule from "./screens/Schedule";
import General from "./screens/General";
import Pharmacy from "./screens/Pharmacy";
import Groups from "./screens/Groups";
import Notifications from "./screens/Notifications";
import CustomDrawerNavegation from "./components/CustomDrawerNavegation";
import SystemNavigationBar from "react-native-system-navigation-bar";
import { StatusBar } from "react-native";

const Drawer = createDrawerNavigator();

export default React.memo(function App(_props: any) {
    function drawerContent(propsDrawer: DrawerContentComponentProps) { return(<CustomDrawerNavegation {...propsDrawer} />); }

    useEffect(()=>{
        SystemNavigationBar.setNavigationColor(Theme.colors.primary, 'light', 'navigation');
    }, []);

    return(<Provider theme={Theme}>
        <StatusBar backgroundColor={Theme.colors.background} barStyle={'dark-content'} />
        <NavigationContainer theme={ThemeNavigation}>
            <Drawer.Navigator initialRouteName="Schedule" screenOptions={{ headerShown: false }} drawerContent={drawerContent}>
                <Drawer.Screen name={"Schedule"} options={{ drawerLabel: 'Calendario', drawerIcon: 'calendar-outline' as any }} component={Schedule} />
                <Drawer.Screen name={"General"} options={{ drawerLabel: 'Vision General', drawerIcon: 'map-outline' as any }} component={General} />
                <Drawer.Screen name={"Pharmacy"} options={{ drawerLabel: 'Administrar Farmacias', drawerIcon: 'home-plus-outline' as any }} component={Pharmacy} />
                <Drawer.Screen name={"Groups"} options={{ drawerLabel: 'Administrar Grupos', drawerIcon: 'inbox-full-outline' as any }} component={Groups} />
                <Drawer.Screen name={"Notifications"} options={{ drawerLabel: 'Notificaciones', drawerIcon: 'message-badge-outline' as any }} component={Notifications} />
            </Drawer.Navigator>
        </NavigationContainer>
    </Provider>);
});