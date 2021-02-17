import customEvent from '../../customEvents/dispatchEvent';

describe('dispachEvent factory', () => {
  it('should return object with properties', () => {
    const factoryProperties = ['on', 'emit', 'events'];
    expect(Object.keys(customEvent)).toEqual(factoryProperties);
  });

  describe('call on method', () => {
    beforeEach(() => {
      customEvent.events = {};
    });
    describe('with no params', () => {
      expect(customEvent.on()).toBe(undefined);
    });
    describe('with no id and second argument as object', () => {
      expect(customEvent.on(undefined, {})).toBe(undefined);
    });
    describe('with id as String and second argument as function', () => {
      customEvent.on('OPEN_MODAL', () => {});
      expect(customEvent.events).toHaveProperty('OPEN_MODAL');
    });
  });

  describe('call emit method', () => {
    it('with no params should return undefined', () => {
      customEvent.events = {};
      expect(customEvent.emit()).toBe(undefined);
    });
    describe('with id and second argument undefined', () => {
      it('events object should have property sent as id param', () => {
        const events = { OPEN_MODAL: [() => {}] };
        customEvent.events = events;
        customEvent.emit('OPEN_MODAL');
        expect(customEvent.events).toHaveProperty('OPEN_MODAL');
      });
    });
    describe('with id and second argument as payload', () => {
      it('should call customEvent mapped by ID stored function with payload', () => {
        customEvent.events = {
          OPEN_MODAL: [jest.fn(() => {})],
          CLOSE_MODAL: [jest.fn(() => {})],
        };
        const payload = ['one', 'two'];
        customEvent.emit('OPEN_MODAL', { payload: payload[0] });
        customEvent.emit('CLOSE_MODAL', { payload: payload[1] });
        Object.keys(customEvent.events).forEach((property, i) => {
          expect(customEvent.events[property][0]).toBeCalledWith({
            payload: payload[i],
          });
        });
      });
    });
  });
});
