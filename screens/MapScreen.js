import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const MapScreen = () => {
    return (
        <View style={styles.div}>
            <Text>Here is the map stuff..</Text>
        </View>
    );
}

export default MapScreen

const styles = StyleSheet.create({
    div: {
        flex: 1,
        paddingTop: 50
    }
})