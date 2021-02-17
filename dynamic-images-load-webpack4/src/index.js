import React from 'react';
import ReactDOM from 'react-dom';
import StaticImage from './InsertStaticImage';
import DynamicImagesLoad from './InsertDynamicImages';
//import GenerateResposiveImages from './GenerateResposiveImages';

// custom
import ProposalClassProperties from './ES7-proposal-class-properties/ProposalClassProperties';

const Index = () => (
  <div className="helloworld">
    <h2>Weclcome to webpack 4 and babel7</h2>
    <StaticImage />
    <ProposalClassProperties />
    <DynamicImagesLoad />
    {/* <GenerateResposiveImages /> */}
  </div>
);

ReactDOM.render(<Index />, document.querySelector('#root'));
