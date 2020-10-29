// declare class

// export class using module.exports
class shape {
    constructor(){
        this.color="red";

    }
    drawShape(){
        console.log("draw shape");
    }
    calculateArea(){
        console.log("dont know the area");
        return 0;
    }
}
export {shape}