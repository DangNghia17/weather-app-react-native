export default interface WeatherData {
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
    sea_level: number;
  };
  sys: {
    country: string;
  };
  name: string;
  wind: {
    deg: number;
    speed: number;
  };
}
