import React from "react"
import PropTypes from "prop-types"

class MistIcon extends React.Component {
  render() {
    const { fill, size } = this.props
    return (
      <div style={{ display: "flex" }}>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 217.43 217.43"
          fill={fill}
          width={size}
          height={size}
        >
          <g>
            <path
              d="M144.797,47.095c0-4.142-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h129.797
            C141.439,54.595,144.797,51.237,144.797,47.095z"
            />
            <path
              d="M209.93,70.405H58.632c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5H209.93c4.142,0,7.5-3.358,7.5-7.5
            S214.072,70.405,209.93,70.405z"
            />
            <path
              d="M174.53,116.214c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H22.446c-4.142,0-7.5,3.358-7.5,7.5
            c0,4.142,3.358,7.5,7.5,7.5H174.53z"
            />
            <path
              d="M199.441,132.024H47.619c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h151.822c4.142,0,7.5-3.358,7.5-7.5
            S203.583,132.024,199.441,132.024z"
            />
            <path
              d="M125.759,162.835H25.068c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h100.69c4.142,0,7.5-3.358,7.5-7.5
            C133.259,166.193,129.901,162.835,125.759,162.835z"
            />
          </g>
        </svg>
      </div>
    )
  }
}

MistIcon.defaultProps = {
  size: "40px",
  fill: "#f8f8f8"
}

MistIcon.propTypes = {
  size: PropTypes.string,
  fill: PropTypes.string
}

export default MistIcon
