import React, { useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { Theme } from "../scripts/Theme";
import { ANDROID_RIPPLE } from "../scripts/Utils";

type IProps = {
    index: number;
    extend?: boolean;
    style?: StyleProp<ViewStyle>;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default React.memo(function CustomCard(props: IProps) {
    const [heightExtend, setHeightExtend] = useState(0);
    const [isExtend, setIsExtend] = useState(false);
    const height = useSharedValue(50);
    const animatedStyle = useAnimatedStyle(()=>({ height: withTiming(height.value, { duration: 100, easing: Easing.linear }) }));

    function onLayout({ nativeEvent: { layout: { height } } }: LayoutChangeEvent) {
        setHeightExtend(height);
    }

    function changeStatus() {
        if (props.extend || isExtend) {
            return height.value = (heightExtend + 66);
        }
        height.value = 50;
    }
    function updateStatus() {
        if (props.extend || isExtend) return height.value = (heightExtend + 66);
    }

    function onPress() {
        setIsExtend(!isExtend);
    }

    useEffect(()=>{updateStatus();}, [heightExtend]);
    useEffect(()=>{changeStatus();}, [props.extend, isExtend]);

    return(<AnimatedPressable style={[styles.card, { borderRadius: Theme.roundness * 3, backgroundColor: Theme.colors.elevation.level3 }, animatedStyle, props.style]} android_ripple={ANDROID_RIPPLE} onPress={onPress}>
        <View style={styles.title}>
            <Title>{props.index} Ejemplo de titulo</Title>
        </View>
        <View style={styles.details} onLayout={onLayout}>
            <Paragraph onLayout={onLayout}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ut voluptatem corrupti! Nisi placeat in nostrum nam obcaecati blanditiis, dolorum earum consectetur dicta laborum, non, voluptatem iure dolore maxime veniam.</Paragraph>
        </View>
    </AnimatedPressable>);
});

const styles = StyleSheet.create({
    card: {
        elevation: 3,
        width: '100%',
        minHeight: 50,
        overflow: 'hidden',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16
    },
    title: {
        width: '100%',
        height: 50
    },
    details: {
        width: '100%'
    }
});