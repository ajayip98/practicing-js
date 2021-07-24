// Factory function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('Draw')
        }
    }
}

const creatCircle1 = createCircle(1);
console.log(creatCircle1);
const createCircle2 = createCircle(2);
console.log(createCircle2);

//Constructor function.
function Circle(radius) {
    this.radius = 'radius',
    this.draw = function(){
        console.log('draw')
    }
}
const circle = new Circle(4);
// console.log(circle);
circle.call=({}, 1);
circle.apply = ({}, 1);

//Primitives copied by value
let x = 10;
let y = x;
x = 20;
console.log(x);
console.log(y);

//Objects copied by reference
let z = {value : 10};
let a = z;
z.value = 25;
console.log(z);
console.log(a);

