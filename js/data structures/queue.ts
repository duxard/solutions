class Queue<T> {
  store: Record<number, T> = {};
  head = 0;
  tail = 0;

  enqueue(elem: T): void {
    this.store[this.tail] = elem;
    ++this.tail;
  }

  dequeue(): T | undefined {
    if(!this.size()) {
      return;
    }
    const elem = this.store[this.head];
    delete this.store[this.head];
    ++this.head;
    return elem;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.tail-this.head;
  }

  peek(): T | undefined {
    return this.store[this.head];
  }
}
