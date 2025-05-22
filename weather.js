
/* weather.js */
/* Save this in a separate weather.js file */
$(document).ready(function () {
    $('#searchBtn').on('click', function () {
      const city = $('#city').val().trim();
      if (!city) return alert('Please enter a city name');
  
      const apiKey = '790d3479e2f9f810a25fb323b60f7446';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
  
      $.get(url, function (data) {
        let bgColor;
        const temp = data.main.temp;
        if (temp <= 0) bgColor = '#69A3FF';
        else if (temp <= 15) bgColor = '#AEDFF7';
        else if (temp <= 25) bgColor = '#F7D774';
        else bgColor = '#FF7F50';
  
        $('#weather-result').css('background-color', bgColor);
  
        const weatherHtml = `
          <h2>${data.name}</h2>
          <p><strong>Temperature:</strong> ${temp}°C</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Conditions:</strong> ${data.weather[0].description}</p>
        `;
        $('#weather-result').html(weatherHtml);
      }).fail(function () {
        $('#weather-result').html('<p class="text-danger">City not found or invalid API key. Please try again.</p>');
      });
    });
  });
  