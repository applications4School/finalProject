// THIS IS A HELPER FILE. 

// What this file does is it breaks down my logic into smaller parts. Since this app is quite small I do not need to create a seperate folder. The larger my app gets I potentially need to move this. Also, I did not add this as a component because I want my logic to be seperate from any jsx. When my apps get bigger it will be much easier to distinguish where any errors are since these functions will be in this helper file. \





import { db } from './firebase'; 
import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';

// Create a note
export const createNote = async (title, content) => {
    try {
    // Get a reference to add a new doc to our "notes"
    const docRef = await addDoc(collection(db, 'notes'), {
    // Uses title, content, and a real life date
        title: title,
        content: content,

    //   new is just an instance, it records when the date was created. 
        createdAt: new Date(),
    });

    // Console the document
        console.log('Note created with ID: ', docRef.id);

    } catch (e) {

        console.error('Error adding document: ', e);
    }
};


// Read Note 
export const readNote = async () => {
    try {
        const notesCollection = collection(db, 'notes');
        const notesSnapshot = await getDocs(notesCollection);

        const notesList = [];
        notesSnapshot.docs.forEach(doc => {
            notesList.push({ id: doc.id, ...doc.data() });
        });

        return notesList;  // Return the notes list here
    } catch (e) {
        console.error("Error fetching notes: ", e);
        return [];
    }
};


// Update a note 
export const updateNote = async (noteId, newTitle, newContent) => {

  // Grab the notes id from the database instance
    const noteRef = doc(db, "notes", noteId);
    try {

        // Update the documents title and content
        await updateDoc(noteRef, {
        title: newTitle,
        content: newContent,
        });


        console.log("Note updated!");
    } catch (e) {
        console.error("Error updating document: ", e);
    }
};

// Delete a note
export const deleteNote = async (noteId) => {

    // Grab the notes id from the database instance
    const noteRef = doc(db, "notes", noteId);
    try {

        // Delete the note from the database
        await deleteDoc(noteRef);
        console.log("Note deleted!");
    } catch (e) {
        console.error("Error deleting document: ", e);
    }
};
