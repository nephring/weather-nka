import React from 'react'

class CloudsFewDayIcon extends React.Component {
  
  render () {
    return (
      <div style={{display: 'flex'}}>
      <svg 
        version="1.1" 
        x="0px" 
        y="0px"
        viewBox="0 0 274.934 274.934"
        fill={this.props.fill}
        width={this.props.size}
        height={this.props.size}>
        <g>
          <path d="M109.906,204.389c-4.143,0-7.5,3.358-7.5,7.5v21.325c0,4.142,3.357,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-21.325
            C117.406,207.747,114.049,204.389,109.906,204.389z"/>
          <path d="M109.906,57.258c4.142,0,7.5-3.358,7.5-7.5V28.433c0-4.142-3.358-7.5-7.5-7.5c-4.143,0-7.5,3.358-7.5,7.5v21.325
            C102.406,53.9,105.764,57.258,109.906,57.258z"/>
          <path d="M47.275,78.801c1.465,1.464,3.384,2.196,5.303,2.196c1.92,0,3.84-0.732,5.305-2.198c2.928-2.93,2.927-7.678-0.002-10.606
            L42.799,53.116c-2.932-2.929-7.68-2.928-10.607,0.002c-2.928,2.93-2.927,7.678,0.002,10.606L47.275,78.801z"/>
          <path d="M183.463,130.825c0,4.142,3.357,7.5,7.5,7.5h21.324c4.143,0,7.5-3.358,7.5-7.5c0-4.142-3.357-7.5-7.5-7.5h-21.324
            C186.82,123.325,183.463,126.683,183.463,130.825z"/>
          <path d="M36.334,130.825c0-4.142-3.357-7.5-7.5-7.5H7.5c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h21.334
            C32.977,138.325,36.334,134.967,36.334,130.825z"/>
          <path d="M167.217,80.997c1.919,0,3.839-0.732,5.304-2.197l15.076-15.076c2.929-2.929,2.929-7.678,0-10.606
            c-2.93-2.929-7.678-2.929-10.607,0l-15.076,15.076c-2.929,2.929-2.929,7.678,0,10.606
            C163.378,80.264,165.298,80.997,167.217,80.997z"/>
          <path d="M47.267,182.84l-15.074,15.076c-2.929,2.929-2.929,7.678,0.001,10.606c1.464,1.464,3.384,2.196,5.303,2.196
            s3.839-0.732,5.304-2.197l15.074-15.076c2.929-2.929,2.929-7.678-0.001-10.606C54.945,179.911,50.196,179.911,47.267,182.84z"/>
          <path d="M168.27,130.825c0-32.189-26.186-58.377-58.373-58.377c-32.189,0-58.377,26.188-58.377,58.377
            c0,32.188,26.188,58.375,58.377,58.375C142.084,189.2,168.27,163.013,168.27,130.825z M66.52,130.825
            c0-23.918,19.459-43.377,43.377-43.377c23.916,0,43.373,19.459,43.373,43.377c0,23.917-19.457,43.375-43.373,43.375
            C85.979,174.2,66.52,154.742,66.52,130.825z"/>
          <path d="M239.591,184.247c-6.395-12.787-19.896-21.297-34.702-21.297c-20.344,0-37.064,15.526-38.517,35.144
            c-13.319,2.421-23.439,13.93-23.439,27.72c0,15.542,12.856,28.188,28.66,28.188h67.838c19.576,0,35.502-15.646,35.502-34.877
            C274.934,199.945,259.094,184.333,239.591,184.247z M239.432,239.001h-67.838c-7.532,0-13.66-5.916-13.66-13.188
            c0-7.272,6.128-13.189,13.66-13.189c0.441,0,0.964,0.037,1.644,0.115c2.308,0.265,4.617-0.553,6.24-2.223
            c1.623-1.669,2.378-3.998,2.045-6.302c-0.168-1.158-0.253-2.283-0.253-3.344c0-12.639,10.596-22.921,23.619-22.921
            c10.378,0,19.686,6.738,22.639,16.386c1.103,3.603,4.71,5.83,8.422,5.2c1.137-0.192,2.309-0.29,3.482-0.29
            c11.305,0,20.502,8.917,20.502,19.877C259.934,230.083,250.736,239.001,239.432,239.001z"/>
        </g>
      </svg>
    </div>
    )
  }
}

CloudsFewDayIcon.defaultProps = {
  size: "40px",
  fill: "#f8f8f8"
}

export default CloudsFewDayIcon