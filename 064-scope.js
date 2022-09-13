/**
 * @GOAl : this vs process
 */

/******************************************************************************************************/
this['scope'] = "gobal";

const foo = () => {
  console.log(this);
}

function bar() {
  console.log(this);
}

class Foo{
  name = "ange";
  age = 20;

  getThis() {
    console.log(this);
  }
}

/***************************************     MAIN     *************************************************/
console.log(this);
foo();
bar();
new Foo().getThis();
console.log(process);