document.getElementById('location-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location-input').value;
    getWeather(location);
});

function getWeather(location) {
    const apiKey = 'f93fc6ceb5491bf52cfc2fdfb7463032'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('weather-description').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
                document.getElementById('weather-info').classList.remove('hidden');
            } else {
                alert('Location not found');
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
