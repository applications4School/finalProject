import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from "@/constants/Colors";
import { Ionicons} from '@expo/vector-icons';


export default function _layout() {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false, 
        headerTitle: "Home",
        tabBarStyle: {
          backgroundColor: Colors.CODE_BLACK,  
          borderTopWidth: 0,  
          height: 60,  
          paddingBottom: 5,  
        },
        tabBarActiveTintColor: Colors.CODE_PINK, 
        tabBarInactiveTintColor: Colors.CODE_WHITE,
        tabBarLabelStyle: {
          fontSize: 14,  
          fontWeight: 'bold',  
        },
      }}>
      <Tabs.Screen 
        name="index" 
        options={{
          headerShown: false,
          tabBarLabel: 'Home', 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen 
        name="myNotes" 
        options={{
          headerShown: false,
          tabBarLabel: 'Notes',  
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pencil-outline" size={size} color={color} /> 
          ),
          
        }}
      />
       <Tabs.Screen 
        name="AboutScreen" 
        options={{
          headerShown: false,
          tabBarLabel: 'About',  
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} /> 
          ),
          
        }}
      />
    </Tabs>
  );
}

