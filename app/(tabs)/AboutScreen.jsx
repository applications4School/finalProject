// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, TextInput, Button, Text, FlatList, Alert } from "react-native";
// import { Colors } from "@/constants/Colors";
// // import { createNote, readNote } from "../../firebaseMethods";


// export default function AboutScreen() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [notes, setNotes] = useState([]);

//   // Fetch existing notes when the component mounts
//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   // Function to fetch notes
//   const fetchNotes = async () => {
//     try {
//       const notesList = await readNote();
//       setNotes(notesList);
//     } catch (error) {
//       console.error("Error fetching notes:", error);
//     }
//   };

//   // Function to handle note creation
//   const handleCreateNote = async () => {
//     if (title.trim() === "" || content.trim() === "") {
//       Alert.alert("Error", "Both title and content are required!");
//       return;
//     }
//     try {
//       await createNote(title, content);
//       Alert.alert("Success", "Note created successfully!");
//       setTitle("");
//       setContent("");
//       fetchNotes(); // Refresh the notes list
//     } catch (error) {
//       console.error("Error creating note:", error);
//       Alert.alert("Error", "Could not create note.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Form to create a new note */}
//       <Text style={styles.heading}>Create a New Note</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter note title"
//         value={title}
//         onChangeText={(text) => setTitle(text)}
//       />
//       <TextInput
//         style={[styles.input, styles.textArea]}
//         placeholder="Enter note content"
//         value={content}
//         onChangeText={(text) => setContent(text)}
//         multiline
//         numberOfLines={4}
//       />
//       <Button title="Save Note" onPress={handleCreateNote} color={Colors.CODE_PINK} />

//       {/* Display existing notes */}
//       <Text style={styles.heading}>Your Notes</Text>
//       <FlatList
//         data={notes}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.noteCard}>
//             <Text style={styles.noteTitle}>{item.title}</Text>
//             <Text style={styles.noteContent}>{item.content}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: Colors.CODE_BLACK,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 10,
//     color: Colors.CODE_WHITE,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: Colors.CODE_WHITE,
//     borderRadius: 5,
//     padding: 10,
//     marginVertical: 10,
//     color: Colors.CODE_WHITE,
//   },
//   textArea: {
//     height: 100,
//     textAlignVertical: "top",
//   },
//   noteCard: {
//     backgroundColor: Colors.CODE_WHITE,
//     borderWidth: 1,
//     borderColor: Colors.CODE_LIGHT_GRAY,
//     borderRadius: 5,
//     padding: 10,
//     marginVertical: 5,
    
    
//   },
//   noteTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: Colors.CODE_DARK_GRAY,
//   },
//   noteContent: {
//     fontSize: 14,
//     color: Colors.CODE_LIGHT_GRAY,
//     marginTop: 5,
//   },
// });


import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>About Notees</Text>
        <Text style={styles.subtitle}>Your personal space to organize thoughts, ideas, and tasks.</Text>
      </View>

     
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://media.wired.com/photos/657c8d4f0413b9ce5a005ad4/1:1/w_1800,h_1800,c_limit/Notes-App-Rave-Gear-Alamy-2E1T4XG.jpg' }} 
          style={styles.heroImages}
        />
      </View>

     
      <Text style={styles.text}>
        Notees is designed to help you keep track of your thoughts, ideas, and tasks in one organized space.
        Whether you're a student, a professional, or someone with a busy schedule, Notees provides a simple
        and intuitive way to jot down, organize, and manage your notes.
      </Text>

      
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://s3-nothing-prod.s3.eu-central-1.amazonaws.com/2024-04-21/1713659296-726670-features.png' }} 
          style={styles.heroImages}
        />
      </View>

      
      <View style={styles.features}>
        <Text style={styles.featuresTitle}>Features:</Text>
        <Text style={styles.text}>• Create and manage notes</Text>
        <Text style={styles.text}>• Organize notes by categories(Function not implemented yet)</Text>
        <Text style={styles.text}>• Edit and delete notes with ease</Text>
        
      </View>

      
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://cdn.wccftech.com/wp-content/uploads/2019/05/Notes-heading-body-title-1.jpg' }}
          style={styles.heroImages}
        />
      </View>

      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Love, </Text>
        <Text style={styles.footerText}>- Notees</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.CODE_BLACK,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: Colors.CODE_PINK,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: Colors.CODE_LIGHT_GRAY,
    textAlign: 'center',
    marginTop: 8,
  },
  imageContainer: {
    marginVertical: 20,
  },
  heroImages: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    color: Colors.CODE_WHITE,
    marginBottom: 20,
    textAlign: 'center',
  },
  features: {
    marginVertical: 20,
  },
  featuresTitle: {
    fontSize: 20,
    color: Colors.CODE_WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: Colors.CODE_LIGHT_GRAY,
    textAlign: 'center',
  },
});
