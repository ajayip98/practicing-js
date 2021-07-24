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
const circle = new Circle(1);
console.log(circle);