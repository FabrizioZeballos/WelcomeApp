import React from "react";
import { Button } from "react-native";
import auth from "@react-native-firebase/auth";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";

export function FacebookSignIn() {
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    console.log("We're inside the on Facebook press");
    try {
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
      ]);
    } catch (error) {
      console.log(error.message);
    }

    console.log("We passed");
    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw "Something went wrong obtaining access token";
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  return (
    <Button
      title="Facebook Sign-In"
      onPress={() =>
        onFacebookButtonPress().then(() =>
          console.log("Signed in with Facebook!")
        )
      }
    />
  );
}
