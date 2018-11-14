

// Url and param
var apiUrl = "https://linkedevents-api.test.hel.ninja/linkedevents-test/v1/";
var apiKey = "934d7aed-9929-4b55-b70f-b60e4772316d"


// Get all events
export async function getAllEvents() {
  try {
    let response = await fetch(apiUrl + "event/", {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


// Get events by date
export async function getEventsByDate(startDate, endDate) {
  //var d = new Date();
  //var n = "" + d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
  try {
    let response = await fetch(apiUrl + "event/?start=" + startDate + "&end=" + endDate, {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


// Get todays EventScreen
export async function getTodaysEvents() {
  try {
    let response = await fetch(apiUrl + "event/?start=today&end=today", {
        method: 'GET',
        headers: {
          "api_key": apiKey,
          "Content-type": "application/json"
        },
      });
      let responseJson = await response.json();
      return responseJson;
  } catch (error) {
    console.error(error);
  }

}


// Get event by Text
export async function getEventsByText(text) {
  try {
    let response = await fetch(apiUrl + "event/?text=" + text, {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


// Get events by location
export async function getEventsByLocation(location) {
  try {
    let response = await fetch(apiUrl + "event/?location=" + location, {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


// Get events by division
export async function getEventsByDivision(div) {
  try {
    let response = await fetch(apiUrl + "event/?location=" + div, {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}



// Get event by keywords
export async function getEventsByKeyword(keyword) {
  try {
    let response = await fetch(apiUrl + "event/?keyword=" + keyword, {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


// Get an event by id
export async function getEventById(eventId) {
  try {
    let response = await fetch(apiUrl + "event/" + eventId, {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


// Get all keywords
export async function getAllKeywords() {
  try {
    let response = await fetch(apiUrl + "keyword/", {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


// Get keyword by id
export async function getAllKeywordsById(keywordId) {
  try {
    let response = await fetch(apiUrl + "keyword/" + keywordId, {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


// Event search
export async function searchEvent(search) {
  try {
    let response = await fetch(apiUrl + "search/?type=event&q=" + search, {
      method: 'GET',
      headers: {
        "api_key": apiKey,
        "Content-type": "application/json"
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}


// !!!!!!!!!!!!!!! NOT WORKING !!!!!!!!!!!!!!!
// Search autocomplete
export async function searchAutocomplete(search, type) {
  try {
    let response = await fetch(apiUrl + "search/?type=" + type + "&input=" + search, {
      method: 'GET',
      headers: {
        "api_key": apiKey,
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
