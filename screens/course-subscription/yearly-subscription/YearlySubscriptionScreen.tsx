/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {yearlyPurchasingList} from '../../../const/YearlyPurchasingList';
import {styles} from '../../../styles/style';
import {color} from '../../../styles/color';
import Footer from '../../../components/footer/Footer';

const Separator = () => <View style={styles.separator} />;
function YearlySubscriptionScreen(prop: any): JSX.Element {
  const [checkedItems, setCheckedItems] = useState(
    Array(yearlyPurchasingList.length).fill(true),
  );

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !checkedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    yearlyPurchasingList.forEach((item, index) => {
      if (checkedItems[index]) {
        totalPrice += parseInt(item.price);
      }
    });
    return totalPrice;
  };

  return (
    <SafeAreaView style={styles.commonContainer}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{flex: 1}}>
          <Text
            style={[
              styles.sectionTitle,
              {color: color.secondary},
              {marginTop: 8},
              {marginBottom: 8},
            ]}>
            Purchase Yearly Subscription
          </Text>
          {yearlyPurchasingList.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity onPress={() => handleCheckboxChange(index)}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        marginRight: 8,
                        borderWidth: 1,
                        borderColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {checkedItems[index] && (
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: color.green,
                          }}>
                          &#10003;
                        </Text>
                      )}
                    </View>
                    <View style={{width: '40%'}}>
                      <Text
                        style={{
                          textAlign: 'justify',
                          fontSize: 14,
                          marginRight: 18,
                        }}>
                        {item.purchasingItem}
                      </Text>
                    </View>
                    <View>
                      <Text style={{textAlign: 'center', fontSize: 14}}>
                        {item.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 16,
              backgroundColor: color.primary,
              height: 30,
              padding: 5,
            }}>
            Total Price: {calculateTotalPrice()}
          </Text>
          <Separator />
          <Button
            title="Proceed to Pay"
            onPress={() => prop.navigation.navigate('test')}
          />
          <Separator />
        </View>
        <View>
          <Image
            source={{uri: 'https://as1.ftcdn.net/v2/jpg/06/04/44/50/1000_F_604445038_LkhBAATvrKzCJtwkVsr3m0y0maiAv0wF.jpg'}}
            style={{height: 200, marginBottom: 20, marginTop: 20}}
          />
        </View>
        <View>
          <Image
            source={{uri: 'https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=1060&t=st=1687246376~exp=1687246976~hmac=11740afa50c4b6b993bd940db9841d062d62f2791c38bd5072f6d082dafa5615'}}
            style={{height: 200, marginBottom: 20, marginTop: 20}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default YearlySubscriptionScreen;
