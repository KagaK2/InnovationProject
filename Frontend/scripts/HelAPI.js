
// Url and param
var apiUrl = "https://linkedevents-api.test.hel.ninja/linkedevents-test/v1/";
var apiKey = "934d7aed-9929-4b55-b70f-b60e4772316d"


// Get all events
function getAllEvents() {
  return fetch(apiUrl + "event/", {
    method: 'GET',
    headers: {
      "api_key": apiKey,
      "Content-type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}


// Get events by date
function getEventsByDate(startDate, endDate) {
  //var d = new Date();
  //var n = "" + d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
  return fetch(apiUrl + "event/?start=" + startDate + "&end=" + endDate, {
    method: 'GET',
    headers: {
      "api_key": apiKey,
      "Content-type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}


// Get todays EventScreen
function getTodaysEvents() {
  return fetch(apiUrl + "event/?start=today&end=today", {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    })
    .then(response => response.json())
    .then(data => {return data})
    .catch(error => console.log("JSON ERROR"));
}


// Get event by Text
function getEventsByText(text) {
  return fetch(apiUrl + "event/?text=" + text, {
    method: 'GET',
    headers: {
      "api_key": apiKey,
      "Content-type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}


// Get events by location
function getEventsByLocation(location) {
  return fetch(apiUrl + "event/?location=" + location, {
    method: 'GET',
    headers: {
      "api_key": apiKey,
      "Content-type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}


// Get events by division
function getEventsByDivision(div) {
  return fetch(apiUrl + "event/?location=" + div, {
    method: 'GET',
    headers: {
      "api_key": apiKey,
      "Content-type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}



// Get event by keywords
function getEventsByKeyword(keyword) {
  return fetch(apiUrl + "event/?keyword=" + keyword, {
    method: 'GET',
    headers: {
      "api_key": apiKey,
      "Content-type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}


// Get an event by id
function getEventById(eventId) {
  return fetch(apiUrl + "event/" + eventId, {
    method: 'GET',
    headers: {
      "api_key": apiKey,
      "Content-type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}


// Get all keywords
function getAllKeywords() {
  return fetch(apiUrl + "keyword/", {
    method: 'GET',
    headers: {
      "api_key": apiKey,
      "Content-type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}


// Get keyword by id
function getAllKeywordsById(keywordId) {
  return fetch(apiUrl + "keyword/" + keywordId, {
    method: 'GET',
    headers: {
      "api_key": apiKey,
      "Content-type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}


// Event search
function searchEvent(search) {
  return fetch(apiUrl + "search/?type=event&q=" + search, {
    method: 'GET',
    headers: {
      "api_key": apiKey,
      "Content-type": "application/json"
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}


// !!!!!!!!!!!!!!! NOT WORKING !!!!!!!!!!!!!!!
// Search autocomplete
function searchAutocomplete(search, type) {
  return fetch(apiUrl + "search/?type=" + type + "&input=" + search, {
    method: 'GET',
    headers: {
      "api_key": apiKey,
    },
  })
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => console.log("JSON ERROR"));
}
