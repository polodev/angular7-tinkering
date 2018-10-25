// class Animal {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }


// class Animal2 {
//   constructor(private name: string) {}
// }

// class Animal and Animal2 is same things


class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(meters: number = 0) {
    alert(this.name + ' moved ' + meters + 'm.');
  }

}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(meters: number = 5) {
    alert('Slithering...');
    super.move(meters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(meters: number = 45) {
    alert('Galloping');
    super.move(meters);
  }
}

// interface function
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// type SearchFunc = (source: string, subString: string) => boolean;
let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
  const result = source.search(subString);
  if (result === -1) {
    return false;
  }
  return true;
}

// type LabelledClothing = (label: string, size: number, color?: string);
// interface properties
interface LabelledClothing {
  label: string;
  size: number;
  color?: string;
}

function printLabel(labelled: LabelledClothing) {
  console.log(`${labelled.label} ${labelled.size}`);
}

// array interace
interface StringArray = {
  [index: number]: string;
}
let myArr: StringArray;
myArr = ['bob', 'fred'];

// class interface
interface ClockInterface {
  currentTime: Date,
  setTime(d: Date);
}

class Clock implements ClockInterface {
  constructor(h: number; m: number){};
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
}

interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}

let square = <Square>{};
square.color = 'blue';
square.sideLength = 10;





