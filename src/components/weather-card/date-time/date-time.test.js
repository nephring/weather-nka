import React from "react"
import { shallow } from "enzyme"

import DateTime from "./date-time"
import { getTime, getDate } from "./date-time"

describe("date-time component", () => {
  const timezone = "australia/sydney"
  const setup = () => {
    return shallow(<DateTime timezone={timezone} />)
  }
  const date = getDate(timezone)
  const time = getTime(timezone)

  it("shoud have proper state based on timezone", () => {
    const wrapper = setup()

    expect(wrapper.state("date")).toBe(date)
    expect(wrapper.state("time")).toBe(time)
  })

  it("renders proper time and date based on timezone", () => {
    const wrapper = setup()
    const timeFromState = wrapper
      .find("p")
      .at(0)
      .text()
    const dateFromState = wrapper
      .find("p")
      .at(1)
      .text()

    expect(dateFromState).toBe(date)
    expect(timeFromState).toBe(time)
  })
})
