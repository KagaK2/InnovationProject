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

// Create users manually
// id : string
// name : string
// attending : array
// attended : array
// attInt : integer
// pic : string
export async function createUser(id, name, attending, attended, attInt, pic) {
  var data = {
    id: id,
    name: name,
    attending: attending,
    attended: attended,
    attInt: attInt,
    pic: pic
  };

  usersRef.doc(id).set(data);
}

// Remove user by its id
export async function removeUser(id) {
  usersRef.doc(id).delete();
}

// Create events manually
// id : string
// name : string
// expired : boolean
// desc : string
// date : string
// attendees : array
export async function createEvent(id, name, expired, desc, date, attendees) {
  var data = {
    id: id,
    name: name,
    expired: expired,
    desc: desc,
    date: date,
    attendees: attendees
  };

  eventsRef.doc(id).set(data);
}

// Remove event by its id
export async function removeEvent(id) {
  eventsRef.doc(id).delete();
}


// USE AFTER LOGIN
// Passes the information to the database and checks if the user already
// exists.
export async function checkUser(userId, name, picture) {
    usersRef.doc(userId).get()
      .then((docSnapshot) => {
        if(docSnapshot.exists) {
          usersRef.onSnapshot((doc) => {
            console.log("User found");
          });
        } else {
          console.log("User not found");
          var data = {
            id: userId,
            name: name,
            attending: [],
            attended: [],
            attInt: 0,
            pic: picture,
          }
          usersRef.doc(userId).set(data);
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
export async function checkEvent(user, eventId, eventName, eventDate, eventDesc) {
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

export async function addOwnUserToEvent(blast, event) {
    eventsRef.doc(event).update({attendees: firebase.firestore.FieldValue.arrayUnion(blast)});
}

export async function removeOwnUserFromEvent(blast, event) {
    eventsRef.doc(event).update({attendees: firebase.firestore.FieldValue.arrayRemove(blast)});
}

//  S T A R T   of user functions
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
      return doc.data().attending;
    })
  });
}

export async function getUserAttended() {
  usersRef.where("id", "==", "2201625983446208").get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("User attended array " + doc.data().attended);
      return doc.data().attended;
    })
  });
}

export async function getUserAttInt() {
  usersRef.where("id", "==", user).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("Number of events user has attended to: " + doc.data().attInt);
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

export async function updateUserId(id) {
  usersRef.doc(user).update({id: id});
}

export async function updateUserName(name) {
  usersRef.doc(user).update({name: name});
}

export async function updateUserPicture(pic) {
  usersRef.doc(user).update({pic: pic});
}

export async function addAttending(event) {
  usersRef.doc(user).update({attending: firebase.firestore.FieldValue.arrayUnion(event)});
}

export async function removeAttending(event) {
  usersRef.doc(user).update({attending: firebase.firestore.FieldValue.arrayRemove(event)});
}

export async function addAttended(event) {
  usersRef.doc(user).update({attended: firebase.firestore.FieldValue.arrayUnion(event)});
}

export async function updateAttInt(x){
    var userIdRef = usersRef.doc('123123');
    db.runTransaction(t => {
      return t.get(usersIdRef)
        .then(doc => {
          var newInt = doc.data().attInt + x;
          t.update(usersIdRef, {attInt: newInt});
      });
  }).then(result => {
    console.log('attInt incrementation success', result);
  }).catch(err => {
    console.log('attInt incrementation failure:', err);
  });
}

//   /\
//   |
// _____________________________________________________________________________
//  E N D   of   user functions

//  S T A R T   of   event functions
// _____________________________________________________________________________
//
//    |
//   \/


export async function addUserToEvent(event) {
    eventsRef.doc(event).update({attendees: firebase.firestore.FieldValue.arrayUnion(user)});
}

export async function removeUserFromEvent(event) {
    eventsRef.doc(event).update({attendees: firebase.firestore.FieldValue.arrayRemove(user)});
}

export async function getEventData(event) {
    eventsRef.where("id", "==", event).get().then((snapshot) => {
      snapshot.forEach(doc => {
        console.log("All event data: " + doc.data());
        return doc.data();
      })
    });
}

export async function getEventAttendees(event) {
  eventsRef.where("id", "==", event).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("Event attendees array: " + doc.data().attendees);
      return doc.data().attendees;
    })
  });
}

export async function getEventDate(event) {
  eventsRef.where("id", "==", event).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("Event date: " + doc.data().date);
      return doc.data().date;
    })
  });
}

export async function getEventDescription(event) {
  eventsRef.where("id", "==", event).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("Event attendees array: " + doc.data().date);
      return doc.data().date;
    })
  });
}

export async function getEventExpired(event) {
  eventsRef.where("id", "==", event).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("Event attendees array: " + doc.data().expired);
      return doc.data().expired;
    })
  });
}

export async function getEventId(event) {
  eventsRef.where("id", "==", event).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("Event attendees array: " + doc.data().id);
      return doc.data().id;
    })
  });
}

export async function getEventName(event) {
  eventsRef.where("id", "==", event).get().then((snapshot) => {
    snapshot.forEach(doc => {
      console.log("Event attendees array: " + doc.data().name);
      return doc.data().name;
    })
  });
}

export async function updateEventId(event, id) {
  usersRef.doc(event).update({id: id});
}

export async function updateEventName(event, name) {
  usersRef.doc(event).update({name: name});
}

export async function updateEventDate(event, date) {
  usersRef.doc(event).update({date: date});
}

export async function updateEventExpired(event, expired) {
  usersRef.doc(event).update({expired: expired});
}

export async function updateEventDescription(event, desc) {
  usersRef.doc(event).update({desc: desc});
}

//   /\
//   |
// _____________________________________________________________________________
//  E N D   of   event functions
