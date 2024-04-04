export const cities = ['Kollam',"Ernakulam","Thiruvanandhapuram","Kochi","Oachira","Karunagappally"]
export const USER_API = "http://localhost:3000/api/user"
export const WHEATHER_API = "http://localhost:3000/api"
export const WHEATHER_APP_API = "http://api.weatherapi.com/v1/current.json?key=7c3570f068524567b3371824240304"
export const API_KEY = "7c3570f068524567b3371824240304"
export const GEOCODE_API  = "6c16a238773d4bbfbe23af52b727ad41"
const api=// 20240331110217
// https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=df2ad6e3d8e00d953a8f0eb8fffc1488

{
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1711821600,
      "main": {
        "temp": 282.49,
        "feels_like": 280.09,
        "temp_min": 281.67,
        "temp_max": 282.49,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 993,
        "humidity": 79,
        "temp_kf": 0.82
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.57,
        "deg": 207,
        "gust": 13.04
      },
      "visibility": 10000,
      "pop": 0.71,
      "rain": {
        "3h": 0.51
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-03-30 18:00:00"
    },
    {
      "dt": 1711832400,
      "main": {
        "temp": 281.82,
        "feels_like": 279.62,
        "temp_min": 280.48,
        "temp_max": 281.82,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 993,
        "humidity": 84,
        "temp_kf": 1.34
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 95
      },
      "wind": {
        "speed": 3.8,
        "deg": 235,
        "gust": 10.7
      },
      "visibility": 10000,
      "pop": 0.96,
      "rain": {
        "3h": 0.44
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-03-30 21:00:00"
    },
    {
      "dt": 1711843200,
      "main": {
        "temp": 280.53,
        "feels_like": 278.64,
        "temp_min": 279.55,
        "temp_max": 280.53,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 995,
        "humidity": 91,
        "temp_kf": 0.98
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 89
      },
      "wind": {
        "speed": 2.81,
        "deg": 267,
        "gust": 8.25
      },
      "visibility": 10000,
      "pop": 0.52,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-03-31 00:00:00"
    },
    {
      "dt": 1711854000,
      "main": {
        "temp": 277.79,
        "feels_like": 275.96,
        "temp_min": 277.79,
        "temp_max": 277.79,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 996,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 84
      },
      "wind": {
        "speed": 2.14,
        "deg": 303,
        "gust": 2.8
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-03-31 03:00:00"
    },
    {
      "dt": 1711864800,
      "main": {
        "temp": 279.97,
        "feels_like": 279.38,
        "temp_min": 279.97,
        "temp_max": 279.97,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 998,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 47
      },
      "wind": {
        "speed": 1.34,
        "deg": 307,
        "gust": 2.49
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-03-31 06:00:00"
    },
    {
      "dt": 1711875600,
      "main": {
        "temp": 283.79,
        "feels_like": 282.53,
        "temp_min": 283.79,
        "temp_max": 283.79,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 999,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 10
      },
      "wind": {
        "speed": 0.87,
        "deg": 209,
        "gust": 1.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-03-31 09:00:00"
    },
    {
      "dt": 1711886400,
      "main": {
        "temp": 286.04,
        "feels_like": 284.72,
        "temp_min": 286.04,
        "temp_max": 286.04,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 999,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 55
      },
      "wind": {
        "speed": 2.13,
        "deg": 178,
        "gust": 3.57
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-03-31 12:00:00"
    },
    {
      "dt": 1711897200,
      "main": {
        "temp": 284.85,
        "feels_like": 283.64,
        "temp_min": 284.85,
        "temp_max": 284.85,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 998,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.21,
        "deg": 161,
        "gust": 4.1
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-03-31 15:00:00"
    },
    {
      "dt": 1711908000,
      "main": {
        "temp": 282.06,
        "feels_like": 280.53,
        "temp_min": 282.06,
        "temp_max": 282.06,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 998,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 2.72,
        "deg": 141,
        "gust": 6.95
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-03-31 18:00:00"
    },
    {
      "dt": 1711918800,
      "main": {
        "temp": 281.2,
        "feels_like": 279.42,
        "temp_min": 281.2,
        "temp_max": 281.2,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 996,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.85,
        "deg": 141,
        "gust": 7.83
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-03-31 21:00:00"
    },
    {
      "dt": 1711929600,
      "main": {
        "temp": 281.02,
        "feels_like": 279.26,
        "temp_min": 281.02,
        "temp_max": 281.02,
        "pressure": 1013,
        "sea_level": 1013,
        "grnd_level": 995,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.77,
        "deg": 157,
        "gust": 6.91
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-01 00:00:00"
    },
    {
      "dt": 1711940400,
      "main": {
        "temp": 280.43,
        "feels_like": 278.36,
        "temp_min": 280.43,
        "temp_max": 280.43,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 994,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.05,
        "deg": 165,
        "gust": 10.77
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-01 03:00:00"
    },
    {
      "dt": 1711951200,
      "main": {
        "temp": 283.41,
        "feels_like": 282.35,
        "temp_min": 283.41,
        "temp_max": 283.41,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 992,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 4.12,
        "deg": 176,
        "gust": 13.29
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-01 06:00:00"
    },
    {
      "dt": 1711962000,
      "main": {
        "temp": 286.77,
        "feels_like": 285.73,
        "temp_min": 286.77,
        "temp_max": 286.77,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 991,
        "humidity": 59,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 5.3,
        "deg": 184,
        "gust": 12.88
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-01 09:00:00"
    },
    {
      "dt": 1711972800,
      "main": {
        "temp": 289.6,
        "feels_like": 288.74,
        "temp_min": 289.6,
        "temp_max": 289.6,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 989,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 5.73,
        "deg": 197,
        "gust": 9.97
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-01 12:00:00"
    },
    {
      "dt": 1711983600,
      "main": {
        "temp": 287.56,
        "feels_like": 286.7,
        "temp_min": 287.56,
        "temp_max": 287.56,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 989,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 5.79,
        "deg": 193,
        "gust": 12.35
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-01 15:00:00"
    },
    {
      "dt": 1711994400,
      "main": {
        "temp": 284.78,
        "feels_like": 284.11,
        "temp_min": 284.78,
        "temp_max": 284.78,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 988,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 96
      },
      "wind": {
        "speed": 3.68,
        "deg": 194,
        "gust": 10.92
      },
      "visibility": 7405,
      "pop": 0.26,
      "rain": {
        "3h": 0.41
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-01 18:00:00"
    },
    {
      "dt": 1712005200,
      "main": {
        "temp": 284.04,
        "feels_like": 283.59,
        "temp_min": 284.04,
        "temp_max": 284.04,
        "pressure": 1004,
        "sea_level": 1004,
        "grnd_level": 986,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 4.15,
        "deg": 200,
        "gust": 11.9
      },
      "visibility": 10000,
      "pop": 0.8,
      "rain": {
        "3h": 1.14
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-01 21:00:00"
    },
    {
      "dt": 1712016000,
      "main": {
        "temp": 283.15,
        "feels_like": 281.47,
        "temp_min": 283.15,
        "temp_max": 283.15,
        "pressure": 1003,
        "sea_level": 1003,
        "grnd_level": 986,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 89
      },
      "wind": {
        "speed": 3.35,
        "deg": 211,
        "gust": 10.21
      },
      "visibility": 10000,
      "pop": 0.76,
      "rain": {
        "3h": 0.46
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-02 00:00:00"
    },
    {
      "dt": 1712026800,
      "main": {
        "temp": 282.1,
        "feels_like": 280.43,
        "temp_min": 282.1,
        "temp_max": 282.1,
        "pressure": 1003,
        "sea_level": 1003,
        "grnd_level": 985,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 2.95,
        "deg": 211,
        "gust": 9.03
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-02 03:00:00"
    },
    {
      "dt": 1712037600,
      "main": {
        "temp": 284.77,
        "feels_like": 284.23,
        "temp_min": 284.77,
        "temp_max": 284.77,
        "pressure": 1003,
        "sea_level": 1003,
        "grnd_level": 985,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 10
      },
      "wind": {
        "speed": 2.52,
        "deg": 200,
        "gust": 6.07
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-02 06:00:00"
    },
    {
      "dt": 1712048400,
      "main": {
        "temp": 289.84,
        "feels_like": 289.29,
        "temp_min": 289.84,
        "temp_max": 289.84,
        "pressure": 1002,
        "sea_level": 1002,
        "grnd_level": 985,
        "humidity": 66,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 45
      },
      "wind": {
        "speed": 2.62,
        "deg": 180,
        "gust": 4.5
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-02 09:00:00"
    },
    {
      "dt": 1712059200,
      "main": {
        "temp": 291.37,
        "feels_like": 290.87,
        "temp_min": 291.37,
        "temp_max": 291.37,
        "pressure": 1001,
        "sea_level": 1001,
        "grnd_level": 984,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 72
      },
      "wind": {
        "speed": 3.48,
        "deg": 182,
        "gust": 5.65
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-02 12:00:00"
    },
    {
      "dt": 1712070000,
      "main": {
        "temp": 289.67,
        "feels_like": 289.23,
        "temp_min": 289.67,
        "temp_max": 289.67,
        "pressure": 1000,
        "sea_level": 1000,
        "grnd_level": 982,
        "humidity": 71,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.02,
        "deg": 168,
        "gust": 7.04
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-02 15:00:00"
    },
    {
      "dt": 1712080800,
      "main": {
        "temp": 287.08,
        "feels_like": 286.64,
        "temp_min": 287.08,
        "temp_max": 287.08,
        "pressure": 998,
        "sea_level": 998,
        "grnd_level": 981,
        "humidity": 81,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.69,
        "deg": 156,
        "gust": 11.34
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-02 18:00:00"
    },
    {
      "dt": 1712091600,
      "main": {
        "temp": 285.38,
        "feels_like": 284.8,
        "temp_min": 285.38,
        "temp_max": 285.38,
        "pressure": 996,
        "sea_level": 996,
        "grnd_level": 979,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.01,
        "deg": 145,
        "gust": 13.12
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-02 21:00:00"
    },
    {
      "dt": 1712102400,
      "main": {
        "temp": 285.93,
        "feels_like": 285.14,
        "temp_min": 285.93,
        "temp_max": 285.93,
        "pressure": 994,
        "sea_level": 994,
        "grnd_level": 977,
        "humidity": 72,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 5.29,
        "deg": 177,
        "gust": 14.17
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-03 00:00:00"
    },
    {
      "dt": 1712113200,
      "main": {
        "temp": 284.71,
        "feels_like": 283.93,
        "temp_min": 284.71,
        "temp_max": 284.71,
        "pressure": 994,
        "sea_level": 994,
        "grnd_level": 977,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 6.31,
        "deg": 206,
        "gust": 13.2
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-03 03:00:00"
    },
    {
      "dt": 1712124000,
      "main": {
        "temp": 283.92,
        "feels_like": 282.7,
        "temp_min": 283.92,
        "temp_max": 283.92,
        "pressure": 996,
        "sea_level": 996,
        "grnd_level": 979,
        "humidity": 63,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 61
      },
      "wind": {
        "speed": 6.89,
        "deg": 222,
        "gust": 13.11
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-03 06:00:00"
    },
    {
      "dt": 1712134800,
      "main": {
        "temp": 286.17,
        "feels_like": 284.91,
        "temp_min": 286.17,
        "temp_max": 286.17,
        "pressure": 997,
        "sea_level": 997,
        "grnd_level": 979,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 7.54,
        "deg": 212,
        "gust": 12.18
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-03 09:00:00"
    },
    {
      "dt": 1712145600,
      "main": {
        "temp": 287.86,
        "feels_like": 286.54,
        "temp_min": 287.86,
        "temp_max": 287.86,
        "pressure": 996,
        "sea_level": 996,
        "grnd_level": 979,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 37
      },
      "wind": {
        "speed": 7.55,
        "deg": 203,
        "gust": 13.55
      },
      "visibility": 10000,
      "pop": 0.02,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-03 12:00:00"
    },
    {
      "dt": 1712156400,
      "main": {
        "temp": 286.17,
        "feels_like": 284.91,
        "temp_min": 286.17,
        "temp_max": 286.17,
        "pressure": 996,
        "sea_level": 996,
        "grnd_level": 979,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 53
      },
      "wind": {
        "speed": 6.75,
        "deg": 201,
        "gust": 13.77
      },
      "visibility": 10000,
      "pop": 0.8,
      "rain": {
        "3h": 0.44
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-03 15:00:00"
    },
    {
      "dt": 1712167200,
      "main": {
        "temp": 284.43,
        "feels_like": 283.21,
        "temp_min": 284.43,
        "temp_max": 284.43,
        "pressure": 997,
        "sea_level": 997,
        "grnd_level": 979,
        "humidity": 61,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 75
      },
      "wind": {
        "speed": 5.6,
        "deg": 184,
        "gust": 12.11
      },
      "visibility": 10000,
      "pop": 0.88,
      "rain": {
        "3h": 0.53
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-03 18:00:00"
    },
    {
      "dt": 1712178000,
      "main": {
        "temp": 281.6,
        "feels_like": 279.32,
        "temp_min": 281.6,
        "temp_max": 281.6,
        "pressure": 997,
        "sea_level": 997,
        "grnd_level": 980,
        "humidity": 78,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.86,
        "deg": 254,
        "gust": 7.11
      },
      "visibility": 10000,
      "pop": 0.35,
      "rain": {
        "3h": 0.14
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-03 21:00:00"
    },
    {
      "dt": 1712188800,
      "main": {
        "temp": 279.54,
        "feels_like": 277.01,
        "temp_min": 279.54,
        "temp_max": 279.54,
        "pressure": 998,
        "sea_level": 998,
        "grnd_level": 980,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.48,
        "deg": 218,
        "gust": 6.42
      },
      "visibility": 10000,
      "pop": 0.67,
      "rain": {
        "3h": 1.14
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2024-04-04 00:00:00"
    },
    {
      "dt": 1712199600,
      "main": {
        "temp": 278.5,
        "feels_like": 276.1,
        "temp_min": 278.5,
        "temp_max": 278.5,
        "pressure": 999,
        "sea_level": 999,
        "grnd_level": 981,
        "humidity": 89,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.97,
        "deg": 281,
        "gust": 4.26
      },
      "visibility": 10000,
      "pop": 0.9,
      "rain": {
        "3h": 1.08
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-04 03:00:00"
    },
    {
      "dt": 1712210400,
      "main": {
        "temp": 278.71,
        "feels_like": 276.45,
        "temp_min": 278.71,
        "temp_max": 278.71,
        "pressure": 1001,
        "sea_level": 1001,
        "grnd_level": 983,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 2.83,
        "deg": 253,
        "gust": 3.93
      },
      "visibility": 10000,
      "pop": 0.88,
      "rain": {
        "3h": 0.15
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-04 06:00:00"
    },
    {
      "dt": 1712221200,
      "main": {
        "temp": 279.12,
        "feels_like": 276.94,
        "temp_min": 279.12,
        "temp_max": 279.12,
        "pressure": 1003,
        "sea_level": 1003,
        "grnd_level": 985,
        "humidity": 80,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.84,
        "deg": 268,
        "gust": 3.71
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-04 09:00:00"
    },
    {
      "dt": 1712232000,
      "main": {
        "temp": 280.31,
        "feels_like": 277.46,
        "temp_min": 280.31,
        "temp_max": 280.31,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 987,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 4.41,
        "deg": 302,
        "gust": 5.54
      },
      "visibility": 10000,
      "pop": 0.2,
      "rain": {
        "3h": 0.25
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-04 12:00:00"
    },
    {
      "dt": 1712242800,
      "main": {
        "temp": 276.04,
        "feels_like": 271.86,
        "temp_min": 276.04,
        "temp_max": 276.04,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 989,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 98
      },
      "wind": {
        "speed": 4.98,
        "deg": 321,
        "gust": 7.99
      },
      "visibility": 6113,
      "pop": 0.06,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2024-04-04 15:00:00"
    }
  ],
  "city": {
    "id": 524901,
    "name": "Moscow",
    "coord": {
      "lat": 55.7522,
      "lon": 37.6156
    },
    "country": "RU",
    "population": 0,
    "timezone": 10800,
    "sunrise": 1711767892,
    "sunset": 1711814562
  }
}