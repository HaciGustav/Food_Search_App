import { initializeApp } from 'firebase/app';
import {
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const addRecipe = async (item) => {
    const {
        email,
        label,
        image,
        url,
        uri,
        source,
        mealType,
        calories,
        dishType,
    } = item;
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    try {
        await addDoc(collection(db, 'favoriteRecipes'), {
            email,
            label,
            image,
            url,
            uri,
            source,
            mealType,
            calories,
            dishType,
            addedAt: { year, month, day },
        });
        //TODO: toastify
    } catch (err) {
        console.log(err);
    }
};

//get favorite recipes from db

export const getFavoriteRecipe = async (email, setFavoriteRecipeList) => {
    const recipeArray = [];
    const q = query(
        collection(db, 'favoriteRecipes'),
        where('email', '==', `${email}`)
    );
    try {
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            recipeArray.push({ ...doc.data(), id: doc.id });
        });
    } catch (error) {
        console.log(error.message);
    }

    return recipeArray;
};

export const deleteRecipe = async (id) => {
    const docRef = doc(db, 'favoriteRecipes', id);

    try {
        deleteDoc(docRef);
        console.log('deleted');
    } catch (err) {
        console.log(err);
    }
};

export const userRecipes = async (email) => {
    const recipeArray = [];
    const q = query(
        collection(db, 'favoriteRecipes'),
        where('email', '==', `${email}`)
    );
    try {
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            recipeArray.push({ ...doc.data(), id: doc.id });
        });
    } catch (error) {
        console.log(error.message);
    }
    return recipeArray;
};
