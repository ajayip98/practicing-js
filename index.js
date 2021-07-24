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