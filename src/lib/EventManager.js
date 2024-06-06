export default class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event, payload) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event).forEach((listener) => {
      listener(payload);
    });
  }

  removeListeners(event, listenersToRemove) {
    if (!this.listeners.has(event)) {
      return;
    }

    const filteredListeners = this.listeners.get(event).filter(
      (listeners) => listeners !== listenersToRemove,
    );

    this.listeners.set(event, filteredListeners);
  }
}
