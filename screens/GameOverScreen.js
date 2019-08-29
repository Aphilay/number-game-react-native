import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import gameText from "../constants/gameText";
const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>{gameText.summary.gameover}</Text>
      <Text>
        {gameText.summary.rounds} {props.roundsNumber}
      </Text>
      <Text>
        {gameText.summary.exit} {props.userNumber}
      </Text>
      <Button title={gameText.button.playagain} onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
