import React from 'react';

// custom
import Modal from '../../../Modal';
import ToggleButton from '../../../ToggleButton';
import DropDown from '../../../DropDown';
import customEvent from '../../../utils/customEvents/dispatchEvent';

const Home = () => (
  <div className="helloworld">
    <h2>Weclcome to webpack 4 and babel7</h2>

    <button type="button" onClick={() => { customEvent.emit('OPEN_MODAL'); }}>Open Modal</button>
    <ToggleButton
      action={() => { console.log('works'); }}
      label="sort"
      toggleLabels={['ASC', 'DESC']}
      values={['sortASC', 'sortDESC']}
    />
    <DropDown label="DropDown">
      <ul>
        <li>
         1
        </li>
        <li>
          2
        </li>
      </ul>
    </DropDown>

    <Modal eventOn="OPEN_MODAL">
      <p> this is my Modal</p>
    </Modal>
  </div>
);

export default Home;
