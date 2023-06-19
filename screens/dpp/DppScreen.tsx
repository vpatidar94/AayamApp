import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';

const quesCount = [
    {
        id: 1,
        count: 1,
        selected: false
    },
    {
        id: 2,
        count: 2,
        selected: false
    },
    {
        id: 3,
        count: 3,
        selected: false
    },
    {
        id: 4,
        count: 4,
        selected: false
    },
    {
        id: 5,
        count: 5,
        selected: false
    },
    {
        id: 6,
        count: 6,
        selected: false
    },
    {
        id: 7,
        count: 7,
        selected: false
    },
    {
        id: 8,
        count: 8,
        selected: false
    },
    {
        id: 9,
        count: 9,
        selected: false
    },
    {
        id: 10,
        count: 10,
        selected: false
    },
    {
        id: 11,
        count: 11,
        selected: false
    },
    {
        id: 12,
        count: 12,
        selected: false
    },
    {
        id: 13,
        count: 13,
        selected: false
    },
    {
        id: 14,
        count: 14,
        selected: false
    },
    {
        id: 15,
        count: 15,
        selected: false
    },
    {
        id: 16,
        count: 16,
        selected: false
    },
    {
        id: 17,
        count: 17,
        selected: false
    },
    {
        id: 18,
        count: 18,
        selected: false
    },
    {
        id: 19,
        count: 19,
        selected: false
    },
    {
        id: 20,
        count: 20,
        selected: false
    },

]

function DppScreen(prop: any): JSX.Element {
    const [counter, setCounter] = useState(60);
    const [paused, setPaused] = useState(false);
    const [btncolor, setBtnColor] = useState(color.primary);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [background, setBackground] = useState('green');
    const [questionCount, setQuestionCount] = useState(quesCount);

    useEffect(() => {
        if (!paused && counter > 0) {
            const timer = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, [paused, counter]);


    const handleOptionBtnPress = () => {
        setPaused(true);
        setBtnColor(color.green);
    };

    const handleNextBtnPress = () => {
        setPaused(false);
        if (questionNumber < 20) {
            setQuestionNumber(questionNumber + 1);
        }
        else {
            setQuestionNumber(20);
            Alert.alert('you reached last question', 'Dpp complete', [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'OK' },
            ]);
        }

    }


    const handleResetBtnPress = () => {
        setCounter(60);
        setPaused(false);
        setBtnColor(color.primary);
        setQuestionNumber(1);
    };
    const selectQuestion = (itemId: any) => {
        const updatedQuestionCount = questionCount.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    selected: true
                };
            } else {
                return {
                    ...item,
                    selected: false
                };
            }
        });

        setQuestionCount(updatedQuestionCount);
        setQuestionNumber(itemId)
    };


    return (
        <SafeAreaView style={styles.commonContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                {/* <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/00/62/66/08/240_F_62660864_cqDjDlNr3l3DalE8FHbeYaauvz4nOm3q.jpg'   }} style={{width:1080}} >
                      
                     </ImageBackground> */}
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", }}>
                    <View style={{ backgroundColor: color.lightsalmon, width: '20%', borderRadius: 50, alignSelf: 'center' }}>
                        <Text style={{ fontSize: 18, alignSelf: "center", fontWeight: "bold", color: color.black, }}>DPP 01</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Button
                            title="English"
                            onPress={() => prop.navigation.navigate('Home')}
                        />

                        <Button
                            title="Hindi"
                            onPress={() => prop.navigation.navigate('Home')}
                        />
                    </View>
                </View>
                <ScrollView horizontal={true}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                        {questionCount.map(item => {
                            return (
                                <TouchableOpacity key={item.id} onPress={() => selectQuestion(item.id)}>
                                    <Text style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, width: 20, height: 20, textAlign: 'center', marginEnd: 5, backgroundColor: item.selected ? 'green' : 'transparent' }}>{item.count}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>

                </ScrollView>
                <View style={{ borderWidth: 2, borderColor: 'red' }}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                        <View style={{ backgroundColor: color.primary, width: 40, height: 40, borderRadius: 40, justifyContent: "center" }}>
                        <TouchableOpacity onPress={handleNextBtnPress}><Text style={{ alignSelf: "center", fontSize: 15, fontWeight: "bold" }}>Q:{questionNumber}</Text></TouchableOpacity>
                        </View>
                    <View style={{ backgroundColor: color.grey, width: 40, height: 40, borderRadius: 40, justifyContent: "center" }}>
                    {/* <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/00/62/66/08/240_F_62660864_cqDjDlNr3l3DalE8FHbeYaauvz4nOm3q.jpg' }} style={{ width: "30%", height: '160%', }} >
                        <Text >{counter}</Text>
                    </ImageBackground> */}
                        {/* <Text >{counter}</Text> */}

                      <Text style={{ alignSelf: "center", fontSize: 15 }}>{counter}</Text> 

                    </View> 
                    </View>
                {/* <View> */}
                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={{ height: 180, marginBottom: 20, marginTop: 20 }} />
            </View>
            <View>
                <Text>Options</Text>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={handleOptionBtnPress} style={{ backgroundColor: btncolor, marginBottom: 10, width:20, height:20, borderRadius:20 }}>
                        <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", }}>A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: color.primary, marginBottom: 10,  width:20, height:20, borderRadius:20 }}>
                        <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", }}>B</Text>
                    </TouchableOpacity>

                    {/* <Button
                            title="B"
                            onPress={() => prop.navigation.navigate('Home')}
                        /> */}
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={{ backgroundColor: color.primary, marginBottom: 10,  width:20, height:20, borderRadius:20 }}>
                        <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", }}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: color.primary, marginBottom: 10,  width:20, height:20, borderRadius:20 }}>
                        <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", }}>D</Text>
                    </TouchableOpacity>
                    {/* <Button
                            title="C"
                            onPress={() => prop.navigation.navigate('Home')}
                        />
                        <Button
                            title="D"
                            onPress={() => prop.navigation.navigate('Home')}
                        /> */}
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, alignContent: 'center', }}>
                    <Button title="Next" onPress={handleNextBtnPress} />
                    <Button title="Reset" onPress={handleResetBtnPress} />
                </View>
                <View>
                    <Text>Statistics</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                    <Button title="Solutions" onPress={handleNextBtnPress} />
                    <Button title="Explanation" onPress={handleNextBtnPress} />
                </View>
                <Text>Check</Text>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                    <Button title="Correct" onPress={handleNextBtnPress} />
                    <Button title="Incorrect" onPress={handleNextBtnPress} />
                    <Button title="Unattempted" onPress={handleNextBtnPress} />
                </View>
            </View>
        </ScrollView>
        </SafeAreaView >
    );
}
export default DppScreen;
