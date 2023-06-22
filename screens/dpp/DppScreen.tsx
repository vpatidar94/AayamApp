// import React, { useState, useEffect } from 'react';
// import { Button, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';
// import { styles } from '../../styles/style';
// import { color } from '../../styles/color';

// const quesCount = [
//     {
//         id: 1,
//         count: 1,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/01/15/71/23/1000_F_115712387_b5P3N0qexf60lmXwPpQfdJ840PznzFaQ.jpg',
//         answer: 'A',
//     },
//     {
//         id: 2,
//         count: 2,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/84/64/61/1000_F_584646126_8jl05jRh0dgBq9sh9R1ucPhcYXeqS7lO.jpg',
//         answer: 'B',
//     },
//     {
//         id: 3,
//         count: 3,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
//         answer: 'A',
//     },
//     {
//         id: 4,
//         count: 4,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
//         answer: 'C',
//     },
//     {
//         id: 5,
//         count: 5,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 6,
//         count: 6,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 7,
//         count: 7,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 8,
//         count: 8,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 9,
//         count: 9,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 10,
//         count: 10,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 11,
//         count: 11,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 12,
//         count: 12,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 13,
//         count: 13,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 14,
//         count: 14,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 15,
//         count: 15,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 16,
//         count: 16,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 17,
//         count: 17,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 18,
//         count: 18,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 19,
//         count: 19,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 20,
//         count: 20,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },

// ]
// const Separator = () => <View style={styles.separator} />;
// function DppScreen(prop: any): JSX.Element {
//     const [counter, setCounter] = useState(60);
//     const [paused, setPaused] = useState(false);
//     const [btncolor, setBtnColor] = useState(color.primary);
//     const [questionNumber, setQuestionNumber] = useState(1);
//     const [background, setBackground] = useState('green');
//     const [questionCount, setQuestionCount] = useState(quesCount);

//     useEffect(() => {
//         if (!paused && counter > 0) {
//             const timer = setInterval(() => {
//                 setCounter((prevCounter) => prevCounter - 1);
//             }, 1000);

//             return () => {
//                 clearInterval(timer);
//             };
//         }
//     }, [paused, counter]);

//     const handleOptionBtnPress = () => {
//         setPaused(true);
//         setBtnColor(color.green);
//     };

//     const handleNextBtnPress = () => {
//         setPaused(false);
//         if (questionNumber < 20) {
//             setQuestionNumber(questionNumber + 1);
//         }
//         else {
//             setQuestionNumber(20);
//             Alert.alert('you reached last question', 'Dpp complete', [
//                 {
//                     text: 'Cancel',
//                     style: 'cancel',
//                 },
//                 { text: 'OK' },
//             ]);
//         }

//     }
//     const handleResetBtnPress = () => {
//         setCounter(60);
//         setPaused(false);
//         setBtnColor(color.primary);
//         setQuestionNumber(1);
//     };
//     const selectQuestion = (itemId: any) => {
//         const updatedQuestionCount = questionCount.map(item => {
//             if (item.id === itemId) {
//                 return {
//                     ...item,
//                     selected: true
//                 };
//             } else {
//                 return {
//                     ...item,
//                     selected: false
//                 };
//             }
//         });

//         setQuestionCount(updatedQuestionCount);
//         setQuestionNumber(itemId)
//     };


//     return (
//         <SafeAreaView style={styles.commonContainer}>
//             <ScrollView contentInsetAdjustmentBehavior="automatic">
//                 {/* <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/00/62/66/08/240_F_62660864_cqDjDlNr3l3DalE8FHbeYaauvz4nOm3q.jpg'   }} style={{width:1080}} >

//                      </ImageBackground> */}
//                 <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", }}>
//                     <View style={{ backgroundColor: color.lightsalmon, width: '20%', borderRadius: 50, alignSelf: 'center' }}>
//                         <Text style={{ fontSize: 18, alignSelf: "center", fontWeight: "bold", color: color.black, }}>DPP 01</Text>
//                     </View>
//                     <View style={{ flexDirection: "row" }}>
//                         <Button
//                             title="English"
//                             onPress={() => prop.navigation.navigate('Home')}
//                         />

//                         <Button
//                             title="Hindi"
//                             onPress={() => prop.navigation.navigate('Home')}
//                         />
//                     </View>
//                 </View>
//                 <ScrollView horizontal={true}>
//                     <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
//                         {questionCount.map(item => {
//                             return (
//                                 <TouchableOpacity key={item.id} onPress={() => selectQuestion(item.id)}>
//                                     <Text style={{ borderColor: 'black', borderWidth: 1, borderRadius: 20, width: 20, height: 20, textAlign: 'center', marginEnd: 5, backgroundColor: item.selected ? 'green' : 'transparent' }}>{item.count}</Text>
//                                 </TouchableOpacity>
//                             )
//                         })}
//                     </View>
//                 </ScrollView>
//                 <Separator />
//                 <View style={{ borderWidth: 1, borderColor: 'grey' }}>
//                     <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
//                         <View style={{ backgroundColor: color.primary, width: 40, height: 40, borderRadius: 40, justifyContent: "center", opacity: 0.7 }}>
//                             <TouchableOpacity onPress={handleNextBtnPress}><Text style={{ alignSelf: "center", fontSize: 15, fontWeight: "bold", color: color.black }}>Q:{questionNumber}</Text></TouchableOpacity>
//                         </View>
//                         <View style={{ backgroundColor: color.grey, width: 40, height: 40, borderRadius: 40, justifyContent: "center" }}>
//                             {/* <ImageBackground source={{ uri: 'https://t3.ftcdn.net/jpg/00/62/66/08/240_F_62660864_cqDjDlNr3l3DalE8FHbeYaauvz4nOm3q.jpg' }} style={{ width: "30%", height: '160%', }} >
//                         <Text >{counter}</Text>
//                     </ImageBackground> */}
//                             {/* <Text >{counter}</Text> */}

//                             <Text style={{ alignSelf: "center", fontSize: 15, color: color.black }}>{counter}</Text>

//                         </View>
//                     </View>
//                     {/* <View> */}
//                     <Image source={{ uri: 'https://img.freepik.com/free-vector/scientific-formulas-chalkboard_23-2148494010.jpg?w=996&t=st=1687329293~exp=1687329893~hmac=46bc0081bcb8e3220debe3c88f3af3f5fda87b3a0e3736e22d92fe9150bbd140' }}
//                         style={{ height: 180, marginBottom: 10, marginTop: 20 }} />
//                 </View>
//                 <View>
//                     <Text style={{ marginVertical: 10, fontSize: 14, fontWeight: 'bold' }}>Options</Text>
//                     <View style={{ flex: 1 }}>
//                         <TouchableOpacity onPress={handleOptionBtnPress} style={{ backgroundColor: btncolor, marginBottom: 10, width: 20, height: 20, borderRadius: 20 }}>
//                             <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", }}>A</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{ backgroundColor: color.primary, marginBottom: 10, width: 20, height: 20, borderRadius: 20 }}>
//                             <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", }}>B</Text>
//                         </TouchableOpacity>

//                         {/* <Button
//                             title="B"
//                             onPress={() => prop.navigation.navigate('Home')}
//                         /> */}
//                     </View>
//                     <View style={{ flex: 1 }}>
//                         <TouchableOpacity style={{ backgroundColor: color.primary, marginBottom: 10, width: 20, height: 20, borderRadius: 20 }}>
//                             <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", }}>C</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={{ backgroundColor: color.primary, marginBottom: 10, width: 20, height: 20, borderRadius: 20 }}>
//                             <Text style={{ textAlign: "center", fontSize: 14, fontWeight: "bold", }}>D</Text>
//                         </TouchableOpacity>
//                         {/* <Button
//                             title="C"
//                             onPress={() => prop.navigation.navigate('Home')}
//                         />
//                         <Button
//                             title="D"
//                             onPress={() => prop.navigation.navigate('Home')}
//                         /> */}
//                     </View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', }}>
//                         <TouchableOpacity onPress={handleNextBtnPress} style={{ justifyContent: 'center' }}>
//                             <Text style={{ backgroundColor: '#038EFC', color: color.white, height: 25, width: '180%', textAlign: 'center', fontWeight: '700' }}>NEXT</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity onPress={handleResetBtnPress}>
//                             <Text style={{ backgroundColor: '#00bfff' }}>Reset</Text>
//                         </TouchableOpacity>
//                         {/* <Button title="Next" onPress={handleNextBtnPress} />
//                         <Button title="Reset" onPress={handleResetBtnPress} /> */}
//                     </View>
//                     <Separator />
//                     <View>
//                         <Text style={{ marginVertical: 5, fontSize: 14, fontWeight: 'bold' }}>Statistics</Text>
//                     </View>
//                     <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
//                         <Button title="Solutions" onPress={handleNextBtnPress} />
//                         <Button title="Explanation" onPress={handleNextBtnPress} />
//                     </View>
//                     <Separator />
//                     <Text style={{ marginVertical: 5, fontSize: 14, fontWeight: 'bold' }}>Check</Text>
//                     <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
//                         <Button title="Correct" onPress={handleNextBtnPress} />
//                         <Button title="Incorrect" onPress={handleNextBtnPress} />
//                         <Button title="Unattempted" onPress={handleNextBtnPress} />
//                     </View>
//                     <Separator />
//                 </View>
//             </ScrollView>
//         </SafeAreaView >
//     );
// }
// export default DppScreen;

// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';

// const QuesCount = [
//     {
//         id: 1,
//         count: 1,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/01/15/71/23/1000_F_115712387_b5P3N0qexf60lmXwPpQfdJ840PznzFaQ.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 2,
//         count: 2,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/84/64/61/1000_F_584646126_8jl05jRh0dgBq9sh9R1ucPhcYXeqS7lO.jpg',
//         answer: 'B',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 3,
//         count: 3,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 4,
//         count: 4,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
//         answer: 'C',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 5,
//         count: 5,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 6,
//         count: 6,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 7,
//         count: 7,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 8,
//         count: 8,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 9,
//         count: 9,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 10,
//         count: 10,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 11,
//         count: 11,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 12,
//         count: 12,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 13,
//         count: 13,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 14,
//         count: 14,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 15,
//         count: 15,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 16,
//         count: 16,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 17,
//         count: 17,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 18,
//         count: 18,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 19,
//         count: 19,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
//     {
//         id: 20,
//         count: 20,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         options: [
//             { value: 'A', selected: false, isCorrect: false },
//             { value: 'B', selected: false, isCorrect: false },
//             { value: 'C', selected: false, isCorrect: false },
//             { value: 'D', selected: false, isCorrect: false }
//           ],
//     },
// ]

// const Dpp = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//   };

//   const handleOptionSelection = (selectedAnswer: string, selectedOptionIndex: number) => {
//     const currentQuestion = QuesCount[currentQuestionIndex];

//     // Check if the selected answer is correct
//     const isAnswerCorrect = selectedAnswer === currentQuestion.answer;

//     // Update the selected status of the question
//     currentQuestion.selected = true;

//     // Update the quesCount array
//     QuesCount[currentQuestionIndex] = currentQuestion;

//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

//     // Highlight the selected option and the correct option
//     const updatedOptions = QuesCount[currentQuestionIndex - 1].options.map(
//       (option, index) => {
//         if (index === selectedOptionIndex) {
//           return {
//             ...option,
//             selected: true,
//             isCorrect: isAnswerCorrect,
//           };
//         } else if (option.value === currentQuestion.answer) {
//           return {
//             ...option,
//             isCorrect: true,
//           };
//         } else {
//           return option;
//         }
//       }
//     );

//     QuesCount[currentQuestionIndex - 1].options = updatedOptions;
//   };

//   const currentQuestion = QuesCount[currentQuestionIndex];

//   return (
//     <View>
//       <Text>Question {currentQuestion.count}</Text>
//       <Image source={{ uri: currentQuestion.image }} />

//       {currentQuestion.options.map((option, index) => (
//         <TouchableOpacity
//           key={index}
//           onPress={() => handleOptionSelection(option.value, index)}
//           style={{
//             backgroundColor: option.selected
//               ? option.isCorrect
//                 ? 'green'
//                 : 'red'
//               : 'transparent',
//           }}
//         >
//           <Text>{option.value}</Text>
//         </TouchableOpacity>
//       ))}

//       <TouchableOpacity onPress={handleNextQuestion}>
//         <Text>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Dpp;



import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, Alert } from 'react-native';


const quesCount = [
    {
        id: 1,
        count: 1,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/01/15/71/23/1000_F_115712387_b5P3N0qexf60lmXwPpQfdJ840PznzFaQ.jpg',
        answer: 'A',
    },
    {
        id: 2,
        count: 2,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/05/84/64/61/1000_F_584646126_8jl05jRh0dgBq9sh9R1ucPhcYXeqS7lO.jpg',
        answer: 'B',
    },
    {
        id: 3,
        count: 3,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
        answer: 'A',
    },
    {
        id: 4,
        count: 4,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
        answer: 'C',
    },
    {
        id: 5,
        count: 5,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'D',
    },
    {
        id: 6,
        count: 6,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'B',
    },
    {
        id: 7,
        count: 7,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'A',
    },
    {
        id: 8,
        count: 8,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'C',
    },
    {
        id: 9,
        count: 9,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'D',
    },
    {
        id: 10,
        count: 10,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'A',
    },
    {
        id: 11,
        count: 11,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'A',
    },
    {
        id: 12,
        count: 12,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'A',
    },
    {
        id: 13,
        count: 13,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'A',
    },
    {
        id: 14,
        count: 14,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'A',
    },
    {
        id: 15,
        count: 15,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'A',
    },
    {
        id: 16,
        count: 16,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'A',
    },
    {
        id: 17,
        count: 17,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'A',
    },
    {
        id: 18,
        count: 18,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'A',
    },
    {
        id: 19,
        count: 19,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'D',
    },
    {
        id: 20,
        count: 20,
        selected: false,
        image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
        answer: 'C',
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
        setQuestionCount(quesCount.map((item) => ({ ...item, selected: false })));
    };

    const selectQuestion = (itemId: any) => {
        setQuestionNumber(itemId);
    };

    const currentQuestion = questionCount.find((item) => item.count === questionNumber);

    const isAnswerSelected = currentQuestion?.selected !== true;

    const getOptionButtonStyle = (option: any) => {
        if (!currentQuestion?.selected) {
            return { backgroundColor: 'gray', width: 20, height: 20, borderRadius: 20, };
        }

        if (currentQuestion?.selected === option) {
            if (String(currentQuestion?.selected) === currentQuestion?.answer) {
                return { backgroundColor: 'green', width: 20, height: 20, borderRadius: 20 };
            } else {
                return { backgroundColor: 'red', width: 20, height: 20, borderRadius: 20 };
            }
        }

        if (option === currentQuestion?.answer) {
            return { backgroundColor: 'green', width: 20, height: 20, borderRadius: 20 };
        }

        return { backgroundColor: 'gray', width: 20, height: 20, borderRadius: 20 };
    };


    return (
        <SafeAreaView>
            <ScrollView>
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
                                    style={{ backgroundColor: questionNumber === item.count ? 'gray' : 'lightgray', padding: 10, margin: 5 }}
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
                    <Image
                        source={{ uri: currentQuestion?.image }}
                        style={{ width: '90%', height: 200, alignSelf: 'center' }}
                    />
                    <Separator />
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', marginVertical: 10 }}>
                        {/* <Button
              title="A"
              onPress={() => handleOptionBtnPress('A')}
              style={getOptionButtonStyle('A')}
            /> */}
                        <TouchableOpacity onPress={() => handleOptionBtnPress('A')} style={getOptionButtonStyle('A')} disabled={!isAnswerSelected}>
                            <Text style={{ textAlign: 'center' }}>A</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleOptionBtnPress('B')} style={getOptionButtonStyle('B')} disabled={!isAnswerSelected}>
                            <Text style={{ textAlign: 'center' }}>B</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionBtnPress('C')} style={getOptionButtonStyle('C')} disabled={!isAnswerSelected}>
                            <Text style={{ textAlign: 'center' }}>C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleOptionBtnPress('D')} style={getOptionButtonStyle('D')} disabled={!isAnswerSelected}>
                            <Text style={{ textAlign: 'center' }}>D</Text>
                        </TouchableOpacity>
                        {/* <Button
              title="B"
              onPress={() => handleOptionBtnPress('B')}
              style={getOptionButtonStyle('B')}
            />
            <Button
              title="C"
              onPress={() => handleOptionBtnPress('C')}
              style={getOptionButtonStyle('C')}
            />
            <Button
              title="D"
              onPress={() => handleOptionBtnPress('D')}
              style={getOptionButtonStyle('D')}
            /> */}
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
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default DppScreen;




// import React, { useState, useEffect } from 'react';
// import { SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

// const quesCount = [
//     {
//         id: 1,
//         count: 1,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/01/15/71/23/1000_F_115712387_b5P3N0qexf60lmXwPpQfdJ840PznzFaQ.jpg',
//         answer: 'A',
//     },
//     {
//         id: 2,
//         count: 2,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/84/64/61/1000_F_584646126_8jl05jRh0dgBq9sh9R1ucPhcYXeqS7lO.jpg',
//         answer: 'B',
//     },
//     {
//         id: 3,
//         count: 3,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
//         answer: 'A',
//     },
//     {
//         id: 4,
//         count: 4,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
//         answer: 'C',
//     },
//     {
//         id: 5,
//         count: 5,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 6,
//         count: 6,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 7,
//         count: 7,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 8,
//         count: 8,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 9,
//         count: 9,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 10,
//         count: 10,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 11,
//         count: 11,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 12,
//         count: 12,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 13,
//         count: 13,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 14,
//         count: 14,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 15,
//         count: 15,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 16,
//         count: 16,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 17,
//         count: 17,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 18,
//         count: 18,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 19,
//         count: 19,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
//     {
//         id: 20,
//         count: 20,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//     },
// ];

// const Separator = () => <View style={{ marginVertical: 8, borderBottomColor: 'black', borderBottomWidth: 1 }} />;

// function DppScreen(props: any) {
//   const [counter, setCounter] = useState(60);
//   const [paused, setPaused] = useState(false);
//   const [questionNumber, setQuestionNumber] = useState(1);
//   const [questionCount, setQuestionCount] = useState(quesCount);

//   useEffect(() => {
//     if (!paused && counter > 0) {
//       const timer = setInterval(() => {
//         setCounter((prevCounter) => prevCounter - 1);
//       }, 1000);

//       return () => {
//         clearInterval(timer);
//       };
//     }
//   }, [paused, counter]);

//   const handleOptionBtnPress = (selectedAnswer: any) => {
//     setPaused(true);

//     const currentQuestionIndex = questionCount.findIndex((item) => item.count === questionNumber);
//     if (currentQuestionIndex === -1) return;

//     const updatedQuestionCount = [...questionCount];
//     const currentQuestion = updatedQuestionCount[currentQuestionIndex];

//     currentQuestion.selected = selectedAnswer;

//     setQuestionCount(updatedQuestionCount);
//   };

//   const handleNextBtnPress = () => {
//     setPaused(false);
//     if (questionNumber < 20) {
//       setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
//     } else {
//       setQuestionNumber(20);
//       Alert.alert('You reached the last question', 'DPP complete', [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         { text: 'OK' },
//       ]);
//     }
//   };

//   const handleResetBtnPress = () => {
//     setCounter(60);
//     setPaused(false);
//     setQuestionNumber(1);
//     setQuestionCount(quesCount.map((item) => ({ ...item, selected: false })));
//   };

//   const selectQuestion = (itemId: any) => {
//     setQuestionNumber(itemId);
//   };

//   const currentQuestion = questionCount.find((item) => item.count === questionNumber);

//   const isAnswerSelected = currentQuestion?.selected !== true;

//   const getOptionButtonStyle = (option: any) => {
//     if (!isAnswerSelected) {
//       return { backgroundColor: 'gray' };
//     }

//     if (currentQuestion?.selected === option) {
//       if (currentQuestion?.selected === currentQuestion?.answer) {
//         return { backgroundColor: 'green' };
//       } else {
//         return { backgroundColor: 'red' };
//       }
//     }

//     if (option === currentQuestion?.answer) {
//       return { backgroundColor: 'green' };
//     }

//     return { backgroundColor: 'gray' };
//   };

//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
//             <TouchableOpacity onPress={() => setPaused(!paused)} style={{ padding: 10 }}>
//               <Text>{paused ? 'Resume' : 'Pause'}</Text>
//             </TouchableOpacity>
//             <Text style={{ fontSize: 20 }}>{counter} seconds</Text>
//           </View>
//           <Separator />
//           <ScrollView horizontal>
//             <View style={{ flexDirection: 'row' }}>
//               {questionCount.map((item) => (
//                 <TouchableOpacity
//                   key={item.count}
//                   style={{
//                     padding: 10,
//                     backgroundColor: item.count === questionNumber ? 'gray' : 'lightgray',
//                   }}
//                   onPress={() => selectQuestion(item.count)}
//                 >
//                   <Text style={{ color: 'white' }}>{item.count}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </ScrollView>
//           <Separator />
//           <View style={{ alignItems: 'center' }}>
//             <Text style={{ fontSize: 20 }}>Question {currentQuestion?.count}</Text>
//             <Image
//               style={{ width: 200, height: 200, marginVertical: 10 }}
//               source={{ uri: currentQuestion?.image }}
//             />
//             <Text style={{ marginVertical: 10 }}>{currentQuestion?.question}</Text>
//             {currentQuestion?.options.map((option: any, index: number) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[{ padding: 10, marginVertical: 5, width: 200 }, getOptionButtonStyle(option)]}
//                 onPress={() => handleOptionBtnPress(option)}
//                 disabled={!isAnswerSelected}
//               >
//                 <Text style={{ color: 'white' }}>{option}</Text>
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity
//               style={{ padding: 10, marginVertical: 5, width: 200, backgroundColor: 'lightgray' }}
//               onPress={handleNextBtnPress}
//             >
//               <Text>Next</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{ padding: 10, marginVertical: 5, width: 200, backgroundColor: 'lightgray' }}
//               onPress={handleResetBtnPress}
//             >
//               <Text>Reset</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default DppScreen;










































// import React, { useState, useEffect } from 'react';
// import { Button, SafeAreaView, ScrollView, Text, View, Image, TouchableOpacity, Alert } from 'react-native';


//   const quesCount = [
//     {
//         id: 1,
//         count: 1,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/01/15/71/23/1000_F_115712387_b5P3N0qexf60lmXwPpQfdJ840PznzFaQ.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 2,
//         count: 2,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/84/64/61/1000_F_584646126_8jl05jRh0dgBq9sh9R1ucPhcYXeqS7lO.jpg',
//         answer: 'B',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 3,
//         count: 3,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 4,
//         count: 4,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/05/60/87/65/1000_F_560876579_ZpWXRdlkXWDSwTazOdDtK9dmlPobreUz.jpg',
//         answer: 'C',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 5,
//         count: 5,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 6,
//         count: 6,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 7,
//         count: 7,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 8,
//         count: 8,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 9,
//         count: 9,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 10,
//         count: 10,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 11,
//         count: 11,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 12,
//         count: 12,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 13,
//         count: 13,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 14,
//         count: 14,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 15,
//         count: 15,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 16,
//         count: 16,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 17,
//         count: 17,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 18,
//         count: 18,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 19,
//         count: 19,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
//     {
//         id: 20,
//         count: 20,
//         selected: false,
//         image: 'https://as2.ftcdn.net/v2/jpg/06/03/97/41/1000_F_603974174_PddFwcsoHcbNB1SXU1O2Izqo65JIBvim.jpg',
//         answer: 'A',
//         question: 'What is the capital of France?',
//     options: [
//       { id: 'A', text: 'Paris', isCorrect: true },
//       { id: 'B', text: 'London', isCorrect: false },
//       { id: 'C', text: 'Madrid', isCorrect: false },
//       { id: 'D', text: 'Rome', isCorrect: false },
//     ],
//     },
// ];

// const Separator = () => <View style={{ marginVertical: 8, borderBottomColor: 'black', borderBottomWidth: 1 }} />;

// function DppScreen(props: any) {
//   const [counter, setCounter] = useState(60);
//   const [paused, setPaused] = useState(false);
//   const [questionNumber, setQuestionNumber] = useState(1);
//   const [questionCount, setQuestionCount] = useState(quesCount);

//   useEffect(() => {
//     if (!paused && counter > 0) {
//       const timer = setInterval(() => {
//         setCounter((prevCounter) => prevCounter - 1);
//       }, 1000);

//       return () => {
//         clearInterval(timer);
//       };
//     }
//   }, [paused, counter]);

//   const handleOptionBtnPress = (selectedAnswer:any) => {
//     setPaused(true);

//     const currentQuestionIndex = questionCount.findIndex((item) => item.count === questionNumber);
//     if (currentQuestionIndex === -1) return;

//     const updatedQuestionCount = [...questionCount];
//     const currentQuestion = updatedQuestionCount[currentQuestionIndex];

//     currentQuestion.selected = selectedAnswer;

//     setQuestionCount(updatedQuestionCount);
//   };

//   const handleNextBtnPress = () => {
//     setPaused(false);
//     if (questionNumber < 20) {
//       setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
//     } else {
//       setQuestionNumber(20);
//       Alert.alert('You reached the last question', 'DPP complete', [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         { text: 'OK' },
//       ]);
//     }
//   };

//   const handleResetBtnPress = () => {
//     setCounter(60);
//     setPaused(false);
//     setQuestionNumber(1);
//     setQuestionCount(quesCount.map((item) => ({ ...item, selected: false })));
//   };

//   const selectQuestion = (itemId:any) => {
//     setQuestionNumber(itemId);
//   };

//   const currentQuestion = questionCount.find((item) => item.count === questionNumber);

//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <View>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//             <View style={{ backgroundColor: 'lightgreen', width: '20%', borderRadius: 50, alignSelf: 'center' }}>
//               <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: 'bold', color: 'black' }}>DPP 01</Text>
//             </View>
//             <View style={{ flexDirection: 'row' }}>
//               <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{ marginRight: 10 }}>
//                 <Text>English</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
//                 <Text>Hindi</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <ScrollView horizontal>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
//               {questionCount.map((item) => (
//                 <TouchableOpacity
//                   key={item.id}
//                   onPress={() => selectQuestion(item.count)}
//                   style={[
//                     {
//                       width: 35,
//                       height: 35,
//                       backgroundColor: item.selected ? 'orange' : 'gray',
//                       borderRadius: 50,
//                       margin: 10,
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                     },
//                     item.count === questionNumber ? { backgroundColor: 'red' } : null,
//                   ]}
//                 >
//                   <Text style={{ color: 'white', fontSize: 16 }}>{item.count}</Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </ScrollView>
//           <View>
//             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{currentQuestion?.question}</Text>
//           </View>
//           <View>
//             {currentQuestion?.options.map((option:any) => (
//               <TouchableOpacity
//                 key={option.id}
//                 onPress={() => handleOptionBtnPress(option.id)}
//                 style={[
//                   { backgroundColor: 'gray', padding: 10, borderRadius: 10, marginVertical: 5 },
//                   currentQuestion.selected === option.id ? { backgroundColor: 'green' } : null,
//                   currentQuestion.selected !== option.id && option.isCorrect ? { backgroundColor: 'red' } : null,
//                 ]}
//               >
//                 <Text style={{ color: 'white' }}>{option.text}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//           <Separator />
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
//             <View style={{ flexDirection: 'row' }}>
//               <Text style={{ fontWeight: 'bold' }}>Question {questionNumber} of 20</Text>
//               <Text style={{ marginLeft: 5, alignSelf: 'center' }}>{counter}s</Text>
//             </View>
//             <View style={{ flexDirection: 'row' }}>
//               <Button title="Reset" onPress={handleResetBtnPress} />
//               <Button title="Next" onPress={handleNextBtnPress} />
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// export default DppScreen;


