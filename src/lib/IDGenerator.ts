/**
 * Create unique ID base on date
 * Note: This is not the best way to implement unique id for it based on date hence similar id's may occur
 */
export class UID {
  #radix;
  constructor(radix) {
    this.#radix = radix;
    this.set();
  }
  set() {
    const head = Date.now().toString(this.#radix);
    const tail = Math.random().toString(this.#radix).substring(2);
    return head + tail;
  }
}
