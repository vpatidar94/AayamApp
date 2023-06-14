/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, SectionList, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';
import { AspireNeetDescriptionStyle } from './AspireNeetDescriptionStyle';
import Footer from '../../components/footer/Footer';
import { quantityList } from '../../const/QuantityList';
import { otherDetails } from '../../const/OtherDetailsList';
import { facultyList } from '../../const/FacultyList';

const Separator = () => <View style={styles.separator} />;
function AspireNeetDescription(prop: any): JSX.Element {
    const [selectedFaculty, setSelectedFaculty] = useState<any | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleFacultyPress = (faculty: any) => {
        setSelectedFaculty(faculty);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <SafeAreaView style={styles.commonContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View >
                    <View>
                        <Text style={AspireNeetDescriptionStyle.subHeading}>Course Details</Text>
                        <View style={AspireNeetDescriptionStyle.mainOption}>
                            {quantityList.map((item, index) => {
                                return (
                                    <View key={index} style={AspireNeetDescriptionStyle.optionContainer}>
                                        <Text>{item.quantity}</Text>
                                        <Text>{item.item}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={AspireNeetDescriptionStyle.subHeading}>Other Details</Text>
                    <SectionList
                        sections={otherDetails}
                        renderItem={({ item }) => <Text style={AspireNeetDescriptionStyle.listDataStyle}>{item}</Text>}
                        renderSectionHeader={({ section }) => (
                            <View style={AspireNeetDescriptionStyle.sectionHeaderContainer}>
                                <View style={AspireNeetDescriptionStyle.square} />
                                <Text style={AspireNeetDescriptionStyle.sectionHeaderTitle}>{section.title}</Text>
                            </View>
                        )}
                        keyExtractor={item => `basicListEntry-${item}`}
                    />
                </View>
                <Separator />
                <View>
                    <Text style={AspireNeetDescriptionStyle.subHeading}>Faculties (Click to know more)</Text>
                    <View style={AspireNeetDescriptionStyle.mainOption}>

                        {facultyList.map((faculty) => (
                            <TouchableOpacity
                                key={faculty.id}
                                style={AspireNeetDescriptionStyle.optionContainer}
                                onPress={() => handleFacultyPress(faculty)}
                            >
                                <View>
                                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                                    />
                                    <Text>{faculty.name}</Text>
                                </View></TouchableOpacity>
                        ))}
                    </View>
                    <Modal visible={isModalVisible} transparent={true} onRequestClose={closeModal}>
                        <TouchableWithoutFeedback onPress={closeModal}>
                            <View style={AspireNeetDescriptionStyle.modalBackground}>
                                <View style={AspireNeetDescriptionStyle.modalContent}>
                                    {/* Display the faculty details here */}
                                    <Text>{selectedFaculty && selectedFaculty.description}</Text>
                                    <Text>{selectedFaculty && selectedFaculty.name}</Text>
                                    <Text>{selectedFaculty && selectedFaculty.sub}</Text>
                                    <Image
                                        source={{ uri: selectedFaculty && selectedFaculty.image }}
                                        style={{ height: 200, marginBottom: 20, marginTop: 20 }}
                                    />
                                    <View>
                                        <Text>{selectedFaculty && selectedFaculty.introduction}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>
                </View>
                <View>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                        style={{ height: 200, marginBottom: 20, marginTop: 20 }} />
                </View>
                <View>
                    <Text style={AspireNeetDescriptionStyle.subHeading}>Fee Details</Text>
                    <View>
                        <TouchableOpacity onPress={() => prop.navigation.navigate('CourseSubscription')}>
                            <Text style={{ backgroundColor: color.light_blue, marginBottom: 8, color: color.white, padding: 5 }}>Monthly Subscription</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => prop.navigation.navigate('CourseSubscription')}>
                            <Text style={{ backgroundColor: color.light_blue, marginBottom: 8, color: color.white, padding: 5 }}>Yearly Subscription</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={AspireNeetDescriptionStyle.subHeading}>Other Details</Text>
                        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint minima est voluptatem itaque doloribus reprehenderit, recusandae magnam vero dicta quasi mollitia animi inventore labore non nesciunt. Obcaecati voluptate doloremque itaque.</Text>
                    </View>
                </View>
                <Footer navigation={prop.navigation} />
            </ScrollView>
        </SafeAreaView >
    );
}

export default AspireNeetDescription;