class WeatherApp {
    constructor() {
        this.apiKey = '3c1c8f3ad0c1feaa3dd9cdcbb1b37071';
        this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
        
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.errorMessage = document.getElementById('errorMessage');
        
        this.cityName = document.getElementById('cityName');
        this.temperature = document.getElementById('temperature');
        this.description = document.getElementById('description');
        this.feelsLike = document.getElementById('feelsLike');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.pressure = document.getElementById('pressure');
        
        this.bindEvents();
    }
    
    bindEvents() {
        this.searchBtn.addEventListener('click', () => this.getWeather());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.getWeather();
            }
        });
    }
    
    async getWeather() {
        const city = this.cityInput.value.trim();
        
        if (!city) {
            this.showError('Please enter a city name');
            return;
        }
        
        try {
            this.showLoading();
            const response = await fetch(
                `${this.apiUrl}?q=${encodeURIComponent(city)}&appid=${this.apiKey}&units=metric`
            );
            
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('City not found. Please check the spelling and try again.');
                } else if (response.status === 401) {
                    throw new Error('API key error. Please contact the developer.');
                } else {
                    throw new Error('Failed to fetch weather data. Please try again later.');
                }
            }
            
            const data = await response.json();
            this.displayWeather(data);
            this.hideError();
            
        } catch (error) {
            this.showError(error.message);
        }
    }
    
    displayWeather(data) {
        this.cityName.textContent = `${data.name}, ${data.sys.country}`;
        this.temperature.textContent = Math.round(data.main.temp);
        this.description.textContent = data.weather[0].description;
        this.feelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;
        this.humidity.textContent = `${data.main.humidity}%`;
        this.windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
        this.pressure.textContent = `${data.main.pressure} hPa`;
    }
    
    showLoading() {
        this.cityName.textContent = 'Loading...';
        this.temperature.textContent = '--';
        this.description.textContent = '--';
        this.feelsLike.textContent = 'Feels like: --°C';
        this.humidity.textContent = '--%';
        this.windSpeed.textContent = '-- km/h';
        this.pressure.textContent = '-- hPa';
    }
    
    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.classList.add('show');
    }
    
    hideError() {
        this.errorMessage.classList.remove('show');
    }
}

// Initialize the weather app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WeatherApp();
});
