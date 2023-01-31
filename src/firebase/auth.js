import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';

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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Signing Up Function START

const capitalize = (name) => {
    let arr = name.split(' ');
    arr = arr.map((item) => {
        return item[0].toUpperCase() + item.slice(1, item.length);
    });

    return arr.join(' ');
};

export const handleSignUp = async (registerInfo, setUser) => {
    const { email, password, firstName, lastName } = registerInfo;
    console.log('signed up');
    try {
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        setUser(userCredential?.user);
        await updateProfile(auth.currentUser, {
            displayName: capitalize(firstName) + ' ' + capitalize(lastName),
        });
        // toastSuccessNotify('Welcome To Family 😎');
    } catch (err) {
        console.log(err);
    }
};

// Signing Up Function END

// Signing In Function START
export const handleSignIn = async (formValues, setUser) => {
    try {
        const { email, password } = formValues;
        let userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        setUser(userCredential?.user);
    } catch (err) {
        console.log(err);
    }
};
// Signing In Function END

// User Observer observes if user logged out or profile changed
export const userObserver = (setUser) => {
    onAuthStateChanged(auth, (fireUser) => {
        if (fireUser) {
            const { email, displayName, photoURL } = fireUser;

            setUser({ email, displayName, photoURL });
        } else {
            setUser(false);
        }
    });
};
// User Observer END

//Log out function Start
export const handleLogOut = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err);
    }
};
