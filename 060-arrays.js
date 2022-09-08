const strings = new Array('a', 'b', 'c', 'd').fill(10, 2, 4);

strings.unshift(1, 2);
strings.splice(0, 0, 'spliced-begin');
strings.splice(strings.length, 0, 'spliced-end');
strings.splice(Math.floor(strings.length / 2), 0, 'spliced-n/2');

// console.log(strings);