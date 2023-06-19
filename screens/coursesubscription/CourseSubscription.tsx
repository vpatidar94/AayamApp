import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, } from 'react-native';
import { monthlyPurchasingList } from '../../const/MonthlyPurchasingList';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';
import Footer from '../../components/footer/Footer';
import MonthlySubscriptionScreen from './monthlysubscription/MonthlySubscriptionScreen';
import YearlySubscriptionScreen from './yearlysubscription/YearlySubscriptionScreen';
import { courseSubscriptionStyle } from './CourseSubscriptionStyle';

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
                            style={[courseSubscriptionStyle.subscriptionToggle, activeScreen === 'monthly' && courseSubscriptionStyle.activeSubscriptionToggle]}
                            onPress={handleMonthlySubscription}
                        >
                            <Text style={[courseSubscriptionStyle.subscriptionToggleText, activeScreen === 'monthly' && courseSubscriptionStyle.activeSubscriptionToggleText]}>
                                Monthly Subscription
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[courseSubscriptionStyle.subscriptionToggle, activeScreen === 'yearly' && courseSubscriptionStyle.activeSubscriptionToggle]}
                            onPress={handleYearlySubscription}
                        >
                            <Text style={[courseSubscriptionStyle.subscriptionToggleText, activeScreen === 'yearly' && courseSubscriptionStyle.activeSubscriptionToggleText]}>
                                Yearly Subscription
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {activeScreen === 'monthly' ? (
                        <MonthlySubscriptionScreen />) : (<YearlySubscriptionScreen />)}
                </View>
                <Footer navigation={prop.navigation} />
            </ScrollView>
        </SafeAreaView>
    );
}
export default CourseSubscription;
