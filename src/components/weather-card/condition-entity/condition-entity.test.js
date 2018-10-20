import React from "react";
import { shallow } from "enzyme";

import ConditionEntity from "./condition-entity";

const FakeIconComponent = () => <svg>icom here</svg>;

describe("condition-entity", () => {
  it("renders value prop when passed in", () => {
    const value = "10 m/s";
    const wrapper = shallow(<ConditionEntity value={value} />);

    expect(wrapper.find("span").text()).toBe("10 m/s");
  });

  it("renders value prop as jsx when passed in", () => {
    const value1 = "10&deg;";
    const value2 = "20&deg;";
    const wrapper = shallow(
      <ConditionEntity
        value={
          <div className="container">
            <span>{value1}</span>
            <span>{value2}</span>
          </div>
        }
      />
    );
    const container = wrapper.find(".container");
    expect(container.length).toEqual(1);
    expect(
      container
        .find("span")
        .at(0)
        .text()
    ).toBe(value1);
    expect(
      container
        .find("span")
        .at(1)
        .text()
    ).toBe(value2);
  });

  it("renders iconComponent prop when passed in", () => {
    const wrapper = shallow(
      <ConditionEntity iconComponent={<FakeIconComponent />} />
    );
    expect(wrapper.find(FakeIconComponent).exists()).toBe(true);
  });
});
