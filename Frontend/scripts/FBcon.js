import * as firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAMFtCMKracMLES-ddu4P3h4RamNN8lCoA",
  authDomain: "gosinki-ee.firebaseapp.com",
  databaseURL: "https://gosinki-ee.firebaseio.com",
  projectId: "gosinki-ee",
  storageBucket: "gosinki-ee.appspot.com",
  messagingSenderId: "718950483191"
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

// Posts every user to console
export async function returnAllUsers(){
  usersRef.get().then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log("Error getting users");
  });
}

// Posts every event to console
export async function returnAllEvents(){
  eventsRef.get().then(snapshot => {
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log("Error getting events");
  });
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


// _____________________________________________________________________________
// IN ORDER TO TEST THESE FUNCTIONS, CHANGE user IN WHERE FUNCTION TO WANTED USER ID
//    |
//   \/
export async function getUserData() {
    usersRef.where("id", "==", user).get().then((snapshot) => {
      snapshot.forEach(doc => {
        console.log("All user data: " + doc.data());
        return doc.data();
      })
    });
}

export async function getUserAttending() {
  usersRef.where("id", "==", user).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("User attending array: " + doc.data().attending);
      return doc.data().attending
    })
  });
}

export async function getUserAttended() {
  usersRef.where("id", "==", user).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("User attended array " + doc.data().attended);
      return doc.data().attended;
    })
  });
}

export async function getUserAttInt() {
  usersRef.where("id", "==", user).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("Number of events user has attende to: " + doc.data().attInt);
      return doc.data().attInt;
    })
  });
}

export async function getUserName() {
  usersRef.where("id", "==", user).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("Username: " + doc.data().name);
      return doc.data().name;
    })
  });
}

export async function getUserId() {
    if(user === null) {
      console.log("USER NOT CREATED/NOT LOGGED IN");
    } else {
      console.log("User id: " + user);
      return user;
    }
}

//   /\
//   |
// _____________________________________________________________________________
