/**
 * @Exercise : Redefine Build-in Array class to Arr
 * @Example  : An array in JS is just an object with integer index
 */

/******************************************************************************************************/
class Arr{
  constructor(){
    this.length = 0;
    this.data = {};

    for(let key in arguments) {
      this.data[key] = arguments[key];
      this.length++;
    }
  }

  get (idx) {
    return this.data[idx];
  }

  push(elt) {
    this.data[this.length] = elt
    this.length++;
  }

  pop() {
    const last = this.data[this.length - 1];
    delete this.data[--this.length];
    return last;
  }

  delete(idx) {
    if(idx >= this.length) {
      return;
    }
    const elt = this.data[idx];
    this.shiftItems(idx)
    return elt
  }

  shiftItems(idx) {
    for(let i = idx; i <= this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[--this.length];
  }

  toString() {
    let tab = []
    for (const key in this.data) {
      tab.push(this.data[key]);
    }
    console.log(tab);
  }
}

/***************************************     MAIN     *************************************************/
const array = new Arr("how", "are", "you", "?");
array.toString();
console.log(array.get(1));

array.push(5.5);
array.toString();

console.log(array.pop());
array.toString();

console.log(array.delete(1));
array.toString();