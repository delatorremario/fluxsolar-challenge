export interface IWeather {
  data: {
    request: Array<Request>;
    current_condition: {
      observation_time: string;
      FeelsLikeC: string;
      temp_C: string;
      weatherIconUrl: Array<WeatherIconUrl>;
      weatherDesc: Array<WeatherDesc>;
    };
  };
}

export interface WeatherIconUrl {
  value: string;
}

export interface WeatherDesc {
  value: string;
}

export interface Request {
  type: string;
  query: string;
}
