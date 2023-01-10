import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Switch from './Switch';

//Setting Page
const backImg = require('./assets/back-arrow.png');
//Dark/Light Mode
// const colorScheme = useColorScheme();

const SettingScreen = () => {
    //Dark/Light Mode
    // const themeTextStyle = colorScheme === Switch ? styles.lightThemeText : styles.darkThemeText;
    // const themeContainerStyle = colorScheme === Switch ? styles.lightContainer : styles.darkContainer;
    //for switching screens
    const nav = useNavigation();

    return (
    <View style={styles.layout}>
      <Text style={styles.title}>Setting</Text>
      {/* Nav to Index Page */}
      <Pressable 
        onPress={()=>nav.navigate('Index')}
        style={styles.backButton}
      >
        <Image
          style={styles.backImage}
          source={backImg}
        ></Image>
      </Pressable>
    </View>
    )
  };
  
  export default SettingScreen;

  //Stylesheet
const styles = StyleSheet.create({
  //general Layout
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#654CE0",
  },
  //Testing purpose
  title: { 
    fontSize: 32,
    marginBottom: 16,
  },
  //Back Button
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#654CE0",
    position: 'absolute',
    top: 70,
    left: 20,
  },
  //Images
  backImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});