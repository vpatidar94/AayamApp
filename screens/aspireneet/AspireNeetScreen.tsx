import React from 'react';
import { SafeAreaView, ScrollView, Text, View, SectionList, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';
import { AspireNeetStyle } from './AspireNeetScreenStyle';
import Footer from '../../components/footer/Footer';
import { quantityList } from '../../const/QuantityList';
import { otherDetails } from '../../const/OtherDetailsList';
import { facultyList } from '../../const/FacultyList';

const Separator = () => <View style={styles.separator} />;
function AspireNeetScreen(prop: any): JSX.Element {
    return (
        <SafeAreaView style={styles.commonContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View >
                    <Text style={[styles.sectionTitle, { color: color.secondary }, { marginTop: 8 }]}>Aspire (NEET + XI)</Text>
                    <Separator />
                    <View style={AspireNeetStyle.mainOption}>
                        <Text>Description</Text>
                        <Text>Demo</Text>
                        <Text>FAQ'S</Text>
                    </View>
                    <Separator />
                    <View>
                        <Text style={AspireNeetStyle.subHeading}>Course Details</Text>
                        <View style={AspireNeetStyle.mainOption}>
                            {quantityList.map((item, index) => {
                                return (
                                    <View key={index} style={AspireNeetStyle.optionContainer}>
                                        <Text>{item.quantity}</Text>
                                        <Text>{item.item}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={AspireNeetStyle.subHeading}>Other Details</Text>
                    <SectionList
                        sections={otherDetails}
                        renderItem={({ item }) => <Text style={AspireNeetStyle.listDataStyle}>{item}</Text>}
                        renderSectionHeader={({ section }) => (
                            // <Text>{section.title}</Text>
                            <View style={AspireNeetStyle.sectionHeaderContainer}>
                                <View style={AspireNeetStyle.square} />
                                <Text style={AspireNeetStyle.sectionHeaderTitle}>{section.title}</Text>
                            </View>
                        )}
                        keyExtractor={item => `basicListEntry-${item}`}
                    />
                </View>
                <Separator />
                <View>
                    <Text style={AspireNeetStyle.subHeading}>Faculties (Click to know more)</Text>
                    <View style={AspireNeetStyle.mainOption}>
                        {facultyList.map((item, index) => {
                            return (

                                <View key={item.id} style={AspireNeetStyle.optionContainer}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.sub}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View>
                        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                            style={{ height: 200, marginBottom: 20, marginTop: 20 }} />
                    </View>
                    <View>
                        <Text style={AspireNeetStyle.subHeading}>Fee Details</Text>
                        <View>
                            <TouchableOpacity onPress={() => prop.navigation.navigate('CourseSubscription')}>
                                <Text style={{ backgroundColor: color.light_blue, marginBottom: 8, color: color.white, padding: 5 }}>Monthly Subscription</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => prop.navigation.navigate('CourseSubscription')}>
                                <Text style={{ backgroundColor: color.light_blue, marginBottom: 8, color: color.white, padding: 5 }}>Yearly Subscription</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={AspireNeetStyle.subHeading}>Other Details</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint minima est voluptatem itaque doloribus reprehenderit, recusandae magnam vero dicta quasi mollitia animi inventore labore non nesciunt. Obcaecati voluptate doloremque itaque.</Text>
                        </View>
                    </View>
                    <Footer navigation={prop.navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default AspireNeetScreen