import React from "react"

import ClearSkyDayIcon from "./clear-sky-day"
import ClearSkyNightIcon from "./clear-sky-night"
import CloudsFewDayIcon from "./clouds-few-day"
import CloudsFewNightIcon from "./clouds-few-night"
import CloudsManyIcon from "./clouds-many"
import MistIcon from "./mist"
import RainIntenseIcon from "./rain-intense"
import RainIcon from "./rain"
import SnowIntenseIcon from "./snow-intense"
import SnowIcon from "./snow"
import ThunderstormIcon from "./thunderstorm"

const getConditionIcon = (id, isDay) => {
  switch (id) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      return <ThunderstormIcon />
    case 300:
    case 301:
    case 310:
    case 311:
    case 313:
    case 321:
    case 500:
    case 501:
    case 511:
    case 520:
    case 521:
    case 531:
      return <RainIcon />
    case 302:
    case 312:
    case 314:
    case 502:
    case 503:
    case 504:
    case 522:
      return <RainIntenseIcon />
    case 600:
    case 601:
    case 611:
    case 612:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return <SnowIcon />
    case 602:
      return <SnowIntenseIcon />
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      return <MistIcon />
    case 800:
      return isDay ? <ClearSkyDayIcon /> : <ClearSkyNightIcon />
    case 801:
      return isDay ? <CloudsFewDayIcon /> : <CloudsFewNightIcon />
    case 802:
    case 803:
    case 804:
      return <CloudsManyIcon />
    default:
      return "default"
  }
}

export default getConditionIcon
