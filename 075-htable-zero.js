/******************************************************************************************************/
class HashTable { 
  constructor(size){ 
    this.data = new Array(size); 
  }

  _hash(key) { 
    let hash = 0; 

    for (let i =0; i < key.length; i++) { 
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    } 
    
    return hash; 
  }

  get(key) {
    const hash = this._hash(key),
          bucket = this.data[hash];

    if (bucket) {
      for (const item of bucket) {
        if(item[0] === key) {
          return item[1];
        }
      }
    }

    let err = new Error();
    err.message = "element not found!"
    err.code = 404;
    throw err;
  }

  set(key, value) {
    const hash = this._hash(key);

    if(!this.data[hash]) {
      this.data[hash] = [];
    } 

    this.data[hash].push([key, value]);

    return this.data;
  }

  keys() {
    const keys = [];

    for (const bucket of this.data) {
      if(bucket) {
        for (const item of bucket) {
          keys.push(item[0]);
        }
      }
    }

    return keys;
  }
}

/***************************************     MAIN     *************************************************/
const htable = new HashTable(3);
htable.set("grapes", 10_000);
htable.set("apples", 44);
htable.set("banana", 12);

try {
  console.log(htable.get("sad"));
} catch (err) {
  const { code, message } = err;
  console.log("ERROR:", { code, message });
}

console.log(htable.keys());