import React from "react";
import { shallow } from "enzyme";
import he from "he";
import Temperature from "./temperature";

const props = {
  temp: 18
};

describe("temperature", () => {
  const { temp } = props;
  const wrapper = shallow(<Temperature temp={temp} />);

  it("renders given temperature", () => {
    const tempContainer = wrapper.find(".temp");

    expect(tempContainer.length).toEqual(1);
    expect(tempContainer.text()).toEqual(he.decode(`${temp}&deg`));
  });
});
