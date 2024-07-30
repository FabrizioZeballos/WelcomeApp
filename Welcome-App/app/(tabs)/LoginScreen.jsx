import {
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => setEmail(text);
  const handlePasswordChange = (text) => setPassword(text);

  const handleLogIn = async () => {
    try {
      await doSignInWithEmailAndPassword(email, password);
      console.log("User signed in successfully");
      setEmail(""), setPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    console.log("Google Sign In");
    try {
      await doSignInWithGoogle();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ThemedView style={styles.loginscreen}>
      <ThemedView style={styles.signinCard}>
        <ThemedText style={styles.loginText}>Log In</ThemedText>
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
        ></TextInput>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogIn}>
          <ThemedText style={styles.loginButtonText}>Sign In</ThemedText>
        </TouchableOpacity>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <ThemedText style={styles.dividerText}>or sign in with</ThemedText>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity
          style={styles.signInWithGoogleButton}
          onPress={handleGoogleSignIn}
        >
          <ThemedText style={styles.signInWithGoogleText}>
            Sign In With Google
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  signInWithGoogleButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 10,
    borderRadius: 5,
  },
  signInWithGoogleText: { textAlign: "center", color: "#fff" },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#999",
  },
  dividerText: {
    fontSize: 12,
    marginHorizontal: 10,
    color: "#aaa",
  },
  loginButton: {
    backgroundColor: "#17a2b8",
    paddingVertical: 10,
    borderRadius: 5,
  },
  loginButtonText: { textAlign: "center", color: "#fff" },
  signInWithGoogle: { marginTop: 40 },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    marginBottom: 40,
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
  },
  signinWithEmailAndPassword: { marginBottom: 40 },
  loginscreen: {
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
});
