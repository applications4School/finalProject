import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput, Button } from "react-native-paper";
import { useSignIn, useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { Colors } from "@/constants/Colors"; 

export default function SignIn() {

  // Use use states to set the state of signIn, router, etc...
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  // Setters and getters for pw and email
  const [emailAddress, setEmailAddress] = React.useState('josephroper57@gmail.com');
  const [password, setPassword] = React.useState('soccerteam12345');
  


  const onSignin = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password: password,
      });

      //If the sign in attempt is valid, push the user to the index screen in tabs 
      if (signInAttempt.status === "complete") {
        await setActive({
          session: signInAttempt.createdSessionId,
        });
        router.push("/(tabs)");
      } else {
        alert("Sign in error");
        console.error("Sign in error");
      }
    } catch (error) {
      console.error("Sign in error", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In to CRUD Application!</Text>
      <TextInput
        autoCapitalize='none'
        value={emailAddress}
        keyboardType='email-address'
        placeholder="Email Address"
        onChangeText={setEmailAddress}
        style={styles.input}
      />
      <TextInput
        autoCapitalize='none'
        value={password}
        keyboardType='default'
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        style={styles.input}
      />
      <Button mode='contained' onPress={onSignin} style={styles.btn}>
        <Text style={styles.btnText}>Sign In</Text>
      </Button>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.CODE_BLACK,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.CODE_WHITE,
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    backgroundColor: Colors.CODE_LIGHT_GRAY,
    width: '75%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    color: Colors.CODE_DARK_GRAY,
    fontSize: 16,
  },
  btn: {
    backgroundColor: Colors.CODE_PINK,
    padding: 12,
    borderRadius: 10,
    width: '75%',
    marginTop: 15,
  },
  btnText: {
    color: Colors.CODE_WHITE,
    textAlign: "center",
    fontWeight: 'bold',
  },
});