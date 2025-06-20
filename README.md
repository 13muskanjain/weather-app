# Weather App

A simple and clean weather application that provides current weather information for any city worldwide. Built with vanilla HTML, CSS, and JavaScript.

## Features

- Real-time weather data from OpenWeatherMap API
- Clean and responsive user interface
- Displays current temperature, weather description, and feels-like temperature
- Shows additional weather details including humidity, wind speed, and pressure
- Error handling for invalid city names and API issues
- Mobile-friendly responsive design
- Cross-browser compatibility

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (ES6+)
- OpenWeatherMap API

## Getting Started

### Prerequisites

- A modern web browser
- Internet connection for API calls

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/13muskanjain/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Open `index.html` in your preferred web browser

### Usage

1. Enter a city name in the search input field
2. Click the "Get Weather" button or press Enter
3. View the current weather information for the specified city

## API Configuration

This application uses the OpenWeatherMap API. The API key is included for demonstration purposes. For production use, you should:

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api)
2. Generate your own API key
3. Replace the API key in `script.js`

## File Structure

```
weather-app/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and API integration
└── README.md           # Project documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Error Handling

The application includes comprehensive error handling for:
- Invalid city names
- Network connectivity issues
- API rate limiting
- Malformed API responses

## Future Enhancements

- 5-day weather forecast
- Geolocation-based weather detection
- Weather icons and animations
- Unit conversion (Celsius/Fahrenheit)
- Local storage for recent searches
- Dark mode toggle

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, please open an issue in the repository.
