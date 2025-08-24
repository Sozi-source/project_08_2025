export interface WeatherData {
  location: {
    name: string;         // City name
    country: string;      // Country name
    localtime: string;    // Local time in city
  };
  current: {
    temp_c: number;       // Temperature in Celsius
    feelslike_c: number;  // Feels-like temperature in Celsius
    condition: {
      text: string;       // Weather condition (e.g., "Cloudy")
      icon: string;       // Weather icon URL
    };
    wind_kph: number;     // Wind speed in km/h
    wind_dir: string;     // Wind direction (e.g., "SSE")
    humidity: number;     // Humidity %
    uv: number;           // UV index
  };
}
