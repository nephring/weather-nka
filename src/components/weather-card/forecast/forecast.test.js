import React from "react";
import { shallow } from "enzyme";
import he from "he";
import getConditionIcon from "./../../icons/conditionIconGetter";
import { getTime, isDay, getDay } from "../../../shared/utils";

import Forecast from "./forecast";

const timezone = "australia/sydney";
const props = {
  data: {
    id: 802,
    temp: 20
  },
  isDay: isDay(getTime(timezone)),
  day: getDay(timezone)
};

describe("forecast", () => {
  const { data, isDay, day } = props;
  const { id } = props.data;
  const wrapper = shallow(<Forecast data={data} isDay={isDay} day={day} />);

  it("renders correct condition icon", () => {
    const iconContainer = wrapper.find(".icon");
    const ConditionIcon = getConditionIcon(id, isDay);

    expect(iconContainer.children().length).toEqual(1);
    expect(iconContainer.children().getElement()).toEqual(ConditionIcon);
  });

  it("renders correct day", () => {
    const dayContainer = wrapper.find(".day");

    expect(dayContainer.length).toEqual(1);
    expect(dayContainer.children().text()).toEqual(props.day);
  });

  it("renders correct temperature", () => {
    const tempContainer = wrapper.find(".temp");

    expect(tempContainer.length).toEqual(1);
    expect(tempContainer.children().text()).toEqual(
      he.decode(`${props.data.temp}&deg;`)
    );
  });
});
