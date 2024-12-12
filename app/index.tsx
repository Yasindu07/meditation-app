import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hi Yasindu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
