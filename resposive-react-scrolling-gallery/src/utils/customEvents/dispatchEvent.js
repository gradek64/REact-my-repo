const customEvent = () => {
  const events = {};

  const on = (id, fn, test = false) => {
    if (!events[id]) {
      events[id] = [];
    }
    if (!id || typeof fn !== 'function') {
      if (!test) console.warn('you event callback has to be function or id doesnt exists');
      return;
    }
    events[id].push(fn);
  };

  const emit = (id, payload = undefined) => {
    if (!Array.isArray(events[id])) return;
    events[id].forEach(callback => callback(payload));
  };

  return {
    on, emit,
  };
};

export default customEvent();
