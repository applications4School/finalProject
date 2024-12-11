import { useAuth } from "@clerk/clerk-expo";
import { Stack, Redirect } from "expo-router";
import { Colors } from '@/constants/Colors';

export default function AuthroutesLayout() {
  const { isSignedIn, isSignedUp } = useAuth(); 

  // Redirect if user is signed in or signed up
  if (isSignedIn || isSignedUp) {
    return <Redirect href="/(tabs)" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: true, 
        headerStyle: {
          backgroundColor: Colors.CODE_BLACK,
        },
        headerTintColor: Colors.CODE_WHITE, 
        headerTitleStyle: {
          fontSize: 24, 
          fontWeight: 'bold', 
        },
      }}
    >
      <Stack.Screen
        name="signIn"
        options={{
          headerTitle: "Sign In",
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          headerTitle: "Create Account", 
        }}
      />
    </Stack>
  );
}
