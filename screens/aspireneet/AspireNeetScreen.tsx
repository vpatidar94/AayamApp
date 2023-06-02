import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, StyleSheet, SectionList, Image, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';
import Footer from '../../components/footer/Footer';
import { quantityList } from '../../const/QuantityList';
import { otherDetails } from '../../const/OtherDetailsList';
import { facultyList } from '../../const/FacultyList';



const Separator = () => <View style={styles.separator} />;
function AspireNeetScreen(prop: any): JSX.Element {

    return (
        <SafeAreaView style={addStyle.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View >
                    <Text style={[styles.sectionTitle, { color: color.secondary }, { marginTop: 8 }]}>Aspire (NEET + XI)</Text>
                    <Separator />
                    <View style={addStyle.mainOption}>
                        <Text>Description</Text>
                        <Text>Demo</Text>
                        <Text>FAQ'S</Text>
                    </View>
                    <Separator />
                    <View>
                        <Text style={addStyle.subHeading}>Course Details</Text>
                        <View style={addStyle.mainOption}>
                            {quantityList.map((item, index) => {
                                return (
                                    <View key={index} style={addStyle.optionContainer}>
                                        <Text>{item.quantity}</Text>
                                        <Text>{item.item}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={addStyle.subHeading}>Other Details</Text>
                    <SectionList
                        sections={otherDetails}
                        renderItem={({ item }) => <Text style={addStyle.listDataStyle}>{item}</Text>}
                        renderSectionHeader={({ section }) => (
                            // <Text>{section.title}</Text>
                            <View style={addStyle.sectionHeaderContainer}>
                                <View style={addStyle.square} />
                                <Text style={addStyle.sectionHeaderTitle}>{section.title}</Text>
                            </View>
                        )}
                        keyExtractor={item => `basicListEntry-${item}`}
                    />
                </View>
                <Separator />
                <View>
                    <Text style={addStyle.subHeading}>Faculties (Click to know more)</Text>
                    <View style={addStyle.mainOption}>
                        {facultyList.map((item, index) => {
                            return (
                                <View key={index} style={addStyle.optionContainer}>
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
                        <Text style={addStyle.subHeading}>Fee Details</Text>
                        <View>
                        <TouchableOpacity onPress={() => prop.navigation.navigate('MonthlySubscription')}>
                            <Text style={{ backgroundColor: color.light_blue, marginBottom: 8, color: color.white, padding: 5 }}>Monthly Subscription</Text>
                        </TouchableOpacity>
                            <Text style={{ backgroundColor: color.light_blue, marginBottom: 8, color: color.white, padding: 5 }}>Yearly Subscription</Text>
                        </View>
                        <View>
                            <Text style={addStyle.subHeading}>Other Details</Text>
                            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint minima est voluptatem itaque doloribus reprehenderit, recusandae magnam vero dicta quasi mollitia animi inventore labore non nesciunt. Obcaecati voluptate doloremque itaque.</Text>
                        </View>
                    </View>
                    <Footer />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const addStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    mainOption: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subHeading: {
        fontSize: 18,
        fontWeight: '700',
        color: color.black,
    },
    optionContainer: {
        width: 86,
        padding: 4,
        margin: 5,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.primary,
        borderRadius: 4,
    },
    listDataStyle: {
        fontWeight: '900',
        marginBottom: 5,
        marginLeft: 15,

    },
    square: {
        width: 8,
        height: 8,
        backgroundColor: color.grey,
        marginRight: 5,
        borderRadius: 8,
    },
    sectionHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    sectionHeaderTitle: {
        fontSize: 14,                                                                                                                   
    },

});
export default AspireNeetScreen