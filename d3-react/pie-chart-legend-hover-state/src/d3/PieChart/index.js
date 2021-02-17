import React from 'react';
import * as d3 from 'd3';

const PieChart = (props) => {
  const {
    svgWidth, data, type, donutsPieces, swatches,
  } = props;
  console.log('data sent.....', data);
  const makePie = type => d3
    .pie()(data.map(({ value }) => value))
    .map(d => d3.arc()({
      startAngle: d.startAngle,
      endAngle: d.endAngle,
      innerRadius: type === 'donut' ? 10 : 0,
      outerRadius: svgWidth / 2 - 10,
      padAngle: type === 'donut' ? 0.03 : 0,
    }));
  return (
    <svg
      height="100%"
      width="100%"
      viewBox={`0 0 ${svgWidth}  ${svgWidth}`}
    >
      <g transform={`translate(${svgWidth / 2},${svgWidth / 2})`}>
        {
          makePie(type).map((d, i) => (
            <React.Fragment key={i}>
              <path
                d={d}
                id={i}
                ref={(ref) => {donutsPieces[i] = ref;}}
                style={{ fill: swatches[i], opacity: '0.8' }}
              />
              <text transform={`translate(${svgWidth / 2},${svgWidth / 2})`} dy=".35em">10</text>
            </React.Fragment>))
        }
      </g>
    </svg>
  );
};
export default PieChart;
