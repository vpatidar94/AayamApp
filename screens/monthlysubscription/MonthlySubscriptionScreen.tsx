import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { monthlyPurchasingList } from '../../const/MonthlyPurchasingList';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';

const Separator = () => <View style={styles.separator} />;
function MonthlySubscriptionScreen(prop: any): JSX.Element {

    const [checkedItems, setCheckedItems] = useState(Array(monthlyPurchasingList.length).fill(true));

    const handleCheckboxChange = (index: number) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !checkedItems[index];
        setCheckedItems(updatedCheckedItems);
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        monthlyPurchasingList.forEach((item, index) => {
            if (checkedItems[index]) {
                totalPrice += parseInt(item.price);
            }
        });
        return totalPrice;
    };
    return (
        <SafeAreaView style={styles.commonContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={{ flex: 1 }}>
                    <Text style={[styles.sectionTitle, { color: color.secondary }, { marginTop: 8 }, { marginBottom: 8 }]}>
                        Purchase Monthly Subscription
                    </Text>
                    {monthlyPurchasingList.map((item, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity onPress={() => handleCheckboxChange(index)}>
                                    <View style={{ flexDirection: 'row', justifyContent: "flex-start" }}>
                                        <View
                                            style={{
                                                width: 24,
                                                height: 24,
                                                marginRight: 8,
                                                borderWidth: 1,
                                                borderColor: 'black',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {checkedItems[index] && (
                                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: color.green }}>&#10003;</Text>
                                            )}

                                        </View>
                                        <View style={{ width: "40%" }}>
                                            <Text style={{ textAlign: "justify", fontSize: 14, marginRight: 18 }}>{item.purchasingItem}</Text>
                                        </View>
                                        <View >
                                            <Text style={{ textAlign: 'center', fontSize: 14 }}>{item.price}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 16, backgroundColor: color.primary, height: 30, padding: 5 }}>
                        Total Price: {calculateTotalPrice()}
                    </Text>
                    <Separator />
                    <Button
                        title="Proceed to Pay"
                        onPress={() => prop.navigation.navigate('test')}
                    />
                    <Separator />
                    <View>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                            style={{ height: 200, marginBottom: 20, marginTop: 20 }} />
                    </View>
                    <View>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                            style={{ height: 200, marginBottom: 20, marginTop: 20 }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MonthlySubscriptionScreen;
