import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CustomCard from "../../components/CustomCard";

type IProps = {
    expand: boolean;
};

export default React.memo(function ScheduleExample(props: IProps) {
    return(<View style={styles.content}>
        <ScrollView style={styles.content} contentContainerStyle={styles.scrollView}>
            {new Array(24).fill(0).map((_a, i)=><CustomCard key={`card-example-${i}`} index={i+1} style={styles.card} />)}
        </ScrollView>
    </View>);
});

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    scrollView: {
        paddingTop: 8,
        paddingLeft: 12,
        paddingRight: 12
    },
    card: {
        marginBottom: 8
    }
});