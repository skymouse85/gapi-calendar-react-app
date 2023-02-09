import React, {useEffect, useState } from "react";
import { gapi } from "gapi-script";


function App() {
  const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

  const getEvents = (calendarID, apiKey) => {
    function initiate() {
      gapi.client
        .inti({
          apiKey: apiKey,
        })

        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
          });
        })

        .then(
          (reponse) => {
            let events = response.result.items;
            return events;
          },
          function (err) {
            return [false, err];
          }
        );
    }

    gapi.load("client", initiate);
  }

  return (
    <div className="App pt-4" >
      <h1 className="text-2xl font-bold mb-4">
        Upcoming Shows and events
      </h1>
    </div>
  );
}


export default App;