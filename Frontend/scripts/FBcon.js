import Firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAMFtCMKracMLES-ddu4P3h4RamNN8lCoA",
  authDomain: "gosinki-ee.firebaseapp.com",
  databaseURL: "https://gosinki-ee.firebaseio.com",
  projectId: "gosinki-ee",
  storageBucket: "gosinki-ee.appspot.com",
  messagingSenderId: "718950483191"
};

Firebase.initializeApp(config);

function writeUserData(userId, name) {
  Firebase.database().ref('Users/' + userId).set({
    id: userId,
    name: name,
  });
}
