const customEvent = () => {
  //this needs to be assign to regular function because we want to have access to this;
  const events = {};
  // const on = (id, fn) => {}
  const on = function (id, fn) {
    if (id && !this.events[id]) {
      this.events[id] = [];
    }
    if (!id || typeof fn !== 'function') {
      console.warn('you event callback has to be function or id doesnt exists');
      return;
    }
    this.events[id].push(fn);
  };

  const emit = function (id, payload = undefined) {
    if (!Array.isArray(this.events[id])) return;
    this.events[id].forEach((callback) => callback(payload));
  };

  return {
    on,
    emit,
    events,
  };
};

export default customEvent();
