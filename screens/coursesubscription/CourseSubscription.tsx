import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { monthlyPurchasingList } from '../../const/MonthlyPurchasingList';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';
import Footer from '../../components/footer/Footer';
import MonthlySubscriptionScreen from '../monthlysubscription/MonthlySubscriptionScreen';
import YearlySubscriptionScreen from '../yearlysubscription/YearlySubscriptionScreen';

const Separator = () => <View style={styles.separator} />;
function CourseSubscription(prop: any): JSX.Element {
    const [activeScreen, setActiveScreen] = useState('monthly');

    const handleMonthlySubscription = () => {
        setActiveScreen('monthly');
    };

    const handleYearlySubscription = () => {
        setActiveScreen('yearly');
    };
    return (
        <SafeAreaView style={styles.commonContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={{ flex: 1 }}>

                    {/* newly added code for toggle btn */}

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 16 }}>
                        <TouchableOpacity
                            style={[styling.subscriptionToggle, activeScreen === 'monthly' && styling.activeSubscriptionToggle]}
                            onPress={handleMonthlySubscription}
                        >
                            <Text style={[styling.subscriptionToggleText, activeScreen === 'monthly' && styling.activeSubscriptionToggleText]}>
                                Monthly Subscription
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styling.subscriptionToggle, activeScreen === 'yearly' && styling.activeSubscriptionToggle]}
                            onPress={handleYearlySubscription}
                        >
                            <Text style={[styling.subscriptionToggleText, activeScreen === 'yearly' && styling.activeSubscriptionToggleText]}>
                                Yearly Subscription
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {activeScreen === 'monthly' ? (
                        <MonthlySubscriptionScreen/>):(<YearlySubscriptionScreen/>)}
                    </View>
                    </ScrollView>
                    </SafeAreaView>)}
 const styling = StyleSheet.create({
    subscriptionToggle: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginRight: 8,
    },
    activeSubscriptionToggle: {
        backgroundColor: 'black',
    },
    subscriptionToggleText: {
        fontSize: 14,
        color: 'black',
    },
    activeSubscriptionToggleText: {
        color: 'white',
    },
    // Rest of your styles
});                       

export default CourseSubscription;