import React from "react";
import * as _ from "lodash";
import he from "he";
import { shallow } from "enzyme";
import Details from "./details";
import Temperature from "../temperature/temperature";
import getConditionIcon from "../../icons/conditionIconGetter";
import { isDay, getTime, getFutureDay } from "../../../shared/utils";
import ConditionEntity from "../condition-entity/condition-entity";
import HumidityIcon from "../../icons/humidity";
import WindIcon from "../../icons/wind";
import PressureIcon from "../../icons/pressure";
import Forecast from "../forecast/forecast";

const props = {
  timezone: "europe/warsaw",
  data: {
    temp: 12,
    id: 701,
    description: "mist",
    humidity: 80,
    tempMin: 10,
    tempMax: 14,
    windSpeed: 5.4,
    pressure: 1000,
    forecast: {
      firstDay: {
        id: 800,
        description: "clear sky",
        temp: 20
      },
      secondDay: {
        id: 600,
        description: "snow",
        temp: -6
      },
      thirdDay: {
        id: 302,
        description: "rain",
        temp: 15
      }
    }
  }
};

describe("details", () => {
  const { timezone, data } = props;
  const wrapper = shallow(<Details timezone={timezone} data={data} />);

  describe("condition container", () => {
    const conditionContainer = wrapper.find(".conditionContainer");

    it("renders correctly", () => {
      expect(conditionContainer.length).toEqual(1);
    });

    it("renders temperature, condition icon and condition status with correct given props", () => {
      const temperatureComponent = conditionContainer.find(Temperature);

      expect(temperatureComponent.length).toEqual(1);
      expect(temperatureComponent.props().temp).toEqual(props.data.temp);

      const iconWrapper = conditionContainer.find(".conditionIcon");
      const ConditionIcon = getConditionIcon(
        props.data.id,
        isDay(getTime(props.timezone))
      );
      expect(iconWrapper.length).toEqual(1);
      expect(iconWrapper.children().getElement()).toEqual(ConditionIcon);

      const conditionStatusWrapper = conditionContainer.find(
        ".conditionStatus"
      );
      expect(conditionStatusWrapper.length).toEqual(1);
      expect(conditionStatusWrapper.text()).toBe(
        _.upperFirst(props.data.description)
      );
    });
  });

  describe("condition section", () => {
    const conditionSection = wrapper.find(".conditionSection");
    const conditionEntityComponent = conditionSection.find(ConditionEntity);

    it("renders four ConditionEntity components", () => {
      expect(conditionSection.children().length).toEqual(4);
      expect(conditionEntityComponent.length).toEqual(4);
    });

    describe("humidity entity", () => {
      it("renders properly with correct props", () => {
        const humidityEntity = conditionEntityComponent.at(0);

        expect(humidityEntity.props().iconComponent).toEqual(<HumidityIcon />);
        expect(humidityEntity.props().value).toEqual(`${props.data.humidity}%`);
      });
    });

    describe("min-max temp entity", () => {
      it("renders properly with correct props", () => {
        const tempValueContainer = shallow(
          conditionEntityComponent.at(1).props().value
        );
        const tempMin = tempValueContainer.find("span").at(0);
        const tempMax = tempValueContainer.find("span").at(1);

        expect(tempMin.text()).toEqual(he.decode(`${props.data.tempMin}&deg;`));
        expect(tempMax.text()).toEqual(he.decode(`${props.data.tempMax}&deg;`));
      });
    });

    describe("wind speed entity", () => {
      it("renders properly with correct props", () => {
        const windSpeedEntity = conditionEntityComponent.at(2);

        expect(windSpeedEntity.props().iconComponent).toEqual(<WindIcon />);
        expect(windSpeedEntity.props().value).toEqual(
          `${props.data.windSpeed}m/s`
        );
      });
    });

    describe("pressure entity", () => {
      it("renders properly with correct props", () => {
        const pressureEntity = conditionEntityComponent.at(3);

        expect(pressureEntity.props().iconComponent).toEqual(<PressureIcon />);
        expect(pressureEntity.props().value).toEqual(
          `${props.data.pressure}hPa`
        );
      });
    });
  });

  describe("forecast", () => {
    const forecastContainer = wrapper.find(".forecast");
    const forecastComponent = forecastContainer.find(Forecast);

    it("renders three Forecast components", () => {
      expect(forecastContainer.children().length).toEqual(3);
      expect(forecastComponent.length).toEqual(3);
    });

    describe("first day", () => {
      it("renders properly with correct props", () => {
        const firstDay = forecastComponent.at(0);

        expect(firstDay.props().data).toEqual(props.data.forecast.firstDay);
        expect(firstDay.props().day).toEqual(getFutureDay(1, props.timezone));
        expect(firstDay.props().isDay).toEqual(isDay(getTime(props.timezone)));
      });
    });

    describe("second day", () => {
      it("renders properly with correct props", () => {
        const secondDay = forecastComponent.at(1);

        expect(secondDay.props().data).toEqual(props.data.forecast.secondDay);
        expect(secondDay.props().day).toEqual(getFutureDay(2, props.timezone));
        expect(secondDay.props().isDay).toEqual(isDay(getTime(props.timezone)));
      });
    });

    describe("third day", () => {
      it("renders properly with correct props", () => {
        const thirdDay = forecastComponent.at(2);

        expect(thirdDay.props().data).toEqual(props.data.forecast.thirdDay);
        expect(thirdDay.props().day).toEqual(getFutureDay(3, props.timezone));
        expect(thirdDay.props().isDay).toEqual(isDay(getTime(props.timezone)));
      });
    });
  });
});
