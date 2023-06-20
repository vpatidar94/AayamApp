import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { monthlyPurchasingList } from '../../../const/MonthlyPurchasingList';
import { styles } from '../../../styles/style';
import { color } from '../../../styles/color';
import { MonthlyCourseStyle } from './MonthlySubscriptionStyle';

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
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View style={MonthlyCourseStyle.squareStyle}>
                                            {checkedItems[index] && (
                                                <Text style={MonthlyCourseStyle.selectTick}>&#10003;</Text>
                                            )}

                                        </View>
                                        <View style={{ width: '40%' }}>
                                            <Text style={MonthlyCourseStyle.purchasingItem}>{item.purchasingItem}</Text>
                                        </View>
                                        <View >
                                            <Text style={MonthlyCourseStyle.itemPrice}>{item.price}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                    <Text style={MonthlyCourseStyle.totalPrice}>
                        Total Price: {calculateTotalPrice()}
                    </Text>
                    <Separator />
                    <Button
                        title="Proceed to Pay"
                        onPress={() => prop.navigation.navigate('test')}
                    />
                    <Separator />
                    <View>
                        <Image source={{ uri: 'https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=1060&t=st=1687246376~exp=1687246976~hmac=11740afa50c4b6b993bd940db9841d062d62f2791c38bd5072f6d082dafa5615' }}
                            style={styles.bannerImage} />
                    </View>
                    <View>
                        <Image source={{ uri: 'https://as1.ftcdn.net/v2/jpg/06/04/44/50/1000_F_604445038_LkhBAATvrKzCJtwkVsr3m0y0maiAv0wF.jpg' }}
                            style={styles.bannerImage} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default MonthlySubscriptionScreen;
