/** @format */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDgyK-jU5uUhcohPzlqQjSUP9Xfq0ESwqA',
	authDomain: 'campus-central-1b304.firebaseapp.com',
	projectId: 'campus-central-1b304',
	storageBucket: 'campus-central-1b304.appspot.com',
	messagingSenderId: '1023982313752',
	appId: '1:1023982313752:web:d6b46434893ba99d9b7e6d',
	measurementId: 'G-0QJ19J8946',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider };
export default getFirestore();
