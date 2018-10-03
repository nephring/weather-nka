import React from "react"
import PropTypes from "prop-types"

class TemperatureIcon extends React.Component {
  render() {
    const { fill, size } = this.props
    return (
      <div style={{ display: "flex" }}>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 180.146 180.146"
          fill={fill}
          width={size}
          height={size}
        >
          <path
            d="M116.707,104.542V26.631C116.707,11.946,104.758,0,90.07,0C75.386,0,63.438,11.946,63.438,26.631v77.911
          c-10.013,8.046-15.879,20.135-15.879,33.091c0,23.442,19.07,42.514,42.511,42.514c23.443,0,42.517-19.071,42.517-42.514
          C132.587,124.677,126.72,112.588,116.707,104.542z M90.07,165.146c-15.17,0-27.511-12.343-27.511-27.514
          c0-9.281,4.669-17.883,12.489-23.007c2.115-1.387,3.39-3.745,3.39-6.273V26.631C78.438,20.218,83.656,15,90.07,15
          c6.417,0,11.637,5.218,11.637,11.631v81.722c0,2.529,1.274,4.888,3.39,6.273c7.821,5.124,12.49,13.725,12.49,23.007
          C117.587,152.804,105.243,165.146,90.07,165.146z"
          />
        </svg>
      </div>
    )
  }
}

TemperatureIcon.defaultProps = {
  size: "40px",
  fill: "#f8f8f8"
}

TemperatureIcon.propTypes = {
  size: PropTypes.string,
  fill: PropTypes.string
}

export default TemperatureIcon
