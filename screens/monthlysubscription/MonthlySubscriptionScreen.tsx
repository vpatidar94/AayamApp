import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, TouchableOpacity, } from 'react-native';
import { monthlyPurchasingList } from '../../const/MonthlyPurchasingList';
import { useState } from 'react';

function MonthlySubscriptionScreen(prop: any): JSX.Element {
    const [isSelected, setSelection] = useState(false);
    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {monthlyPurchasingList.map((item, index) => {
                        return (
                            <View key={index}>
                                <View>
                                    {/* <CheckBox
                                        value={isSelected}
                                        onValueChange={setSelection}
                                        // style={styles.checkbox}
                                    />
                                    <Text >Do you like React Native?</Text> */}
                                    <Text style={{ textAlign: 'center', fontSize: 12 }}>{item.purchasingItem}</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 12 }}>{item.price}</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default MonthlySubscriptionScreen;
