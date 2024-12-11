import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      
      <View style={styles.logoContaier}>
      <Text style={styles.headerText}>Welcome to Your favorite notes app! <Text style={styles.CODE}>Notees!</Text></Text>
        <Image style={styles.logo} source={require('./../assets/images/notes.jpg')} />
      </View>
      <View style={styles.btns}>
        <View style={styles.btnContainer}>
          <Button
            style={styles.btn}
            mode="text"
            onPress={() => router.push("/(auth)/signIn")}>
            <Text style={styles.btnText}>Sign In</Text>
          </Button>
          <Button
            style={styles.btn}
            mode="text"
            onPress={() => router.push("/(auth)/signUp")}>
            <Text style={styles.btnText}>Sign Up</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: Colors.CODE_WHITE,  
    display: "flex",
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
  },
  logoContaier: { 
    display: "flex",
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    // marginBottom: 10,
    marginTop: 25,
  },
  logo: {
    width: 350, 
    height: 350,
  },
  btns: { 
    width: "65%",
    padding: 20, 
    marginBottom: 10,
    
  },
  headerText: { 
    fontSize: 40, 
    textAlign: "center",
    color: Colors.CODE_DARK_GRAY,  
    marginBottom: 30,
  },
  tagLine: { 
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    color: Colors.CODE_LIGHT_GRAY, 
  },
  CODE: { 
    color: Colors.CODE_PINK,  
  },
  btnContainer: {
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    width: '100%',  
    marginTop: 10, 
  },
  btn: {
    backgroundColor: Colors.CODE_PINK,  
    padding: 10,
    borderRadius: 50,
    width: '48%',  
  },
  btnText: {
    color: Colors.CODE_WHITE, 
    textAlign: "center",
    justifyContent: 'center',
    margin: 0,
  },
});
