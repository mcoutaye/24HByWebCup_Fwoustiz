import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDX3zb0oNXpspvFxiO4TcavOUB6MTzTwdo",
  authDomain: "webtest-308f8.firebaseapp.com",
  projectId: "webtest-308f8",
  storageBucket: "webtest-308f8.appspot.com",
  messagingSenderId: "483682915542",
  appId: "1:483682915542:web:YOUR_APP_ID"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
