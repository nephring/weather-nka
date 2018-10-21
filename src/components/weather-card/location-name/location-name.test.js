import React from "react";
import { shallow } from "enzyme";
import * as _ from "lodash";
import LocationName from "./location-name";

const props = {
  city: "sydney",
  country: "australia"
};

describe("location name", () => {
  const { city, country } = props;
  const wrapper = shallow(<LocationName city={city} country={country} />);

  it("renders given city && country", () => {
    const cityContainer = wrapper.find(".city");
    const countryContainer = wrapper.find(".country");
    expect(cityContainer.text()).toEqual(_.upperFirst(props.city));
    expect(countryContainer.text()).toEqual(_.toUpper(props.country));
  });
});
