import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../../styles/style';
const quesCount = [
    {
        id: 1,
        count: 1,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/01/15/71/23/1000_F_115712387_b5P3N0qexf60lmXwPpQfdJ840PznzFaQ.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: true,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 2,
        count: 2,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/05/84/64/61/1000_F_584646126_8jl05jRh0dgBq9sh9R1ucPhcYXeqS7lO.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'B',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 3,
        count: 3,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 4,
        count: 4,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'C',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 5,
        count: 5,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'D',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 6,
        count: 6,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'B',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 7,
        count: 7,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 8,
        count: 8,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'C',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 9,
        count: 9,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'D',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 10,
        count: 10,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 11,
        count: 11,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 12,
        count: 12,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 13,
        count: 13,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 14,
        count: 14,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 15,
        count: 15,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 16,
        count: 16,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 17,
        count: 17,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 18,
        count: 18,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'A',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 19,
        count: 19,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'D',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
    {
        id: 20,
        count: 20,
        selected: false,
        // image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        image: require('../../assets/questions/question1.jpg'),
        answer: 'C',
        visited: false,
        optionA: require('../../assets/questions/optionA.jpg'),
        optionB: require('../../assets/questions/optionA.jpg'),
        optionC: require('../../assets/questions/optionA.jpg'),
        optionD: require('../../assets/questions/optionA.jpg'),
    },
];

const Separator = () => <View style={{ marginVertical: 8, borderBottomColor: 'black', borderBottomWidth: 1 }} />;

function DppScreen(props: any) {
    const [counter, setCounter] = useState(60);
    const [paused, setPaused] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
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

    const handleOptionBtnPress = (selectedAnswer: any) => {
        setPaused(true);

        const currentQuestionIndex = questionCount.findIndex((item) => item.count === questionNumber);
        if (currentQuestionIndex === -1) return;

        const updatedQuestionCount = [...questionCount];
        const currentQuestion = updatedQuestionCount[currentQuestionIndex];

        currentQuestion.selected = selectedAnswer;

        setQuestionCount(updatedQuestionCount);
    };

    const handleNextBtnPress = () => {
        setPaused(false);


        if (questionNumber < 20) {
            setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
        } else {
            setQuestionNumber(20);
            Alert.alert('You reached the last question', 'DPP complete', [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'OK' },
            ]);
        }

    };

    const handleResetBtnPress = () => {
        setCounter(60);
        setPaused(false);
        setQuestionNumber(1);
        setQuestionCount(quesCount.map((item) => ({ ...item, selected: false, })));
    };

    const selectQuestion = (itemId: any) => {
        setQuestionNumber(itemId);

    };

    // This is to add feature of changing the color of question when user visited the question but not selected the option
    // const selectQuestion = (count) => {
    //     setQuestionNumber(count);
    //     // Find the selected question object based on the count
    //     const updatedQuestionCount = questionCount.map((item) => {
    //       if (item.count === count) {
    //         // Update the visited state to false
    //         return { ...item, visited: true };
    //       }
    //       return item;
    //     });

    //     // Update the questionCount state with the updatedQuestionCount
    //     setQuestionCount(updatedQuestionCount);
    //   };

    const currentQuestion = questionCount.find((item) => item.count === questionNumber);

    const isAnswerSelected = currentQuestion?.selected !== true;

    const getOptionButtonStyle = (option: any) => {
        if (!currentQuestion?.selected) {
            return { backgroundColor: 'gray', width: 30, height: 30, borderRadius: 30,};
        }

        if (currentQuestion?.selected === option) {
            if (String(currentQuestion?.selected) === currentQuestion?.answer) {
                return { backgroundColor: 'green', width: 30, height: 30, borderRadius: 30,};
            } else {
                return { backgroundColor: 'red', width: 30, height: 30, borderRadius: 30,};
            }
        }

        if (option === currentQuestion?.answer) {
            return { backgroundColor: 'green', width: 30, height: 30, borderRadius: 30,};
        }

        return { backgroundColor: 'gray', width: 30, height: 30, borderRadius: 30,};
    };


    return (
        <SafeAreaView style={styles.commonContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                        <Button title={paused ? 'Resume' : 'Pause'} onPress={() => setPaused(!paused)} />
                        <Text style={{ fontSize: 20 }}>{counter} seconds</Text>
                    </View>
                    <Separator />
                    <ScrollView horizontal>
                        <View style={{ flexDirection: 'row' }}>
                            {questionCount.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    onPress={() => selectQuestion(item.count)}
                                    style={{
                                        backgroundColor: item.selected
                                            ? String(item.selected) === item.answer
                                                ? 'green'
                                                : 'red'
                                            : item.visited
                                                ? 'gray'
                                                : 'lightgray',
                                        padding: 10,
                                        margin: 5,
                                    }}
                                >
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>{item.count}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                    <Separator />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                        <Text style={{ fontSize: 20 }}>{counter}</Text>
                        <Text style={{ fontSize: 20 }}>{currentQuestion?.count}/20</Text>
                    </View>
                    <Separator />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>
                        Question {currentQuestion?.count}
                    </Text>
                    {/* <View style={{width:'100%',height:'10%'}}> */}
                    <Image
                        source={currentQuestion?.image }
                        style={{  width:'100%', height: 90, alignSelf: 'center', }}
                    />
                    {/* </View> */}
                    <Separator />
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginVertical: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <TouchableOpacity onPress={() => handleOptionBtnPress('A')} style={getOptionButtonStyle('A')} disabled={!isAnswerSelected}>
                                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700' }}>A</Text>
                            </TouchableOpacity>
                            
                            <Image source={currentQuestion?.optionA} style={{ width: '70%', height: '90%', backgroundColor: 'red',}} />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <TouchableOpacity onPress={() => handleOptionBtnPress('B')} style={getOptionButtonStyle('B')} disabled={!isAnswerSelected}>
                                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700' }}>B</Text>
                            </TouchableOpacity>
                            <Image source={currentQuestion?.optionB} style={{ width: '70%', height: '90%', backgroundColor: 'red' }} />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <TouchableOpacity onPress={() => handleOptionBtnPress('C')} style={getOptionButtonStyle('C')} disabled={!isAnswerSelected}>
                                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700' }}>C</Text>
                            </TouchableOpacity>
                            <Image source={currentQuestion?.optionC} style={{ width: '70%', height: '90%', backgroundColor: 'red' }} />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <TouchableOpacity onPress={() => handleOptionBtnPress('D')} style={getOptionButtonStyle('D')} disabled={!isAnswerSelected}>
                                <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700' }}>D</Text>
                            </TouchableOpacity>
                            <Image source={currentQuestion?.optionD} style={{ width: '70%', height: '90%', backgroundColor: 'red' }} />
                        </View>

                    </View>
                    <Separator />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>
                        Selected Answer: {currentQuestion?.selected}
                    </Text>
                    <Separator />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                        <Button
                            title="Prev"
                            onPress={() => setQuestionNumber((prevQuestionNumber) => prevQuestionNumber - 1)}
                            disabled={questionNumber === 1}
                        />
                        <Button title="Next" onPress={handleNextBtnPress} />
                    </View>
                    <Separator />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 10 }}>
                        <Button title="Reset" onPress={handleResetBtnPress} disabled={!isAnswerSelected} />
                    </View>

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                        <Button title="Solutions" onPress={handleNextBtnPress} />
                        <Button title="Explanation" onPress={handleNextBtnPress} />
                    </View>
                    <Separator />
                    <Text style={{ marginVertical: 5, fontSize: 14, fontWeight: 'bold' }}>Check</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                        <Button title="Correct" onPress={handleNextBtnPress} />
                        <Button title="Incorrect" onPress={handleNextBtnPress} />
                        <Button title="Unattempted" onPress={handleNextBtnPress} />
                    </View>
                    <Separator />

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default DppScreen;







