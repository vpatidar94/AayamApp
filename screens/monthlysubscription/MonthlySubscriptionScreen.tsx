import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { monthlyPurchasingList } from '../../const/MonthlyPurchasingList';

function MonthlySubscriptionScreen(prop: any): JSX.Element {
    return (
        <SafeAreaView>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {monthlyPurchasingList.map((item, index) => {
            return (
              <View key={index}>
                  <View>
                  <Text style = {{ textAlign: 'center', fontSize: 12 }}>{item.purchasingItem}</Text>
                  <Text style = {{ textAlign: 'center', fontSize: 12 }}>{item.price}</Text>
                  </View>
              </View>
            );
          })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default MonthlySubscriptionScreen;
