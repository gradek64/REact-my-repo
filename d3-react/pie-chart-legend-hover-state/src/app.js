import React from 'react';
import ReactDOM from 'react-dom';

// custom imports
import dataProper from './data/dataProper.json';
import Legend from './functional/Legend';
import PieChart from './d3/PieChart';
import './styles.scss';

const getDataFromLevel = levelSet => new Promise((resolve, reject) => {
  const flattenObjectArray = levelSet.reduce((r, k) => r.concat([], dataProper[k]), []);
  // collect keys remove duplicates;
  const keys = flattenObjectArray.reduce((acc, obj) => {
    Object.keys(obj).map((e, i) => !acc.includes(e) && acc.push(e));
    return acc;
  }, []);

  const sumObjects = {};
  let contatObjects = [];
  flattenObjectArray.forEach((ew, start = 0) => {
    contatObjects = [];
    flattenObjectArray.forEach((item, index) => {
      if (item.hasOwnProperty(keys[start])) {
        contatObjects.push(item[keys[start]]);
        const sum = contatObjects.reduce((acc, e) => acc + e);
        sumObjects[keys[start]] = sum;
      }
    });
  });
  // resolve promise;
  resolve(sumObjects);
});


const preparePieFormatData = async (levelsSet) => {
  const dataLevel = await getDataFromLevel(levelsSet);
  return Object.keys(dataLevel).reduce((acc, key, index) => {
    acc.push({
      label: key,
      value: dataLevel[key],
    });
    return acc;
  }, []);
};


class Chart extends React.Component {
  state = {
    formatedData: null,
  };

  donutsPieces = [];
  swatches = ['#17253c', '#5d9021', '#8bc18e', '#436db5']

  componentDidMount = () => {
    const levels = ['table1'];
    preparePieFormatData(levels).then((pieData) => {
      this.setState({ formatedData: pieData });
    });
  }

  onChangeHanlder = (e) => {
    const { value } = e.target; 
    preparePieFormatData(value.split(',')).then((pieData) => {
      this.setState({ formatedData: pieData });
    });
  };

  hightlightSVG = (e, { index }) => {
    if (e.type === 'mouseenter') {
      this.donutsPieces[index].setAttribute('stroke', '#b55193');
    }
    if (e.type === 'mouseleave') {
      this.donutsPieces[index].setAttribute('stroke', 'transparent');
    }
  }

  render() {
    const { formatedData } = this.state;
    return (
      <div>
        <div className="container">
          <div className="controls" >
            <h2>select data below</h2>
            <label className="container-radio-button">table1
              <input type="radio" 
                name="radioGroupBttns" 
                value="table1" 
                defaultChecked 
                onChange={this.onChangeHanlder} />
              <span className="checkmark" />
            </label>
            <label className="container-radio-button">table1&table2
              <input type="radio" name="radioGroupBttns" value="table1,table2"  onChange={this.onChangeHanlder} />
              <span className="checkmark" />
            </label>
          </div>
          <div id="circle1">
            {formatedData ? 
              <PieChart data={formatedData} 
                type="donut" 
                svgWidth={80} 
                donutsPieces={this.donutsPieces} 
                swatches={this.swatches}/> 
              : 'loading'}
            {formatedData ? <Legend 
              data={formatedData} 
              hoverHandler={this.hightlightSVG} 
              swatches={this.swatches} /> 
              : 'loading'
            }
          </div>
        </div>
      </div>);
  }
}


ReactDOM.render(<Chart />, document.getElementById('app'));
