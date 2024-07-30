import { StyleSheet, View, TouchableHighlight, Button } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <View style={styles.hcontainer}>
      <TouchableHighlight style={styles.buttonContainer}>
        <ThemedText style={styles.buttonText}>Log In</ThemedText>
      </TouchableHighlight>
      <TouchableHighlight style={styles.buttonContainer}>
        <ThemedText style={styles.buttonText}>New Account</ThemedText>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    margin: 5,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#17a2b8",
    borderRadius: 5,
    width: 200,
  },
  buttonText: { textAlign: "center", color: "#17a2b8" },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    color: "red",
  },
  hcontainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  input: { backgroundColor: "#aaa" },
});
