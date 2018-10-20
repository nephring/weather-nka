import React from "react";
import PropTypes from "prop-types";

class PressureIcon extends React.Component {
  render() {
    const { fill, size } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 191.85 191.85"
          fill={fill}
          width={size}
          height={size}
        >
          <g>
            <path
              d="M36.978,56.937c11.167,0,21.767-4.545,29.476-12.293c7.71,7.749,18.309,12.293,29.476,12.293
            c11.169,0,21.767-4.543,29.472-12.29c7.709,7.747,18.307,12.29,29.476,12.29c14.778,0,28.559-7.958,35.966-20.767
            c2.073-3.586,0.847-8.174-2.739-10.247c-3.586-2.071-8.174-0.847-10.247,2.739c-4.733,8.188-13.539,13.275-22.979,13.275
            c-9.442,0-18.25-5.087-22.983-13.275c-1.341-2.318-3.816-3.747-6.494-3.746c-2.679,0-5.153,1.429-6.493,3.748
            c-4.73,8.188-13.534,13.273-22.977,13.273c-9.439,0-18.247-5.088-22.987-13.278c-1.341-2.317-3.815-3.744-6.491-3.744h-0.002
            c-2.677,0-5.151,1.428-6.491,3.746c-4.733,8.188-13.539,13.275-22.98,13.275c-9.442,0-18.25-5.087-22.983-13.275
            c-2.073-3.585-6.661-4.813-10.247-2.739c-3.586,2.073-4.813,6.661-2.739,10.247C8.415,48.979,22.197,56.937,36.978,56.937z"
            />
            <path
              d="M188.103,80.922c-3.586-2.071-8.174-0.848-10.247,2.739c-4.733,8.188-13.539,13.275-22.979,13.275
            c-9.442,0-18.25-5.087-22.983-13.275c-1.341-2.318-3.816-3.747-6.494-3.746c-2.679,0-5.153,1.429-6.493,3.748
            c-4.73,8.188-13.534,13.273-22.977,13.273c-9.439,0-18.247-5.088-22.987-13.278c-1.341-2.317-3.815-3.744-6.491-3.744h-0.002
            c-2.677,0-5.151,1.428-6.491,3.746c-4.733,8.188-13.539,13.275-22.98,13.275c-9.442,0-18.25-5.087-22.983-13.275
            c-2.073-3.586-6.661-4.813-10.247-2.739c-3.586,2.073-4.813,6.661-2.739,10.247c7.406,12.81,21.188,20.768,35.97,20.768
            c11.167,0,21.767-4.545,29.476-12.293c7.71,7.749,18.309,12.293,29.476,12.293c11.169,0,21.767-4.543,29.472-12.29
            c7.709,7.747,18.307,12.29,29.476,12.29c14.778,0,28.559-7.957,35.966-20.768C192.915,87.583,191.689,82.995,188.103,80.922z"
            />
            <path
              d="M188.103,135.922c-3.586-2.072-8.174-0.848-10.247,2.739c-4.733,8.188-13.539,13.275-22.979,13.275
            c-9.442,0-18.25-5.087-22.983-13.275c-1.341-2.318-3.816-3.747-6.494-3.746c-2.679,0-5.153,1.429-6.493,3.748
            c-4.73,8.188-13.534,13.273-22.977,13.273c-9.439,0-18.247-5.088-22.987-13.278c-1.341-2.317-3.815-3.744-6.491-3.744h-0.002
            c-2.677,0-5.151,1.428-6.491,3.746c-4.733,8.188-13.539,13.275-22.98,13.275c-9.442,0-18.25-5.087-22.983-13.275
            c-2.073-3.586-6.661-4.812-10.247-2.739c-3.586,2.073-4.813,6.661-2.739,10.247c7.406,12.81,21.188,20.768,35.97,20.768
            c11.167,0,21.767-4.545,29.476-12.293c7.71,7.749,18.309,12.293,29.476,12.293c11.169,0,21.767-4.543,29.472-12.29
            c7.709,7.747,18.307,12.29,29.476,12.29c14.778,0,28.559-7.958,35.966-20.768C192.915,142.583,191.689,137.995,188.103,135.922z"
            />
          </g>
        </svg>
      </div>
    );
  }
}

PressureIcon.defaultProps = {
  size: "25px",
  fill: "#f8f8f8"
};

PressureIcon.propTypes = {
  size: PropTypes.string,
  fill: PropTypes.string
};

export default PressureIcon;
