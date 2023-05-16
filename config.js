//firebase hatası için eklenmiş bir js dosyasıdır

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  // Firebase yapılandırma bilgilerinizi buraya ekleyin
  apiKey: 'AIzaSyAKkYyCS9QPH0WXzG7Y9WcundamSpPvDik',
  authDomain: 'travel-guide-app-fd492.firebaseapp.com',
  projectId: 'travel-guide-app-fd492',
  storageBucket: 'travel-guide-app-fd492.appspot.com',
  messagingSenderId: '311112857802',
  appId: '1:311112857802:android:0cb667e9bf46ac455adc33',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;