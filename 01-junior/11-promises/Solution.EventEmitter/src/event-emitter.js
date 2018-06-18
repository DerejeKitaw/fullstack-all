// YOUR CODE HERE
class EventEmitter {
  constructor() {
    this.callbacks = {};
  }

  on(event, callback) {
    if (this.callbacks[event]) this.callbacks[event].push(callback);
    else this.callbacks[event] = [callback];
  }

  emit(event, payload) {
    if (this.callbacks[event]) {
      this.callbacks[event].forEach(cb => cb(payload));
    }
  }

  removeListener(event, callback) {
    if (this.callbacks[event]) {
      this.callbacks[event] = this.callbacks[event].filter(cb => cb !== callback)
    }
  }
}
