import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import Square from "./components/square";
import { useState, useEffect } from "react";

export default function App() {
  const [gameOver, setGameOver] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState(
    Math.round(Math.random())
  );
  const [sequence, setSequence] = useState([]);

  const handlePress = (squareNum) => {
    if (squareNum === selectedSquare) {
      const square = Math.round(Math.random());
      console.log("square tapped. New selectedSquare is", square);
      setSelectedSquare(square);
      setSequence((prevSeq) => [...prevSeq, selectedSquare]);
      console.log(sequence);
    } else {
      setGameOver(true);
    }
  };

  // useEffect(() => {
  //   setSequence((prevSeq) => [...prevSeq, selectedSquare]);
  //   console.log(sequence);
  // }, [selectedSquare]);

  return (
    <SafeAreaView style={styles.container}>
      {!gameOver ? (
        <>
          <Square
            color="red"
            selectedSquare={selectedSquare}
            squareNum={0}
            handlePress={handlePress}
          />
          <Square
            color="blue"
            selectedSquare={selectedSquare}
            squareNum={1}
            handlePress={handlePress}
          />
        </>
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 30 }}>Game Over</Text>
          <Text style={{ color: "white", fontSize: 30 }}>
            Score: {sequence.length}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
