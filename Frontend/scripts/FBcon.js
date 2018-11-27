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
            attendees: [],
            expired: false,
          }
          eventsRef.doc(eventId).set(data);
          addUserToEvent(user, eventId);
        }
      }).catch(err => console.log(err));
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
export async function getUserData(user) {
  let snapshot = await usersRef.where("id", "==", user).get()
  let newArray = []
  snapshot.forEach(doc => {
    newArray.push(doc.data())
   })
   return newArray;
}

export async function getUserAttending(user) {
  let snapshot = await usersRef.where("id", "==", user).get()
  let newArray = []
  snapshot.forEach(doc => {
    newArray.push(doc.data().attending)
   })
   return newArray;
}

export async function getUserAttended(user) {
  let snapshot = await usersRef.where("id", "==", user).get()
  let newArray = []
  snapshot.forEach(doc => {
    newArray.push(doc.data().attended)
   })
   return newArray;
}

export async function getUserAttInt(user) {
  let snapshot = await usersRef.where("id", "==", user).get()
  let newArray = []
  snapshot.forEach(doc => {
    newArray.push(doc.data().attInt)
   })
   return newArray;
}

export async function getUserName(user) {
  let snapshot = await usersRef.where("id", "==", user).get()
  let newArray = []
  snapshot.forEach(doc => {
    newArray.push(doc.data().name)
   })
   return newArray;
}

export async function getUserId(user) {
    if(user === null) {
      console.log("USER NOT CREATED/NOT LOGGED IN");
    } else {
      console.log("User id: " + user);
      return user;
    }
}

export async function updateUserId(user, id) {
  usersRef.doc(user).update({id: id});
}

export async function updateUserName(user, name) {
  usersRef.doc(user).update({name: name});
}

export async function updateUserPicture(user, pic) {
  usersRef.doc(user).update({pic: pic});
}

export async function addAttending(user, event) {
  usersRef.doc(user).update({attending: firebase.firestore.FieldValue.arrayUnion(event)});
}

export async function removeAttending(user, event) {
  usersRef.doc(user).update({attending: firebase.firestore.FieldValue.arrayRemove(event)});
}

export async function addAttended(user, event) {
  usersRef.doc(user).update({attended: firebase.firestore.FieldValue.arrayUnion(event)});
}

export async function updateAttInt(user, x){
    var userIdRef = usersRef.doc(user);
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


export async function addUserToEvent(user, event) {
    eventsRef.doc(event).update({attendees: firebase.firestore.FieldValue.arrayUnion(user)});
}

export async function removeUserFromEvent(user, event) {
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
   let snapshot = await eventsRef.where("id", "==", event).get()
   let newArray = []
   snapshot.forEach(doc => {
      console.log("Event attendees array: " + doc.data().attendees);
      newArray.push(doc.data().attendees)
    })
    return newArray;
}

export async function getEventDate(event) {
  let snapshot = await eventsRef.where("id", "==", event).get()
  let newArray = []
  snapshot.forEach(doc => {
     console.log("Event date array: " + doc.data().date);
     newArray.push(doc.data().date)
   })
   return newArray;
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
  let snapshot = await eventsRef.where("id", "==", event).get()
  let newArray = []
  snapshot.forEach(doc => {
     console.log("Event expired array: " + doc.data().expired);
     newArray.push(doc.data().expired)
   })
   return newArray;
}

export async function getEventId(event) {
  let snapshot = await eventsRef.where("id", "==", event).get()
  let newArray = []
  snapshot.forEach(doc => {
     console.log("Event id array: " + doc.data().id);
     newArray.push(doc.data().id)
   })
   return newArray;
}

export async function getEventName(event) {
  let snapshot = await eventsRef.where("id", "==", event).get()
  let newArray = []
  snapshot.forEach(doc => {
     console.log("Event attendees array: " + doc.data().name);
     newArray.push(doc.data().name)
   })
   return newArray;
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
