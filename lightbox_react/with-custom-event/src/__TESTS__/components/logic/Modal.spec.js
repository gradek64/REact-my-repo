import React from 'react';
import { mount, shallow } from 'enzyme';
import Modal from '../../../components/logic/Modal';

//custom
import customEvent from '../../../customEvents/dispatchEvent';

//spy on customEvent.emit
jest.spyOn(customEvent, 'on').mockImplementation(() => {});
//same as below
//customEvent.on = jest.fn(() => {});

describe('Modal', () => {
  const initialprops = {
    eventOn: 'OPEN_MODAL',
    children: {},
  };
  it('should render correctly', () => {
    const component = shallow(<Modal {...initialprops} />);
    expect(component).toMatchSnapshot();
  });

  describe('componentDidMount', () => {
    beforeEach(() => {
      //clear mock for next test
      customEvent.on.mockClear();
    });
    it('should warn and exit if eventON prop is not defined', () => {
      const component = shallow(<Modal />);
      const instance = component.instance();
      instance.componentDidMount();
      expect(customEvent.on).not.toBeCalled();
    });
    describe('calls CustomEvent on method', () => {
      let instance;
      beforeEach(() => {
        instance = shallow(<Modal {...initialprops} />).instance();
        instance.componentDidMount();
      });
      it('should assign function to OPEN_MODAL event', () => {
        const openModalFn = instance.openModal;
        expect(customEvent.on).toBeCalledWith('OPEN_MODAL', openModalFn);
      });

      fit('should assign function to CLOSE_OPEN_MODAL event', () => {
        const closeModalFn = instance.closeModal;
        instance.scrollMe = jest.fn();
        expect(customEvent.on).toBeCalledWith('CLOSE_OPEN_MODAL', closeModalFn);
      });
    });
  });

  describe('open and close Modal', () => {
    describe('calls openModal instance method', () => {
      it('should change local state to open=true', () => {
        const wrapper = shallow(<Modal {...initialprops} />);
        const instance = wrapper.instance();
        instance.openModal();
        expect(wrapper.state('open')).toEqual(true);
      });
    });
    describe('calls closeModal instance method', () => {
      let wrapper;
      let instance;
      beforeEach(() => {
        wrapper = shallow(<Modal {...initialprops} />);
        wrapper.setState({ open: true });
        instance = wrapper.instance();
      });
      it('should stay open when clicked inside the modal body when e.target === e.currentTarget', () => {
        const e = {
          target: {},
          currentTarget: null,
        };
        instance.closeModal(e);
        expect(wrapper.state('open')).toEqual(true);
      });
      it('should stay open if ESC key is not pressed', () => {
        const e = {
          type: 'keydown',
          key: 'space',
        };
        instance.closeModal(e);
        expect(wrapper.state('open')).toEqual(true);
      });
      it('should close when clicked outside modal body', () => {
        const e = {
          target: null,
          currentTarget: null,
          type: 'none',
        };
        instance.closeModal(e);
        expect(wrapper.state('open')).toEqual(false);
      });
      it('should close when ESC key is pressed down', () => {
        const e = {
          type: 'keydown',
          key: 'Escape',
        };
        instance.closeModal(e);
        expect(wrapper.state('open')).toEqual(false);
      });
    });
  });

  describe('close Modal instance method', () => {});
});
