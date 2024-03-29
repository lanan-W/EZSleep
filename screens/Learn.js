import React, {useContext} from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { auth, database } from "../utilities/firebase";
let uID;
if (auth.currentUser) {
  uID = auth.currentUser.uid;
}
import { update, ref, onValue } from "firebase/database";

import { ThemeContext } from "../utilities/ThemeContext";
import { Themes } from "../utilities/Themes";

const Stack = createStackNavigator();

let currentTheme = ref(database, uID + "/theme");
if (currentTheme) {
  onValue(currentTheme, (snapshot) => {
    currentTheme = snapshot.val();
    console.log(currentTheme);
  });
}

//Learn Page
const LearnScreen = (props) => {
  const nav = useNavigation();
  const {theme} = useContext(ThemeContext);

  const handlePress = (pageName) => {
    nav.navigate(pageName);
  };

  return (
    <View
      style={[
        styles.layout,
        Themes[theme],
      ]}
    >
      <Text
        style={[
          styles.title,
          Themes[theme],
        ]}
      >
        LEARN
      </Text>
      <TouchableOpacity
        style={[styles.articleContainer, Themes[theme],]}
        onPress={() => handlePress("circadianCycles")}
      >
        <Image
          source={require("../assets/learning.png")}
          style={styles.articleImage}
        ></Image>
        <View style={styles.articleTextContainer}>
          <Text
            style={[
              styles.articleTitle,
              Themes[theme],
            ]}
          >
            CircadianCycles
          </Text>
          <Text
            style={[
              styles.articleText,
              Themes[theme],
            ]}
          >
            gahgvnapv h fapbva grwaup upiagh iparbguia gbaruibn vpabaebababaenba
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LearnScreen;

const styles = StyleSheet.create({
  //general Layout
  layout: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000777",
  },
  //title
  title: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  //article containers
  articleContainer: {
    width: "101%",
    height: 120,
    borderColor: "black",
    borderWidth: 1,

    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  //Images
  articleImage: {
    width: 70,
    height: 70,
  },
  //texts
  articleTextContainer:{
    width: 250,
  },
  articleTitle: {
    fontWeight: "bold",
  },
  articleText: {},
});
