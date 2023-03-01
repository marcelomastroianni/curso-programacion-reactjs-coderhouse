import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWZqyfPVKqy2sI3VqhLC4_W2vNOD9aWMk",
  authDomain: "coderhouse-react-mastroianni.firebaseapp.com",
  projectId: "coderhouse-react-mastroianni",
  storageBucket: "coderhouse-react-mastroianni.appspot.com",
  messagingSenderId: "803340586621",
  appId: "1:803340586621:web:5957f431cc7e69276deb14"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


