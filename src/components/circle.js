// import using require

// declare class


// export class using module.exports

import shape from './shape';
export default class Circle extends Shape {
    constructor(){
        super();
    }
    calculateArea(){
        console.log ("Area of the circle is"+this.color);
      return 3.14*5*5;
    }
}