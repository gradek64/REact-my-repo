import React from 'react';

// custom
import './legend.scss';
const Legend = ({
  data, hoverHandler, swatches,
}) => {
  return (
    <div className="legend">
      {
        data.map(({ label, value }, index) =>
          (
            <div
              onMouseEnter={(e) => { hoverHandler(e, { index }); }}
              onMouseLeave={(e) => { hoverHandler(e, { index }); }}
              key={`legEl${index}`}
              className="legend-fagment"
            >
              <div className="swatches" style={{ backgroundColor: swatches[index] }} />
              <span className="labels">{label}</span>
            </div>
          ))

      }
    </div>);
};
export default Legend;
