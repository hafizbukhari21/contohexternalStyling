/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert
} from 'react-native';

import MainStyle from './Style/MainStyle'
const App = ()=> {
  const [setText, setsetText] = useState(null)
  const [Array, setArray] = useState([])

  function setTable(params) {
    let dumpArray = [...Array] 
    dumpArray.push(setText)
    setArray(dumpArray)
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
        <View
          style={MainStyle.mainContainer}
        >
          <TextInput
            style={MainStyle.textBox}
            onChangeText={(text) => setsetText(text)}
            value= {setText}
          />
          <Button
            title="Submit"
            onPress={setTable}
          />
          <View style={MainStyle.output}>
            
            {
              Array.map((arr,idx) => 
                <Text key={idx} style={MainStyle.textOutput}>
                  
                  {arr} 
                </Text>
              )
            }
            
          </View>
        </View>   
        </ScrollView>
       
        
       
      </SafeAreaView>
    </>
  );
};

  

export default App;
