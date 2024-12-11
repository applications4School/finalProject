import { StyleSheet, Text, View, Image, TextInput, FlatList, Alert, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-paper';
import { Colors } from "@/constants/Colors";
import { useClerk, useUser } from '@clerk/clerk-expo';
import { useNavigation } from 'expo-router';
// import { createNote, readNote, updateNote, deleteNote } from '../../firebaseMethods'; // Assuming these methods are already set up

// export default function MyNotes() {
//   const { signOut } = useClerk();
//   const { user } = useUser(); // Retrieve the user's information
//   const navigation = useNavigation();

//   const [notes, setNotes] = useState([]);
//   const [editingNote, setEditingNote] = useState(null);
//   const [newTitle, setNewTitle] = useState('');
//   const [newContent, setNewContent] = useState('');

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   // Function to fetch notes from Firebase and add a default note if none exist
//   const fetchNotes = async () => {
//     try {
//       const notesList = await readNote(); // Assuming you have a function to fetch notes from Firebase

//       if (notesList.length === 0) {
//         // If no notes exist, create a default note
//         const defaultNote = {
//           title: 'Default Note',
//           content: 'This is a default note. Edit or delete it as you wish!',
//           userId: user.id, // Assign user id to the note
//         };
//         await createNote(defaultNote); // Add the default note to Firebase
//         setNotes([defaultNote]); // Set the default note as the current notes
//       } else {
//         setNotes(notesList); // Set the fetched notes
//       }
//     } catch (error) {
//       console.log("Error fetching notes:", error);
//     }
//   };

//   // Handle editing a note
//   const handleEditNote = (note) => {
//     setEditingNote(note);
//     setNewTitle(note.title);
//     setNewContent(note.content);
//   };

//   // Save the updated note
//   const handleSaveNote = async () => {
//     if (!newTitle.trim() || !newContent.trim()) {
//       Alert.alert("Error", "Both title and content are required!");
//       return;
//     }

//     try {
//       await updateNote(editingNote.id, newTitle, newContent); // Update note in Firebase
//       fetchNotes(); // Refresh the notes list
//       setEditingNote(null); // Reset editing state
//       setNewTitle('');
//       setNewContent('');
//       Alert.alert("Success", "Note updated successfully!");
//     } catch (error) {
//       console.error("Error updating note:", error);
//       Alert.alert("Error", "Could not update note.");
//     }
//   };

//   // Handle deleting a note
//   const handleDeleteNote = async (noteId) => {
//     try {
//       await deleteNote(noteId); // Delete note from Firebase
//       fetchNotes(); // Refresh the notes list
//       Alert.alert("Success", "Note deleted!");
//     } catch (error) {
//       console.error("Error deleting note:", error);
//       Alert.alert("Error", "Could not delete note.");
//     }
//   };

//   const handleSignout = async () => {
//     try {
//       await signOut();
//       navigation.replace("index");
//     } catch (error) {
//       console.log("Signout error:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' }}
//         style={styles.profileImage}
//       />

      
//       <Text style={styles.email}>{user.primaryEmailAddress?.emailAddress || 'email@example.com'}</Text>

//       <Button style={styles.btn} mode="outlined" onPress={handleSignout}>
//         <Text style={styles.btnText}>Sign Out</Text>
//       </Button>

//       <Text style={styles.notesHeading}>Your Notes</Text>

//       {editingNote ? (
//         <View style={styles.editNoteContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Edit title"
//             value={newTitle}
//             onChangeText={setNewTitle}
//           />
//           <TextInput
//             style={[styles.input, styles.textArea]}
//             placeholder="Edit content"
//             value={newContent}
//             onChangeText={setNewContent}
//             multiline
//             numberOfLines={4}
//           />
//           <Button style={styles.btn} mode="contained" onPress={handleSaveNote}>
//             <Text style={styles.btnText}>Save Note</Text>
//           </Button>
//         </View>
//       ) : (
//         <FlatList
//           data={notes}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.noteCard}>
//               <Text style={styles.noteTitle}>{item.title}</Text>
//               <Text style={styles.noteContent}>{item.content}</Text>
//               <Button style={styles.btn} mode="outlined" onPress={() => handleEditNote(item)}>
//                 Edit
//               </Button>
//               <Button style={styles.btn} mode="outlined" onPress={() => handleDeleteNote(item.id)}>
//                 Delete
//               </Button>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// }

export default function MyNotes() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

// Add a default note if nothing is there 
    const fetchNotes = () => {
      if (notes.length === 0) {
        const defaultNote = {
          id: '1',
          title: 'Default Note',
          content: 'This is a default note. Edit or delete it as you wish!',
        };
        setNotes([defaultNote]); // Set the default note as the current notes
      }
    };

    // Handle editing a note
    const handleEditNote = (note) => {
      setEditingNote(note);
      setNewTitle(note.title);
      setNewContent(note.content);
    };

  // Save the updated note
  const handleSaveNote = () => {
    if (!newTitle.trim() || !newContent.trim()) {
      Alert.alert("Error", "Both title and content are required!");
      return;
    }

    const updatedNotes = notes.map((note) =>
      note.id === editingNote.id
        ? { ...note, title: newTitle, content: newContent }
        : note
    );
    setNotes(updatedNotes);
    setEditingNote(null);
    setNewTitle('');
    setNewContent('');
    Alert.alert("Success", "Note updated successfully!");
  };

  // Handle deleting a note
  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    Alert.alert("Success", "Note deleted!");
  };

  // Handle adding a new note
  const handleAddNote = () => {
    if (!newTitle.trim() || !newContent.trim()) {
      Alert.alert("Error", "Both title and content are required!");
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      title: newTitle,
      content: newContent,
    };
    setNotes([...notes, newNote]);
    setNewTitle('');
    setNewContent('');
    Alert.alert("Success", "Note added!");
  };

  // Run fetchNotes when component mounts
  React.useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg' }}
        style={styles.profileImage}
      />

      <Text style={styles.notesHeading}>Your Notes</Text>

      {editingNote ? (
        <View style={styles.editNoteContainer}>
          <TextInput
            style={styles.input}
            placeholder="Edit title"
            value={newTitle}
            onChangeText={setNewTitle}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Edit content"
            value={newContent}
            onChangeText={setNewContent}
            multiline
            numberOfLines={4}
          />
         <TouchableOpacity onPress={handleSaveNote} style={styles.btn}>
            <Text style={styles.btnText}>Add Note</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.noteCard}>
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteContent}>{item.content}</Text>
              <TouchableOpacity onPress={() => handleEditNote(item)} style={styles.btn}>
                <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteNote(item.id)} style={styles.btn}>
              <Text style={styles.btnText}>Delete</Text>
              </TouchableOpacity>

            </View>
          )}
        />
      )}

      {/* Add new note */}
      {!editingNote && (
        <View style={styles.addNoteContainer}>
          <TextInput
            style={styles.input}
            placeholder="New title"
            value={newTitle}
            onChangeText={setNewTitle}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="New content"
            value={newContent}
            onChangeText={setNewContent}
            multiline
            numberOfLines={4}
          />
         <TouchableOpacity onPress={handleAddNote} style={styles.addBtn}>
              <Text style={styles.btnText}>Add Note</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.CODE_BLACK,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: Colors.CODE_BLACK,
    borderWidth: 4,
    marginBottom: 20,
  },
 
  email: {
    fontSize: 18,
    color: Colors.CODE_PINK,
    fontWeight: "bold",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: Colors.CODE_PINK,
    padding: 10,
    borderRadius: 50,
    width: 200,
    alignItems: "center",
    marginVertical: 10,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  notesHeading: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    marginVertical: 20,
  },
  noteCard: {
    backgroundColor: Colors.CODE_WHITE,
    borderWidth: 1,
    borderColor: Colors.CODE_PINK,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.CODE_PINK,
  },
  noteContent: {
    fontSize: 14,
    color: Colors.CODE_DARK_GRAY,
    marginTop: 5,
  },
  editNoteContainer: {
    // backgroundColor: Colors.CODE_WHITE,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.CODE_WHTIE,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    backgroundColor: Colors.CODE_PINK,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  btn: {
    marginTop: 10,
    paddingVertical: 8,
    backgroundColor: Colors.CODE_PINK, 
    borderRadius: 5,
    width: '100%',
  },
  btnText: {
    color: Colors.CODE_WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addBtn: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 8,
    backgroundColor: Colors.CODE_PINK, 
    borderRadius: 5,
    width: '100%',
  },
});
