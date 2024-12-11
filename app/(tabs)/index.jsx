import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Colors } from "@/constants/Colors"; 
import { useNavigation } from 'expo-router'; 

import { useClerk, useUser } from '@clerk/clerk-expo';

export default function index() {
  const navigation = useNavigation();
  const { signOut } = useClerk();

  const handleSignout = async () => {
    try {
      await signOut();
      navigation.replace("index");
    } catch (error) {
      console.log("signout error");
    }
  }

  return (
    <View style={styles.container}>
        <Image 
        source={{ uri: 'https://s.yimg.com/ny/api/res/1.2/03dJk9G8kK7LvlsvAQc8SA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en/how_to_geek_999/9a18cd9fb5cfe7fbf17f8efd36132d72' }} 
        style={styles.heroImage} 
      />
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Notees!</Text>
        <Text style={styles.subtitle}>Your personal space to organize thoughts, ideas, and tasks.</Text>
      </View>

    

      <TouchableOpacity 
        style={[styles.btn, styles.createNoteBtn]} 
        onPress={() => navigation.navigate('createNoteScreen')}
      >
        <Text style={styles.btnText}>Create New Note</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btn, styles.viewNotesBtn]} 
        onPress={() => navigation.navigate('myNotes')}
      >
        <Text style={styles.btnText}>View My Notes</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btn, styles.logoutBtn]} 
        onPress={handleSignout}
      >
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Made with love. 2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CODE_BLACK, 
    alignItems: "center",
    // justifyContent: "center",
    // paddingHorizontal: 20,
  },
  header: {
    marginBottom: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: Colors.CODE_WHITE, 
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: Colors.CODE_LIGHT_GRAY, 
    textAlign: "center",
    marginTop: 8,
  },
  heroImage: {
    width: '100%',
    height: '40%',
    borderRadius: 20,
    // marginVertical: 20,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: Colors.CODE_PINK, 
    padding: 14,
    borderRadius: 50,
    width: 250,
    alignItems: "center",
    marginTop: 15,
  },
  btnText: {
    color: Colors.CODE_WHITE, 
    fontWeight: "bold",
    fontSize: 18,
  },
  createNoteBtn: {
    backgroundColor: Colors.CODE_PINK,  
  },
  viewNotesBtn: {
    backgroundColor: Colors.CODE_DARK_GRAY,  
  },

  logoutBtn: {
    backgroundColor: Colors.CODE_BLACK, 
    borderColor: Colors.CODE_PINK, 
    marginTop: 100,
    borderWidth: 3, 
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    color: Colors.CODE_LIGHT_GRAY, 
  }
});
