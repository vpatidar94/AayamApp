import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { styles } from '../../styles/style';
import { color } from '../../styles/color';

function DppScreen(prop: any): JSX.Element {
    const [counter, setCounter] = useState(60);
    const [paused, setPaused] = useState(false);
    const [btncolor, setBtnColor] = useState(color.primary);
    const [questionNumber, setQuestionNumber] = useState(1);

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
        if(questionNumber<20){
        setQuestionNumber(questionNumber+1);
        }
        else{
        setQuestionNumber(20);
        Alert.alert('you reached last question', 'Dpp complete', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {text: 'OK'},
          ]);
        }
        
        }
    

    const handleResetBtnPress = () => {
        setCounter(60);
        setPaused(false);
        setBtnColor(color.primary);
        setQuestionNumber(1);
    };

    return (
        <SafeAreaView style={styles.commonContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ backgroundColor: color.lightsalmon, width: 120, }}>
                        <Text style={{ fontSize: 18, alignSelf: "center", fontWeight: "bold", color: color.black }}>DPP 01</Text>
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
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                    <View style={{ backgroundColor: color.secondary, width: 60, height: 60, borderRadius: 60, justifyContent: "center" }}>
                        <TouchableOpacity onPress={handleNextBtnPress}><Text style={{ alignSelf: "center", fontSize: 25, fontWeight: "bold" }}>Q:{questionNumber}</Text></TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: color.green, width: 40, height: 40, borderRadius: 40, justifyContent: "center" }}>
                    {/* <ImageBackground source={{ uri: 'https://img.freepik.com/premium-photo/round-smart-watch-front-side-isolated-white-background_187299-16121.jpg?w=996' }} style={{width:80, height:120}}>
                    <Text >{counter}</Text>
                    </ImageBackground> */}
                        <Text style={{ alignSelf: "center", fontSize: 25 }}>{counter}</Text>

                    </View>
                </View>
                <View>
                    <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                        style={{ height: 180, marginBottom: 20, marginTop: 20 }} />
                </View>
                <View>
                    <Text>Options</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around', marginBottom: 20 }}>
                        <TouchableOpacity onPress={handleOptionBtnPress} style={{ backgroundColor: btncolor,width:60 }}>
                            <Text style={{textAlign:"center", fontSize:24, fontWeight:"bold",}}>A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{ backgroundColor: color.primary,width:60 }}>
                            <Text style={{textAlign:"center", fontSize:24, fontWeight:"bold",}}>B</Text>
                        </TouchableOpacity>
                        
                        {/* <Button
                            title="B"
                            onPress={() => prop.navigation.navigate('Home')}
                        /> */}
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around' }}>
                    <TouchableOpacity  style={{ backgroundColor: color.primary, width:60 }}>
                            <Text style={{textAlign:"center", fontSize:24, fontWeight:"bold",}}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ backgroundColor: color.primary, width:60 }}>
                            <Text style={{textAlign:"center", fontSize:24, fontWeight:"bold",}}>D</Text>
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
                    <Button title="Next" onPress={handleNextBtnPress} />
                    <Button title="Reset" onPress={handleResetBtnPress} />
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
        </SafeAreaView>
    );
}
export default DppScreen;
