import { createUserWithEmailAndPassword } from "firebase/auth";
import firebaseServices from './firebaseConfig.js'
import{collection, addDoc} from 'firebase/firestore';

const {auth, db} = firebaseServices;

export const createUser = async(email, password, firstName, lastName, selectedClub, selectedRole) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userCollection = collection(db, "user");
        const docRef = await addDoc(userCollection, {email, firstName, lastName, selectedClub, selectedRole} );
        console.log('User created with User ID:', docRef.id);
        return user;
    }catch(error) {
        console.error('Error creating user:', error.message);
        throw new Error(error.message);
    }
}