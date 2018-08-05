import ClearSkyDayIcon from './clear-sky-day'
import ClearSkyNightIcon from './clear-sky-night'
import CloudsFewDayIcon from './clouds-few-day'
import CloudsFewNightIcon from './clouds-few-night'
import CloudsManyIcon from './clouds-many'
import HumidityIcon from './humidity'
import MistIcon from './mist'
import PressureIcon from './pressure'
import RainIntenseIcon from './rain-intense'
import RainIcon from './rain'
import SnowIntenseIcon from './snow-intense'
import SnowIcon from './snow'
import TemperatureIcon from './temperature'
import ThunderstormIcon from './thunderstorm'
import WindIcon from './wind'

const getConditionIcon = (id) => {
    return {
        'thunderstorm': () => <ThunderstormIcon />,
        'rain': () => <RainIcon />,
        'intense-rain': () => <RainIntenseIcon />,
        'snow': () => <SnowIcon />,
        'intense-snow': () => <SnowIntenseIcon />,
        'mist': () => <MistIcon />,
        'clear-sky': () => <ClearSkyDayIcon />, // dorobić z czasem (użyć ternary operator?)
        'clouds-few': () => <CloudsFewDayIcon />, // dorobić z czasem (użyć ternary operator?)
        'clouds-many': () => <CloudsManyIcon />,
        'default': () => 'default icon'
    }[conditionIdWrapper(id)]()
}

const conditionIdWrapper = (id) => {
    if (id === 200 || id === 201 ||
        id === 202 || id === 210 ||
        id === 211 || id === 212 ||
        id === 221 || id === 230 ||
        id === 231 || id === 232) {
           return 'thunderstorm'
    } else {
        return 'default'
    }

    if (id === 300 || id === 301 ||
        id === 310 || id === 311 || 
        id === 313 || id === 321 ||
        id === 500 || id === 501 ||
        id === 511 || id === 520 || 
        id === 521 || id === 531) {
        return 'rain'
    } else {
        return 'default'
    }

    if (id === 302 || id === 312 || 
        id === 314 || id === 502 ||
        id === 503 || id === 504 ||
        id === 522) {
        return 'intense-rain'
    } else {
        return 'default'
    }
    
    if (id === 600 || id === 601 ||
        id === 611 || id === 612 || 
        id === 615 || id === 616 ||
        id === 620 || id === 621 ||
        id === 622) {
        return 'snow'
    } else {
        return 'default'
    }

    if (id === 602) {
        return 'intense-snow'
    } else {
        return 'default'
    }

    if (id === 701 || id === 711 ||
        id === 721 || id === 731 || 
        id === 741 || id === 751 ||
        id === 761 || id === 762 ||
        id === 771 || id === 781) {
        return 'mist'
    } else {
        return 'default'
    }

    if (id === 800) {
        return 'clear-sky'
    } else {
        return 'default'
    }

    if (id === 801) {
        return 'clouds-few'
    } else {
        return 'default'
    }

    if (id === 802 || id === 803 || id === 804) {
        return 'clouds-many'
    } else {
        return 'default'
    }
}