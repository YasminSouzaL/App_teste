import React from 'react';
import { StyleSheet,TouchableOpacity, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from '@rneui/base';

const MapScreen = () => {
    const Stack = createStackNavigator();

    return (
        <View>
            <TouchableOpacity style={tw ``}>
                <Icon name="menu" />
            </TouchableOpacity>
            <View style={styles.div}>
                <View style={tw`h-1/2`}>
                    <Map />
                </View>

                <View style={tw`h-1/2`}>
                    <Stack.Navigator>
                        <Stack.Screen 
                            name="NavigateCard"
                            component={NavigateCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen 
                            name="RideOptionsCard"
                            component={RideOptionsCard}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                </View>
            </View>
        </View>
    );
}

export default MapScreen

const styles = StyleSheet.create({}) 