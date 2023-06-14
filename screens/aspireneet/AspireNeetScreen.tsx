/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    SectionList,
    Image,
    TouchableOpacity,
} from 'react-native';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';
import { AspireNeetStyle } from '../../screens/aspireneet/AspireNeetScreenStyle';
import Footer from '../../components/footer/Footer';
import { quantityList } from '../../const/QuantityList';
import { otherDetails } from '../../const/OtherDetailsList';
import { facultyList } from '../../const/FacultyList';
// import { courseSubscriptionStyle } from '../../screens/coursesubscription/CourseSubscriptionStyle';
import TestScreen from '../../screens/test/TestScreen';
import AspireNeetDescription from '../../components/aspireneetdescription/AspireNeetDescription';

const Separator = () => <View style={styles.separator} />;
function AspireNeetScreen(prop: any): JSX.Element {
    useEffect(() => {
        setActiveScreen('description');
    }, []);
    const [activeScreen, setActiveScreen] = useState('description');

    const handleDescription = () => {
        setActiveScreen('description');
    };

    const handleDemo = () => {
        setActiveScreen('demo');
    };

    const handleFaq = () => {
        setActiveScreen('faq');
    };

    return (
        <SafeAreaView style={styles.commonContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <Text
                        style={[
                            styles.sectionTitle,
                            { color: color.secondary },
                            { marginTop: 8 },
                        ]}>
                        Aspire (NEET + XI)
                    </Text>
                    <Separator />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            //   marginVertical: 16,
                        }}>
                        <TouchableOpacity
                            style={[
                                AspireNeetStyle.subscriptionToggle,
                                activeScreen === 'description' &&
                                AspireNeetStyle.activeSubscriptionToggle,
                            ]}
                            onPress={handleDescription}>
                            <Text
                                style={[
                                    AspireNeetStyle.subscriptionToggleText,
                                    activeScreen === 'description' &&
                                    AspireNeetStyle.activeSubscriptionToggleText,
                                ]}>
                                Description
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                AspireNeetStyle.subscriptionToggle,
                                activeScreen === 'demo' &&
                                AspireNeetStyle.activeSubscriptionToggle,
                            ]}
                            onPress={handleDemo}>
                            <Text
                                style={[
                                    AspireNeetStyle.subscriptionToggleText,
                                    activeScreen === 'demo' &&
                                    AspireNeetStyle.activeSubscriptionToggleText,
                                ]}>
                                Demo
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                AspireNeetStyle.subscriptionToggle,
                                activeScreen === 'faq' &&
                                AspireNeetStyle.activeSubscriptionToggle,
                            ]}
                            onPress={handleFaq}>
                            <Text
                                style={[
                                    AspireNeetStyle.subscriptionToggleText,
                                    activeScreen === 'faq' &&
                                    AspireNeetStyle.activeSubscriptionToggleText,
                                ]}>
                                FAQs
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Separator />
                    {activeScreen === 'description' && <AspireNeetDescription navigation={prop.navigation} />}

                    {activeScreen === 'demo' && <TestScreen />}

                    {activeScreen === 'faq' && <TestScreen />}
                    <Separator />
                </View>
                <Separator />
            </ScrollView>
        </SafeAreaView>
    );
}
export default AspireNeetScreen;
