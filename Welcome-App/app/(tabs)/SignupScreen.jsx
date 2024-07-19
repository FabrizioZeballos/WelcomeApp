import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleSignUp = async () => {
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      console.log("User signed up successfully");
      setEmail(""), setPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ThemedView style={styles.loginScreen}>
      <ThemedView style={styles.signinCard}>
        <ThemedText style={styles.createAccount}>Create Account</ThemedText>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#ccc"
          onChangeText={handleEmailChange}
          value={email}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          onChangeText={handlePasswordChange}
          value={password}
          style={styles.input}
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <ThemedText style={styles.signupText}>Sign Up</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  createAccount: {
    fontSize: 22,
    marginBottom: 40,
    textAlign: "center",
    color: "#fff",
  },
  signinCard: {
    paddingVertical: 50,
    backgroundColor: "#292929",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    display: "flex",
  },

  loginScreen: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#111",
  },
  input: {
    backgroundColor: "#292929",
    width: 260,
    marginBottom: 20,
    color: "white",
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  signupButton: {
    backgroundColor: "#17a2b8",
    paddingVertical: 10,
    borderRadius: 5,
  },
  signupText: { textAlign: "center", color: "#fff" },
});
