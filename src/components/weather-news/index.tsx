import Image from "next/image";
import Props from "../types";

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeatherNews: React.FC<Props> = ({ weatherNews }) => {
  const currentWeatherMain = weatherNews.current.weather[0].main;
  const currentWeatherTemp = weatherNews.current.temp;
  const currentWeatherIcon =
    weatherNews.current.weather[0].icon.slice(0, 2) + "d";
  return (
    <section>
      <div>
        <a>{currentWeatherMain}</a>
        <p>{currentWeatherTemp.toString().slice(0, 1) + "°C"}</p>
        <Image
          src={`/img/weatherIcons/${currentWeatherIcon}.png`}
          loading="eager"
          width={38}
          height={38}
          priority
        />
      </div>
      <div>
        <ul>
          {weatherNews.daily.map((date, index) => {
            const time = new Date(date.dt * 1000);
            let day = week[time.getDay()];
            const nowDay = week[new Date().getDay()];
            if (day == nowDay) {
              day = "Today";
            }
            if (index > 4) {
              return;
            }
            return (
              <li key={index}>
                <p>{day}</p>
                <span>
                  <Image
                    src={`/img/weatherIcons/${date.weather[0].icon}.png`}
                    loading="eager"
                    width={41}
                    height={41}
                    priority
                  />
                </span>
                <div>
                  <p>{parseInt(date.temp.max.toLocaleString(), 10)}°C</p>
                  <p>{parseInt(date.temp.min.toLocaleString(), 10)}°C</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WeatherNews;
