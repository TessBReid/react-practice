import React from "react";
import axios from "axios";

export default function weather(props) {
  function handleWeather(response) {
    alert(
      `The weather in ${response.data.main} is ${response.data.main.temp}°C.`
    );
  }

  let apiKey = "b1075effe9bc0e836b23229ae5c92544";
  let urlKey = `https://api.openweathermap.org/data/2.5/weather?${props.city}&appid=${apiKey}`;

  axios.get(urlKey).then(handleWeather);

  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a test file about loading react.</p>
    </div>
  );
}
