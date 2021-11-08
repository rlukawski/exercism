export class LinkedList<TElement> {
  // it doesn't has to be a list / array is sufficient
  list: TElement[] = [];

  public push(element: TElement) {
    this.list.push(element)
  }

  public pop(): TElement {
    return this.list.splice(this.list.length-1,1)[0];
  }

  public shift(): TElement {
    return this.list.splice(0,1)[0];
  }

  public unshift(element: TElement) {
    this.list.unshift(element);

  }

  public delete(element: TElement) {
    const idx = this.list.findIndex(item => item === element);
    if( idx>=0 ) {
      this.list.splice(idx,1);
    }
  }

  public count(): number {
    return this.list.length;
  }
}
