import React from "react";
import { shallow } from "enzyme";
import WeatherCard from "./weather-card";
import LocationName from "./location-name/location-name";
import DateTime from "./date-time/date-time";
import Details from "./details/details";

const mockData = {
  id: 600,
  description: "snow",
  temp: -5,
  tempMin: -20,
  tempMax: 0,
  pressure: 1000,
  humidity: 70,
  windSpeed: 6.23,
  forecast: {
    firstDay: {
      id: 602,
      description: "intense snow",
      tempMin: -30,
      tempMax: -15
    },
    secondDay: {
      id: 601,
      description: "snow light",
      tempMin: -14,
      tempMax: -3
    },
    thirdDay: {
      id: 611,
      description: "snow heavy",
      tempMin: -19,
      tempMax: -4
    }
  },
  loading: false,
  error: false
};

const props = {
  city: "sydney",
  country: "australia",
  countryISO: "au",
  timezone: "australia/sydney",
  cityImg: "../../static/img/sydney.jpg"
};

describe("weather card", () => {
  const { timezone, city, country, countryISO, cityImg } = props;
  const wrapper = shallow(
    <WeatherCard
      city={city}
      country={country}
      timezone={timezone}
      countryISO={countryISO}
      cityImg={cityImg}
    />
  );
  wrapper.setState(mockData);

  it("should renders spinner by default", () => {
    wrapper.setState({ loading: true });
    const spinnerContainer = wrapper.find(".spinner");

    expect(spinnerContainer.length).toEqual(1);
    wrapper.setState({ loading: false });
  });

  describe("card container", () => {
    it("renders error component when error occurs", () => {
      wrapper.setState({ error: true });
      const errorContainer = wrapper.find(".cardError");

      expect(errorContainer.length).toEqual(1);
      expect(errorContainer.text()).toBe(
        "There has been problem to get data for this card"
      );
      wrapper.setState({ error: false });
    });

    it("renders when data has loaded", () => {
      const cardContainer = wrapper.find(".card");

      expect(cardContainer.length).toEqual(1);
    });

    it("renders LocationName component with given props", () => {
      const locationNameComponent = wrapper.find(LocationName);

      expect(locationNameComponent.exists()).toBe(true);
      expect(locationNameComponent.length).toEqual(1);
      expect(locationNameComponent.props().city).toEqual(city);
      expect(locationNameComponent.props().country).toEqual(country);
    });

    it("renders DateTime component with given props", () => {
      const dateTimeContainer = wrapper.find(".timeContainer");
      const dateTimeComponent = wrapper.find(DateTime);

      expect(dateTimeContainer.exists()).toBe(true);
      expect(dateTimeContainer.length).toEqual(1);
      expect(dateTimeComponent.exists()).toBe(true);
      expect(dateTimeComponent.length).toEqual(1);
      expect(dateTimeComponent.props().timezone).toEqual(timezone);
    });

    it("renders Details component with given props", () => {
      const detailsContainer = wrapper.find(".details");
      const detailsComponent = wrapper.find(Details);

      expect(detailsContainer.exists()).toBe(true);
      expect(detailsContainer.length).toEqual(1);
      expect(detailsComponent.exists()).toBe(true);
      expect(detailsComponent.length).toEqual(1);
      expect(detailsComponent.props().data).toEqual(mockData);
      expect(detailsComponent.props().timezone).toEqual(timezone);
    });
  });
});
