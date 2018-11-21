import * as firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

const usersRef = db.collection('users');
const eventsRef = db.collection('events');

var user = "";

// USE AFTER LOGIN
// Passes the information to the database and checks if the user already
// exists.
export async function checkUser(userId, name) {
    usersRef.doc(userId).get()
      .then((docSnapshot) => {
        if(docSnapshot.exists) {
          usersRef.onSnapshot((doc) => {
            console.log("User found");
            user = userId;
          });
        } else {
          console.log("User not found");
          var data = {
            id: userId,
            name: name,
          }
          usersRef.doc(userId).set(data);
          user = userId;
        }
      })
}


// USE AFTER CLICKING 'JOIN EVENT'
// Checks if the event is 'marked', either creates the event info or adds the
// user to it.
export async function checkEvent(eventId, eventName, eventDate, eventDesc) {
    eventsRef.doc(eventId).get()
      .then((docSnapshot) => {
        if(docSnapshot.exists) {
          eventsRef.onSnapshot((doc) => {
            console.log("Event found");
            addUserToEvent(user, eventId);
          });
        } else {
          console.log("Event not found");
          var data = {
            id: eventId,
            name: eventName,
            date: eventDate,
            desc: eventDesc,
            expired: false,
          }
          eventsRef.doc(eventId).set(data);
          addUserToEvent(user, eventId);
        }
      })
}

export async function addUserToEvent(blast, event) {
    eventsRef.doc(event).update({attendees: firebase.firestore.FieldValue.arrayUnion(blast)});
}

export async function removeUserFromEvent(blast, event) {
    eventsRef.doc(event).update({attendees: firebase.firestore.FieldValue.arrayRemove(blast)});
}
